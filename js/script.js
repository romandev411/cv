class CreateCv {
    constructor(parent, data) {
        this.data = data
        this.parent = parent;
        this.pixel = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
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

    templateControl(data) {
        return `
            <aside class="control-panel">
                <div class="control-panel__wrap">
                    <div class="control-panel__title">
                        <div class="control-panel__icon">
                            <svg width="50" height="50">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#file"></use>
                            </svg>
                        </div>

                        ${data.titleHeader}
                    </div>

                    <div class="control-panel__size-content">
                        <div class="control-panel__width-content">
                            <button class="button-size" type="button" onclick="app.updateSize()">
                                <span class="button-size__icon">
                                    <svg width="50" height="50">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#refresh"></use>
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <span class="line">|</span>

                        <div class="control-panel__zoom">
                            <button class="button-size" type="button" onclick="app.updateSize('-')">
                                <span class="button-size__icon">
                                    <svg width="50" height="50">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#minus"></use>
                                    </svg>
                                </span>
                            </button>

                            <input class="size-input" type="text" value="${parseFloat(this.settings.size).toFixed(0) + '%'}" onchange="app.changeSize()">

                            <button class="button-size" type="button" onclick="app.updateSize('+')">
                                <span class="button-size__icon">
                                    <svg width="50" height="50">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#plus"></use>
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <span class="line">|</span>

                        <div class="control-panel__width-content">
                            <button class="button-size" type="button" onclick="app.fullScreen()">
                                <span class="button-size__icon">
                                    <svg width="50" height="50">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fullscreen"></use>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="control-panel__right">
                        <div class="control-panel__theme">
                            <button class="button-theme" type="button" onclick="app.toggleTheme()">
                                <span class="button-theme__icon">
                                    <svg width="50" height="50">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#theme"></use>
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <span class="line">|</span>

                        <div class="control-panel__lang-content">
                            <div class="lang-seelct">
                                <span class="lang-seelct__icon">
                                    <svg width="50" height="50">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lang"></use>
                                    </svg>
                                </span>

                                <select class="lang-seelct__select" onchange="app.editLang(this.value)">
                                    ${
                                        this.settings.lang === 'en' ?
                                        `
                                            <option value="en">EN</option>
                                            <option value="ru">RU</option>
                                        `
                                        :
                                        `
                                            <option value="ru">RU</option>
                                            <option value="en">EN</option>
                                        `
                                    }
                                </select>
                            </div>
                        </div>

                        <span class="line">|</span>

                        <div class="control-panel__save">
                            <button class="print-btn" type="button" onclick="print()">
                                <span class="print-btn__icon">
                                    <svg width="50" height="50">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#save"></use>
                                    </svg>
                                </span>

                                <span class="line">/</span>

                                <span class="print-btn__icon">
                                    <svg width="50" height="50">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#print"></use>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        `;
    }

    template(data) {
        return `
            ${this.templateControl(data)}

            <div class="cv">
                <div class="cv__wrap">
                    <header class="header">
                        <div class="header__top">
                            <time class="header__time" datetime="${this.time()}">${this.time()}</time>
                            <h1 class="header__title">${data.title}</h1>
                        </div>

                        <div class="header__bottom">
                            <p class="header__name">
                                ${data.name}
                            </p>

                            <p class="header__position">
                                ${data.position}
                            </p>
                        </div>
                    </header>

                    <aside class="aside">
                        <img class="aside__avatar" src="./img/avatar.jpeg" width="200">

                        <h2 class="title aside__title">${data.aside.title}</h2>
                            
                        <ul class="aside__contacts">
                            ${data.aside.contacts.map((el) => {
                                return `
                                    <li class="aside__contacts-item">
                                        <div class="aside__item">
                                            ${el.slug == 'portfolio' ?
                                            `
                                            <div class="aside__contact-icon">
                                                <div class="pixel aside__icon--pixel">
                                                    ${this.pixel.map((el, index) => {
                                                        return `
                                                            <span class="item${index + 1}"></span>
                                                        `
                                                    }).join('')}
                                                </div>

                                                <svg class="aside__icon aside__icon--print" width="50" height="50">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#${el.slug}"></use>
                                                </svg>
                                            </div>
                                            `
                                            :
                                            `
                                            <div class="aside__contact-icon">
                                                <svg class="aside__icon" width="50" height="50">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#${el.slug}"></use>
                                                </svg>
                                            </div>
                                            `
                                            }

                                            ${el.attr ?
                                            `
                                            <a class="aside__link" ${el.attr} title="${el.title}">
                                                ${el.el}
                                            </a>
                                            ` 
                                            :
                                            `
                                            <div class="aside__link" title="${el.title}">
                                                ${el.el}
                                            </div>  
                                            `
                                            }

                                        </div>
                                    </li>
                                `;
                            }).join('')}
                        </ul>
                    </aside>

                    <main class="main">
                        <section class="skills main__item">
                            <h2 class="title skills__title">${data.skills.title}</h2>

                            <ul class="skills__list">
                                ${data.skills.list.map((el) => {
                                    return `
                                        <li class="skills__list-item">${el}</li>
                                    `
                                }).join('')}
                            </ul>
                        </section>

                        <section class="experience main__item">
                            <h2 class="title experience__title-sect">${data.experience.title}</h2>

                            <ul class="experience__list">
                                ${data.experience.list.map((el) => {
                                    return `
                                        <li class="experience__list-item">
                                            <div class="experience__item">
                                                <strong class="experience__title">${el.company.title}:</strong>
                                                <p class="experience__text">${el.company.text} <a class="experience__text-link" href="${el.company.link}">(${el.company.linkText})</a></p>
                                            </div>

                                            <div class="experience__item">
                                                <strong class="experience__title">${el.period.title}:</strong>
                                                <p class="experience__text">${el.period.text}</p>
                                            </div>

                                            <div class="experience__item">
                                                <strong class="experience__title">${el.responsibilities.title}:</strong>
                                                <p class="experience__text">${el.responsibilities.text}</p>
                                            </div>

                                            <div class="experience__item">
                                                <strong class="experience__title">${el.technologies.title}:</strong>
                                                <p class="experience__text">${el.technologies.text}</p>
                                            </div>
                                        </li>
                                    `
                                }).join('')}
                            </ul>
                        </section>

                        <section class="languages main__item">
                            <h2 class="title languages__title">${data.languages.title}</h2>

                            <ul class="languages__list">
                                ${data.languages.list.map((el) => {
                                    return `
                                        <li class="languages__list-item">
                                            <div class="languages__title">
                                                ${el.title}
                                            </div>

                                            <div class="languages__level">
                                                ${el.level}
                                            </div>
                                        </li>
                                    `
                                }).join('')}
                            </ul>
                        </section>

                        <section class="education main__item">
                            <h2 class="title education__title">${data.education.title}</h2>

                            <ul class="education__list">
                                ${data.education.list.map((el) => {
                                    return `
                                        <li class="education__list-item">
                                            <div class="education__item">
                                                <strong class="education__title">${el.place.title}</strong>
                                                <p class="education__text">${el.place.text}</p>
                                            </div>

                                            <div class="education__item">
                                                <strong class="education__title">${el.period.title}</strong>
                                                <p class="education__text">${el.period.text}</p>
                                            </div>

                                            <div class="education__item">
                                                <strong class="education__title">${el.qualications.title}</strong>
                                                <p class="education__text">${el.qualications.text}</p>
                                            </div>

                                            <div class="education__item">
                                                <strong class="education__title">${el.degree.title}</strong>
                                                <p class="education__text">${el.degree.text}</p>
                                            </div>
                                        </li>
                                    `
                                }).join('')}
                            </ul>
                        </section>
                    </main>

                    <footer class="footer">${data.footer}</footer>
                </div>
            </div>
        `;
    }
}

const data = {
    ru: {
        title: 'CV Roman Yurchenko',
        titleHeader: 'CV Roman Yurchenko.pdf',
        time: {
            textTime: '6/7/2019 ',
            robotTime: '6-7-2019 '
        },
        name: 'Роман Юрченко',
        position: 'Front-end web developer',
        aside: {
            title: 'Контакты',
            contacts: [
                {
                    title: 'Место проживания:',
                    slug: 'location',
                    el: 'Украина, Киев',
                    attr: '',
                },
                {
                    title: 'Телефон:',
                    slug: 'phone',
                    el: '+38 097 875 03 17',
                    attr: 'href="tel:+380978750317"',
                },
                {
                    title: 'Email:',
                    slug: 'email',
                    el: 'romandev411@gmail.com',
                    attr: 'href="mailto:romandev411@gmail.com"',
                },
                {
                    title: 'Telegram:',
                    slug: 'telegram',
                    el: 'romandev411',
                    attr: 'href="https://t.me/romandev411"',
                },
                {
                    title: 'Linkedin:',
                    slug: 'linkedin',
                    el: 'linkedin',
                    attr: 'href="https://github.com/romandev411"',
                },
                {
                    title: 'Github:',
                    slug: 'github',
                    el: 'Github',
                    attr: 'href="https://github.com/romandev411"',
                },
                {
                    title: 'Codepen:',
                    slug: 'codepen',
                    el: 'Codepen',
                    attr: 'href="https://codepen.io/yurch-html"',
                },
                {
                    title: 'Портфолио:',
                    slug: 'portfolio',
                    el: 'Портфолио',
                    attr: 'href="https://romandev411.github.io"',
                },
            ],
        },
        skills: {
            title: 'Технические навыки',
            list: [
                'HTML / HTML5 / CSS / CSS3 / SASS / Flexboxes, Bootstrap, Material Design',
                'JavaScript, ES6, React JS, Redux, Redux-Observable, Redux-Saga, Websockets, jQuery',
                'Node.js, Express.js, MongoDB, Redis, Jest, Enzyme',
                'GIT, Bitbucket, Gulp, Webpack, Bower, Npm, Yarn',
                'Gigma, Adobe Photoshop',
                'JIRA, Scrum',
            ],
        },
        experience: {
            title: 'Опыт',
            list: [
                {
                    company: {
                        title: 'Company',
                        text: 'Ciklum',
                        link: 'Ciklum.com',
                        linkText: 'Ciklum.com',
                    },
                    period: {
                        title: 'period',
                        text: 'Jan 2018 - Aug 2018',
                    },
                    responsibilities: {
                        title: 'responsibilities',
                        text: 'Support and expansion of the existing high-loaded trading platforms of the company, development of admin panels, bug xing',
                    },
                    technologies: {
                        title: 'technologies',
                        text: 'Reactstrap, Material Design, Yarn, React.js, Redux, Redux-Observable, Websockets, Node.js',
                    },
                },
                {
                    company: {
                        title: 'Company',
                        text: 'Ciklum',
                        link: 'Ciklum.com',
                        linkText: 'Ciklum.com',
                    },
                    period: {
                        title: 'period',
                        text: 'from Aug 2018',
                    },
                    responsibilities: {
                        title: 'responsibilities',
                        text: 'Support and expansion of the existing high-loaded trading platforms of the company, development of admin panels, bug xing',
                    },
                    technologies: {
                        title: 'technologies',
                        text: 'Reactstrap, Material Design, Yarn, React.js, Redux, Redux-Observable, Websockets, Node.js',
                    },
                },
                {
                    company: {
                        title: 'Company',
                        text: 'Ciklum',
                        link: 'Ciklum.com',
                        linkText: 'Ciklum.com',
                    },
                    period: {
                        title: 'period',
                        text: 'Jan 2018 - Aug 2018',
                    },
                    responsibilities: {
                        title: 'responsibilities',
                        text: 'Support and expansion of the existing high-loaded trading platforms of the company, development of admin panels, bug xing',
                    },
                    technologies: {
                        title: 'technologies',
                        text: 'Reactstrap, Material Design, Yarn, React.js, Redux, Redux-Observable, Websockets, Node.js',
                    },
                },
            ],
        },
        languages: {
            title: 'languages',
            list: [
                {
                    title: 'English',
                    level: 'B1',
                },
            ],
        },
        education: {
            title: 'Образование',
            list: [
                {
                    place: {
                        title: 'University',
                        text: 'usz',
                    },
                    period: {
                        title: 'period',
                        text: 'Jan 2018 - Aug 2018',
                    },
                    qualications: {
                        title: 'qualications',
                        text: 'Frontend-end Development',
                    },
                    degree: {
                        title: 'degree',
                        text: 'bakalavr',
                    },
                },
            ],
        },
        footer: 'cv roman yurch'
    },
    en: {
        title: 'CV Roman Yurchenko',
        titleHeader: 'CV Roman Yurchenko.pdf',
        time: {
            textTime: '6/7/2019 ',
            robotTime: '6-7-2019 '
        },
        name: 'Roman Yurchenko',
        position: 'Front-end web developer',
        aside: {
            title: 'Контакты',
            contacts: [
                {
                    title: 'Место проживания:',
                    slug: 'location',
                    el: 'Украина, Киев',
                    attr: '',
                },
                {
                    title: 'Телефон:',
                    slug: 'phone',
                    el: '+38 097 875 03 17',
                    attr: 'href="tel:+380978750317"',
                },
                {
                    title: 'Email:',
                    slug: 'email',
                    el: 'romandev411@gmail.com',
                    attr: 'href="mailto:romandev411@gmail.com"',
                },
                {
                    title: 'Telegram:',
                    slug: 'telegram',
                    el: 'romandev411',
                    attr: 'href="https://t.me/romandev411"',
                },
                {
                    title: 'Linkedin:',
                    slug: 'linkedin',
                    el: 'linkedin',
                    attr: 'href="https://github.com/romandev411"',
                },
                {
                    title: 'Github:',
                    slug: 'github',
                    el: 'Github',
                    attr: 'href="https://github.com/romandev411"',
                },
                {
                    title: 'Codepen:',
                    slug: 'codepen',
                    el: 'Codepen',
                    attr: 'href="https://codepen.io/yurch-html"',
                },
                {
                    title: 'Портфолио:',
                    slug: 'portfolio',
                    el: 'Портфолио',
                    attr: 'href="https://romandev411.github.io"',
                },
            ],
        },
        skills: {
            title: 'Технические навыки',
            list: [
                'HTML / HTML5 / CSS / CSS3 / SASS / Flexboxes, Bootstrap, Material Design',
                'JavaScript, ES6, React JS, Redux, Redux-Observable, Redux-Saga, Websockets, jQuery',
                'Node.js, Express.js, MongoDB, Redis, Jest, Enzyme',
                'GIT, Bitbucket, Gulp, Webpack, Bower, Npm, Yarn',
                'Gigma, Adobe Photoshop',
                'JIRA, Scrum',
            ],
        },
        experience: {
            title: 'Опыт',
            list: [
                {
                    company: {
                        title: 'Company',
                        text: 'Ciklum',
                        link: 'Ciklum.com',
                        linkText: 'Ciklum.com',
                    },
                    period: {
                        title: 'period',
                        text: 'Jan 2018 - Aug 2018',
                    },
                    responsibilities: {
                        title: 'responsibilities',
                        text: 'Support and expansion of the existing high-loaded trading platforms of the company, development of admin panels, bug xing',
                    },
                    technologies: {
                        title: 'technologies',
                        text: 'Reactstrap, Material Design, Yarn, React.js, Redux, Redux-Observable, Websockets, Node.js',
                    },
                },
                {
                    company: {
                        title: 'Company',
                        text: 'Ciklum',
                        link: 'Ciklum.com',
                        linkText: 'Ciklum.com',
                    },
                    period: {
                        title: 'period',
                        text: 'from Aug 2018',
                    },
                    responsibilities: {
                        title: 'responsibilities',
                        text: 'Support and expansion of the existing high-loaded trading platforms of the company, development of admin panels, bug xing',
                    },
                    technologies: {
                        title: 'technologies',
                        text: 'Reactstrap, Material Design, Yarn, React.js, Redux, Redux-Observable, Websockets, Node.js',
                    },
                },
                {
                    company: {
                        title: 'Company',
                        text: 'Ciklum',
                        link: 'Ciklum.com',
                        linkText: 'Ciklum.com',
                    },
                    period: {
                        title: 'period',
                        text: 'Jan 2018 - Aug 2018',
                    },
                    responsibilities: {
                        title: 'responsibilities',
                        text: 'Support and expansion of the existing high-loaded trading platforms of the company, development of admin panels, bug xing',
                    },
                    technologies: {
                        title: 'technologies',
                        text: 'Reactstrap, Material Design, Yarn, React.js, Redux, Redux-Observable, Websockets, Node.js',
                    },
                },
            ],
        },
        languages: {
            title: 'languages',
            list: [
                {
                    title: 'English',
                    level: 'B1',
                },
            ],
        },
        education: {
            title: 'Образование',
            list: [
                {
                    place: {
                        title: 'University',
                        text: 'usz',
                    },
                    period: {
                        title: 'period',
                        text: 'Jan 2018 - Aug 2018',
                    },
                    qualications: {
                        title: 'qualications',
                        text: 'Frontend-end Development',
                    },
                    degree: {
                        title: 'degree',
                        text: 'bakalavr',
                    },
                },
            ],
        },
        footer: 'cv roman yurch'
    }
};

const app = new CreateCv('.app', data)

document.addEventListener('DOMContentLoaded', app.init());
