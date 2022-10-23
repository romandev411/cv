class CreateCv extends Template {
    constructor(parent, data) {
        super(data);

        this.data = data
        this.parent = parent;
        this.settings = {
            lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
            size: localStorage.getItem('size') ? localStorage.getItem('size') : '100',
            theme: 'light',
            fullScreen: null,
        }
        this.time();
    }

    init() {
        this.renderTemplate(this.template(this.data[this.settings.lang]));
        this.setSize(this.settings.size);
    }

    setFullScreen() {
        const w = document.documentElement.clientWidth;
        const fZ = parseInt(getComputedStyle(document.body, '').fontSize);
        const widthContent =  document.querySelector('.cv').offsetWidth / fZ;

        const fullSize = w / fZ/ widthContent * parseFloat(this.settings.size);

        this.updateSetting({
            fullScreen: fullSize,
            size: fullSize,
        });
    }

    fullScreen() {
        this.setFullScreen();
        this.updateSize('', this.settings.fullScreen)
    }

    renderTemplate(template) {
        document.querySelector(this.parent).insertAdjacentHTML('afterbegin', template)
    }

    updateSetting(settings) {
        this.settings = Object.assign(this.settings, settings);
    }

    editLang(lang) {
        if (this.settings.lang === lang) {
            return;
        }

        localStorage.setItem('lang', lang);

        this.updateSetting({
            lang: localStorage.getItem('lang'),
        });

        document.querySelector(this.parent).textContent = '';

        this.renderTemplate(this.template(this.data[this.settings.lang]));
    }

    setSize(size) {
        const elem = document.querySelector('html');
        elem.style.setProperty('--base-size', size + '%');
    }

    updateSize(sing, size) {
        if (sing === '+') {
            localStorage.setItem('size', `${parseFloat(this.settings.size) + 15}`);
        } else if (sing === '-') {
            localStorage.setItem('size', `${parseFloat(this.settings.size) - 15}`);
        } else {
            localStorage.setItem('size', size ? size : '100');
        }

        this.updateSetting({
            size: localStorage.getItem('size'),
        });

        this.setSize(this.settings.size);

        this.valueSize(this.settings.size);
    }

    valueSize(size) {
        document.querySelector('.size-input').value = parseFloat(size).toFixed(0) + '%';
    }

    changeSize() {
        document.querySelector('.size-input'),addEventListener('change', (e) => {
            this.updateSize('', parseFloat(e.target.value));
        })
    }

    toggleTheme() {
        document.querySelector('body').classList.toggle('dark');
    }

    time() {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        return today;
    }
}

const app = new CreateCv('.app', data)

document.addEventListener('DOMContentLoaded', app.init());
