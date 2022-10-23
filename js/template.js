class Template {
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
                            <button class="button-size" type="button" onclick="app.updateSize()" title="${data.control.refresh}">
                                <span class="button-size__icon">
                                    <svg width="50" height="50">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#refresh"></use>
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <span class="line">|</span>

                        <div class="control-panel__zoom">
                            <button class="button-size" type="button" onclick="app.updateSize('-')" title="${data.control.min}">
                                <span class="button-size__icon">
                                    <svg width="50" height="50">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#minus"></use>
                                    </svg>
                                </span>
                            </button>

                            <input class="size-input" type="text" value="${parseFloat(this.settings.size).toFixed(0) + '%'}" onchange="app.changeSize()">

                            <button class="button-size" type="button" onclick="app.updateSize('+')" title="${data.control.max}">
                                <span class="button-size__icon">
                                    <svg width="50" height="50">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#plus"></use>
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <span class="line">|</span>

                        <div class="control-panel__width-content">
                            <button class="button-size button-size-fullscreen ${this.settings.enableFullScreen === 'true' ? 'active': ''}" 
                                type="button" 
                                onclick="app.fullScreen()" 
                                title="${data.control.full}"
                            >
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
                            <button class="button-theme" type="button" onclick="app.toggleTheme()" title="${data.control.theme}">
                                <span class="button-theme__icon">
                                    <svg width="50" height="50">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#theme"></use>
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <span class="line">|</span>

                        <div class="control-panel__lang-content">
                            <div class="lang-seelct" title="${data.control.lang}">
                                <span class="lang-seelct__icon">
                                    <svg width="50" height="50">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lang"></use>
                                    </svg>
                                </span>

                                <select class="lang-seelct__select" onchange="app.editLang(this.value)">
                                    ${Object.keys(this.data).map((el) => {
                                        return `
                                            <option value="${el}" ${el.includes(this.settings.lang) ? 'selected':''}>${el}</option>
                                        `
                                    }).join('')}
                                </select>
                            </div>
                        </div>

                        <span class="line">|</span>

                        <div class="control-panel__save">
                            <button class="print-btn" type="button" onclick="print()" title="${data.control.load}">
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
                                                <svg class="aside__icon" width="50" height="50">
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

                        <section class="achievements main__item">
                            <h2 class="title achievements__title">${data.achievements.title}</h2>

                            <ul class="achievements__list">
                                ${data.achievements.list.map((el) => {
                                    return `
                                        <li class="achievements__list-item">
                                            <div class="achievements__sub-title">
                                                ${el.title}
                                            </div>

                                            <ul class="achievements__sublist">
                                                ${el.items.map((el) => {
                                                    return `
                                                        <li class="achievements__sub-list-item">
                                                            <a class="achievements__link" href="${el.link}">
                                                                ${el.text}
                                                            </a>
                                                        </li>
                                                    `
                                                }).join('')}
                                            </ul>
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
                                                <strong class="education__text-title">${el.place.title}</strong>
                                                <p class="education__text">${el.place.text}</p>
                                            </div>

                                            <div class="education__item">
                                                <strong class="education__text-title">${el.period.title}</strong>
                                                <p class="education__text">${el.period.text}</p>
                                            </div>

                                            <div class="education__item">
                                                <strong class="education__text-title">${el.qualications.title}</strong>
                                                <p class="education__text">${el.qualications.text}</p>
                                            </div>

                                            <div class="education__item">
                                                <strong class="education__text-title">${el.degree.title}</strong>
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