const themeSwitcher = {
    setTheme(theme) {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    },

    setStoredTheme() {
        this.setTheme(localStorage.getItem('theme') || this.preferedColorScheme);
    },

    toggleTheme() {
        if (localStorage.getItem('theme') == 'dark') {
            this.setTheme('light');
        } else {
            this.setTheme('dark');
        }
        return localStorage.getItem('theme');
    },

    get scheme() {
        return (localStorage.getItem('theme') || this.preferedColorScheme);
    },

    get preferedColorScheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },

    init() {
        let switchers = document.querySelectorAll('a[data-theme-switcher]');
        this.setStoredTheme();
        switchers.forEach(function(s) {
            if (themeSwitcher.scheme == 'dark') {
                s.classList.remove('fa-sun-o');
                s.classList.add('fa-moon-o');
            } else {
                s.classList.remove('fa-moon-o');
                s.classList.add('fa-sun-o');
            }
            s.onclick = function(e) {
                e.preventDefault();
                let theme = themeSwitcher.toggleTheme();
                if (theme == 'dark') {
                    s.classList.remove('fa-sun-o');
                    s.classList.add('fa-moon-o');
                } else {
                    s.classList.remove('fa-moon-o');
                    s.classList.add('fa-sun-o');
                }
            }
        });
    }
}
