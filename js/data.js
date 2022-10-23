const data = {
    ua: {
        control: {
            refresh: 'Стандартний розмір',
            min: 'Зменшити',
            max: 'Збільшити',
            full: 'На весь єкран',
            theme: 'Змінити тему',
            lang: 'Мова',
            load: 'Зберегти / Друк',
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
            title: 'Контакти',
            contacts: [
                {
                    title: 'Місце проживання:',
                    slug: 'location',
                    el: 'УкраЇна, КиЇв',
                    attr: '',
                },
                // {
                //     title: 'Телефон:',
                //     slug: 'phone',
                //     el: '+38 097 875 03 17',
                //     attr: 'href="tel:+380978750317"',
                // },
                {
                    title: 'Email:',
                    slug: 'email',
                    el: 'romandev411@gmail.com',
                    attr: 'href="mailto:romandev411@gmail.com"',
                },
                {
                    title: 'Telegram:',
                    slug: 'telegram',
                    el: '@romandev411',
                    attr: 'href="https://t.me/romandev411"',
                },
                {
                    title: 'Linkedin:',
                    slug: 'linkedin',
                    el: 'Linkedin',
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
                    el: 'Портфоліо',
                    attr: 'href="https://romandev411.github.io"',
                },
            ],
        },
        skills: {
            title: 'Технічні навики',
            list: [
                'HTML / HTML5 / CSS / CSS3 / SASS / SVG / БЕМ / Flexboxes / Grid / Animation / Bootstrap / Material Design / graphics optimization / Cross-browser compatibility (IE, iphone)',
                'JavaScript, ES6, React JS, Redux, Vuejs, Vuex',
                'Node.js, Express.js, MongoDB',
                'GIT, Bitbucket, Gulp, Webpack, Npm, Yarn',
                'Figma, Adobe Photoshop',
                'JIRA, Scrum',
            ],
        },
        experience: {
            title: 'Досвід',
            list: [
                {
                    company: {
                        title: 'Компанія',
                        text: 'Kitcode',
                        link: 'https://jobs.dou.ua/companies/kitcode/',
                        linkText: 'jobs.dou.ua',
                    },
                    period: {
                        title: 'Період',
                        text: 'Січ 2018 - Жовт 2022 (4р. 7міс.)',
                    },
                    responsibilities: {
                        title: 'Обов\'язки',
                        text: 'Підтримка та розширення існуючих проектів компанії, розробка адмін панелей.',
                    },
                    technologies: {
                        title: 'Технології',
                        text: 'HTML/CSS, js, React, Redux, Vue, Vuex',
                    },
                },
                {
                    company: {
                        title: 'Компанія',
                        text: 'Logic IT Solutions',
                        link: 'https://jobs.dou.ua/companies/it-solutions/',
                        linkText: 'jobs.dou.ua',
                    },
                    period: {
                        title: 'Період',
                        text: 'Трав. 2017 - Груд. 2017 (7міс.)',
                    },
                    responsibilities: {
                        title: 'Обов\'язки',
                        text: 'Верстка проектів/лендінгів, підтримка існуючих проектів компанії.',
                    },
                    technologies: {
                        title: 'Технології',
                        text: 'HTML/CSS, js',
                    },
                },
                {
                    company: {
                        title: 'Компанія',
                        text: 'Webstars',
                        link: 'https://webstars.com.ua/',
                        linkText: 'webstars.com.ua',
                    },
                    period: {
                        title: 'Період',
                        text: 'Січ. 2016 - Трав. 2017 (1р. 6міс.)',
                    },
                    responsibilities: {
                        title: 'Обов\'язки',
                        text: 'Верстка проектів під CMS',
                    },
                    technologies: {
                        title: 'Технології',
                        text: 'HTML/CSS, js, Bootstrap',
                    },
                },
            ],
        },
        languages: {
            title: 'Мови',
            list: [
                {
                    title: 'English',
                    level: 'A2',
                },
            ],
        },
        education: {
            title: 'Освіта',
            list: [
                {
                    place: {
                        title: 'Курси',
                        text: 'Bambook Academy – англійська мова',
                    },
                    period: {
                        title: 'Період',
                        text: 'Січ. 2022 - Трав. 2022',
                    },
                    qualications: {
                        title: 'Кваліфікації',
                        text: 'Англійська мова - A2',
                    },
                    degree: {
                        title: '',
                        text: '',
                    },
                },
                {
                    place: {
                        title: 'Курси',
                        text: 'Training Center: IT курси by Freshcode',
                    },
                    period: {
                        title: 'Період',
                        text: 'Жовт. 2021 - Серп. 2022',
                    },
                    qualications: {
                        title: 'Кваліфікації',
                        text: 'FULL-STACK JS DEVELOPER',
                    },
                    degree: {
                        title: '',
                        text: '',
                    },
                },
                {
                    place: {
                        title: 'Університет',
                        text: 'https://usz.org.ua/',
                    },
                    period: {
                        title: 'Період',
                        text: '2012 - 2016',
                    },
                    qualications: {
                        title: 'Кваліфікації',
                        text: 'Облік та аудит',
                    },
                    degree: {
                        title: 'Ступінь',
                        text: 'Бакалавр',
                    },
                },
            ],
        },
        achievements: {
            title: 'Досягнення',
            list: [
               {
                title: 'Публікациї на habr.com',
                items: [
                    {
                        text: 'Організація відступів у верстці (margin/padding)',
                        link: 'https://habr.com/ru/post/340420/',
                    },
                    {
                        text: 'Кастомний підхід для нормалізації і скидання стилів (custom-reset.css)',
                        link: 'https://habr.com/ru/post/420539/',
                    },
                ],
               }
            ],
        },
        footer: 'CV Roman Yurchenko'
    },
    en: {
        control: {
            refresh: 'Standard size',
            min: 'Reduce',
            max: 'Increase',
            full: 'Full screen',
            theme: 'Change the subject',
            lang: 'Language',
            load: 'Save / Print',
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
            title: 'Contacts',
            contacts: [
                {
                    title: 'Location:',
                    slug: 'location',
                    el: 'Ukraine, Kyiv',
                    attr: '',
                },
                // {
                //     title: 'Телефон:',
                //     slug: 'phone',
                //     el: '+38 097 875 03 17',
                //     attr: 'href="tel:+380978750317"',
                // },
                {
                    title: 'Email:',
                    slug: 'email',
                    el: 'romandev411@gmail.com',
                    attr: 'href="mailto:romandev411@gmail.com"',
                },
                {
                    title: 'Telegram:',
                    slug: 'telegram',
                    el: '@romandev411',
                    attr: 'href="https://t.me/romandev411"',
                },
                {
                    title: 'Linkedin:',
                    slug: 'linkedin',
                    el: 'Linkedin',
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
                    title: 'Portfolio:',
                    slug: 'portfolio',
                    el: 'Портфоліо',
                    attr: 'href="https://romandev411.github.io"',
                },
            ],
        },
        skills: {
            title: 'Technical skills',
            list: [
                'HTML / HTML5 / CSS / CSS3 / SASS / SVG / БЕМ / Flexboxes / Grid / Animation / Bootstrap / Material Design / graphics optimization / Cross-browser compatibility (IE, iphone)',
                'JavaScript, ES6, React JS, Redux, Vuejs, Vuex',
                'Node.js, Express.js, MongoDB',
                'GIT, Bitbucket, Gulp, Webpack, Npm, Yarn',
                'Figma, Adobe Photoshop',
                'JIRA, Scrum',
            ],
        },
        experience: {
            title: 'Experience',
            list: [
                {
                    company: {
                        title: 'Company',
                        text: 'Kitcode',
                        link: 'https://jobs.dou.ua/companies/kitcode/',
                        linkText: 'jobs.dou.ua',
                    },
                    period: {
                        title: 'Period',
                        text: 'January 2018 - October 2022 (4 years, 7 months)',
                    },
                    responsibilities: {
                        title: 'Responsibilities',
                        text: 'Support and expansion of existing company projects, development of admin panels.',
                    },
                    technologies: {
                        title: 'Technologies',
                        text: 'HTML/CSS, js, React, Redux, Vue, Vuex',
                    },
                },
                {
                    company: {
                        title: 'Company',
                        text: 'Logic IT Solutions',
                        link: 'https://jobs.dou.ua/companies/it-solutions/',
                        linkText: 'jobs.dou.ua',
                    },
                    period: {
                        title: 'Period',
                        text: 'May 2017 - December 2017 (7 months)',
                    },
                    responsibilities: {
                        title: 'Responsibilities',
                        text: 'Layout of projects/landings, support of existing company projects.',
                    },
                    technologies: {
                        title: 'Technologies',
                        text: 'HTML/CSS, js',
                    },
                },
                {
                    company: {
                        title: 'Company',
                        text: 'Webstars',
                        link: 'https://webstars.com.ua/',
                        linkText: 'webstars.com.ua',
                    },
                    period: {
                        title: 'Period',
                        text: 'January 2016 - May 2017 (1 year 6 months)',
                    },
                    responsibilities: {
                        title: 'Responsibilities',
                        text: 'Layout of projects under CMS',
                    },
                    technologies: {
                        title: 'Technologies',
                        text: 'HTML/CSS, js, Bootstrap',
                    },
                },
            ],
        },
        languages: {
            title: 'Languages',
            list: [
                {
                    title: 'English',
                    level: 'A2',
                },
            ],
        },
        education: {
            title: 'Education',
            list: [
                {
                    place: {
                        title: 'Courses',
                        text: 'Bambook Academy - English language',
                    },
                    period: {
                        title: 'Period',
                        text: 'January 2022 - May 2022',
                    },
                    qualications: {
                        title: 'Qualifications',
                        text: 'English language - A2',
                    },
                    degree: {
                        title: '',
                        text: '',
                    },
                },
                {
                    place: {
                        title: 'Courses',
                        text: 'Training Center: IT Courses by Freshcode',
                    },
                    period: {
                        title: 'Period',
                        text: 'October 2021 - Aug. 2022',
                    },
                    qualications: {
                        title: 'Qualifications',
                        text: 'FULL-STACK JS DEVELOPER',
                    },
                    degree: {
                        title: '',
                        text: '',
                    },
                },
                {
                    place: {
                        title: 'University',
                        text: 'https://usz.org.ua/',
                    },
                    period: {
                        title: 'Period',
                        text: '2012 - 2016',
                    },
                    qualications: {
                        title: 'Qualifications',
                        text: 'Accounting and Audit',
                    },
                    degree: {
                        title: 'Degree',
                        text: 'Bachelor',
                    },
                },
            ],
        },
        achievements: {
            title: 'Achievement',
            list: [
               {
                title: 'Publications on habr.com',
                items: [
                    {
                        text: 'Organization of indents in layout (margin/padding)',
                        link: 'https://habr.com/ru/post/340420/',
                    },
                    {
                        text: 'A custom approach to normalizing and resetting styles (custom-reset.css)',
                        link: 'https://habr.com/ru/post/420539/',
                    },
                ],
               }
            ],
        },
        footer: 'CV Roman Yurchenko'
    },
};
