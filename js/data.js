const data = {
    ua: {
        control: {
            refresh: 'refresh',
            min: 'min',
            max: 'max',
            full: 'max',
            theme: 'theme',
            lang: 'language',
            load: 'save / print',
        },
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
        achievements: {
            title: 'achievements',
            list: [
               {
                title: 'статьи на habr.com',
                items: [
                    {
                        text: 'Организация отступов в верстке (margin/padding)',
                        link: 'https://habr.com/ru/post/340420/',
                    },
                    {
                        text: 'Кастомный подход для нормализации и сброса стилей (custom-reset.css)',
                        link: 'https://habr.com/ru/post/420539/',
                    },
                ],
               }
            ],
        },
        footer: 'cv roman yurch'
    },
    en: {
        control: {
            refresh: 'refresh',
            min: 'min',
            max: 'max',
            full: 'max',
            theme: 'theme',
            lang: 'lamguage',
            load: 'save / print',
        },
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
        achievements: {
            title: 'achievements',
            list: [
               {
                title: 'статьи на habr.com',
                items: [
                    {
                        text: 'Организация отступов в верстке (margin/padding)',
                        link: 'https://habr.com/ru/post/340420/',
                    },
                    {
                        text: 'Кастомный подход для нормализации и сброса стилей (custom-reset.css)',
                        link: 'https://habr.com/ru/post/420539/',
                    },
                ],
               }
            ],
        },
        footer: 'cv roman yurch'
    }
};
