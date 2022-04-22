const SITE_URL = document.currentScript.getAttribute('site-url');
const LAYOUT_URL = document.currentScript.getAttribute('layout-url');

async function getSiteData() {
    const requestUrl = SITE_URL || '/data/site.json';
    const request = new Request(requestUrl);
    const response = await fetch(request);
    const data = await response.json();
    data.website = {
        "title": "brandonhs",
        "base_path": "/",
        "socials": [
            {
                "name": "linkedin",
                "href": "https://www.linkedin.com/in/brandonhs/",
                "fa_class": "linkedin"
            },
            {
                "name": "github",
                "href": "https://github.com/brandonhs",
                "fa_class": "github"
            },
            {
                "name": "twitter",
                "href": "https://twitter.com/brandonhstevens",
                "fa_class": "twitter"
            }
        ]
    };
    return data;
}

async function getSiteLayout() {
    const requestUrl = LAYOUT_URL || '/templates/layout.hbs';
    const request = new Request(requestUrl);
    const response = await fetch(request);
    const layout = await response.text();
    return layout;
}

async function populate() {
    const data = await getSiteData();
    const layout = await getSiteLayout();

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
        return moment(options.fn(this), 'YYYY-MM-DD').format('MMMM Y');
    });

    var template = Handlebars.compile(layout);
    const site = template(data);

    const div = document.getElementById('site');
    div.innerHTML = site;

    themeSwitcher.init();
}

populate();
