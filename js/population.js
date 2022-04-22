const SITE_URL = document.currentScript.getAttribute('site-url');
const LAYOUT_URL = document.currentScript.getAttribute('layout-url');

// replace any data in json with "from: <url>" with data from the url
async function dataFrom(object) {
    for (let k of Object.keys(object)) {
        if (typeof object[k] == 'object') {
            if ('from' in object[k]) {
                let data;
                try {
                    data = await getData(object[k].from);
                } catch {
                    data = await getSiteLayout(object[k].from);
                }
                object[k] = data;
            } else {
                await dataFrom(object[k]);
            }
        }
    }
    return object;
}

async function getData(requestUrl) {
    const request = new Request(requestUrl);
    const response = await fetch(request);
    var data = await response.json();
    data = await dataFrom(data);
    return data;
}

async function getSiteData(url) {
    const data = await getData(url);
    return data;
}

async function getSiteLayout(url) {
    const request = new Request(url);
    const response = await fetch(request);
    const layout = await response.text();
    return layout;
}

async function populate() {
    const data = await getSiteData(SITE_URL || '/data/site.json');
    const layout = await getSiteLayout(LAYOUT_URL || '/templates/layout.hbs');

    const headerData = await getSiteData('/data/header.json');
    const headerLayout = await getSiteLayout('/templates/header.hbs');

    Handlebars.registerHelper('markdown', function(options) {
        let str = options.fn(this);
        let parsed;
        if (str.startsWith('- '))
            parsed = '<li>' + marked.parseInline(str.substr(2)) + '</li>';
        else {
            parsed = marked.parseInline(str);
            parsed += '<br/>';
        }
        return parsed;
    });

    Handlebars.registerHelper('isdefined', function(value) {
        return value !== undefined;
    });

    Handlebars.registerHelper('timeperiod', function(options) {
        let str = options.fn(this);
        let start_end = str.split(':');
        let start = start_end[0];
        let end = start_end[1];
        if (end.length == 0) end = 'Present';
        else {
            end = moment(end, 'YYYY-MM-DD').format('MMMM Y');
        }
        start = moment(start, 'YYYY-MM-DD').format('MMMM Y');
        return `${start} - ${end}`;
    });

    Handlebars.registerHelper('date', function(options) {
        return moment(options.fn(this), 'YYYY-MM-DD').format('MMMM D, Y');
    });

    Handlebars.registerHelper('post', function(options) {
        return marked.parse(options.fn(this));
    });

    var template = Handlebars.compile(layout);
    var site = template(data);

    var headerTemplate = Handlebars.compile(headerLayout);
    var headerSite = headerTemplate(headerData);
    site = headerSite + site;

    const div = document.getElementById('site');
    div.innerHTML = site;

    themeSwitcher.init();
}

populate();
