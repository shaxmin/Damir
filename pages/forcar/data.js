const data = {
    1: {
        leftTitle: 'Инфо',
        rightList: `<li>Стартап, основная цель которого является предоставления лучшего сервиса для машин.</li>
        <li>Сервис для записи на автомойку.</li>`
    },

    2: {
        leftTitle: 'Задача',
        rightList: `<li>Создание удобного сервиса для быстрой записи на автомойки.</li>
        <li>Цифровизация бизнеса для партнеров.</li>
        <li>Создание логотипа и бренд платформы.</li>`
    },

    3: {
        leftTitle: 'Решение',
        rightList: `<li>Создание практичного, удобного и понятного приложения с быстрой записью на автомойки.</li>
        <li>Создание админ панели для партнеров позволяющую взаимодействовать с активными клиентами и добавлять новые записи, а так же видить всю статистику за определенный период.</li>`
    },

    4: {
        leftTitle: 'Этапы',
        rightList: `<li>Бриф с клиентом</li>
        <li>Создание информационной архитектуры, анализ конкурентов и Low-Fidelity Wireframes</li>
        <li>Создание High-Fidelity Wireframes</li>
        <li>Этап Ui: добавление цветов и иллюстраций в дизайн, подготовка к передаче дизайна разработчикам</li>
        <li>Design Review</li>`
    },

    5: {
        leftTitle: 'Мои задачи',
        rightList: `<li>Разработка дизайна мобильного приложения</li>
        <li>Разработка дизайна админ панели </li>
        <li>Создание бренбука и логотипа</li>`
    }
}

const uiData = {
    one: {
        block1: '<img src="../forcar/images/mobile/01/01.png">',
        block2: '<img src="../forcar/images/mobile/01/02.png">',
        block3: '<img src="../forcar/images/mobile/01/03.png">',
        block4: `
        <div class="uiTitle">Онбординг и ОТП</div>
        <div class="uiDescription">Онбординг из 3 страниц рассказывающих о функционале приложения и ОТП.</div>
        `
    },
    two: {
        block1: `
        <div class="uiTitle">Регистрация</div>
        <div class="uiDescription">При регистрации пользователь вводит свое имя, город в котором находится и данные о машине, так же у него есть возможность добавить еще одно авто.</div>
        `,
        block2: '<img src="../forcar/images/mobile/02/1.png">',
        block3: '<img src="../forcar/images/mobile/02/2.png">',
        block4: '<img src="../forcar/images/mobile/02/3.png">'
    },
    three: {
        block1: '<img src="../forcar/images/mobile/03/1.png">',
        block2: '<img src="../forcar/images/mobile/03/2.png">',
        block3: '<img src="../forcar/images/mobile/03/3.png">',
        block4: `
        <div class="uiTitle">Главная</div>
        <div class="uiDescription">На главной странице находятся карта с автомойками, поиск, акции, и список ближайших автомоек.</div>
        `
    },
    four: {
        block1: `
        <div class="uiTitle">Поиск и акции</div>
        <div class="uiDescription">Автмойки можно искать в поисковике или смотреть по карте. Нажав на одну из точек на карте можно увидеть краткую информацию об автомойке.</div>
        <div class="uiDescription">Акции сделаны в виде сторис и в них так же есть кнопка которая ведет на страницу автомойки.</div>
        `,
        block2: '<img src="../forcar/images/mobile/04/1.png">',
        block3: '<img src="../forcar/images/mobile/04/2.png">',
        block4: '<img src="../forcar/images/mobile/04/3.png">'
    },
    five: {
        block1: '<img src="../forcar/images/mobile/05/1.png">',
        block2: '<img src="../forcar/images/mobile/05/2.png">',
        block3: '<img src="../forcar/images/mobile/05/3.png">',
        block4: `
        <div class="uiTitle">Детали автомойки</div>
        <div class="uiDescription">На странице автомойки пользователь может увидеть основную информацию, услуги которая предостовляет автомойка, отзывы других пользователей и акции.</div>
        `
    },
    six: {
        block1: `
        <div class="uiTitle">Отзывы</div>
        <div class="uiDescription">Пользователь может прочитать реальные отзывы других пользователей, увидеть оценку работы автомойки, а так же ответы компаний на отзывы.</div>
        `,
        block2: ' ',
        block3: '<img src="../forcar/images/mobile/06/2.png">',
        block4: '<img src="../forcar/images/mobile/06/3.png">'
    },
    seven: {
        block1: '<img src="../forcar/images/mobile/07/1.png">',
        block2: '<img src="../forcar/images/mobile/07/2.png">',
        block3: '<img src="../forcar/images/mobile/07/3.png">',
        block4: `
        <div class="uiTitle">Запись на мойку</div>
        <div class="uiDescription">Цель была создать максимально короткий флоу записи на мойку. Сам флоу состоит из выбора даты, времени, автомобиля, услуги и включения уведомления.</div>
        `
    },
    eight: {
        block1: '<img src="../forcar/images/mobile/08/1.png">',
        block2: '<img src="../forcar/images/mobile/08/2.png">',
        block3: '<img src="../forcar/images/mobile/08/3.png">',
        block4: '<img src="../forcar/images/mobile/08/4.png">'
    },
    nine: {
        block1: `
        <div class="uiTitle">Мои записи</div>
        <div class="uiDescription">После того как пользователь запишется на мойку он попадает на страницу “Мои записи” где может проложить путь в 2GIS при помощи одноименной кнопки или прочитать все детали записи. Так же у него есть возможность посмотреть историю записей.</div>
        `,
        block2: '<img src="../forcar/images/mobile/09/1.png">',
        block3: '<img src="../forcar/images/mobile/09/2.png">',
        block4: '<img src="../forcar/images/mobile/09/3.png">'
    },
    ten: {
        block1: '<img src="../forcar/images/mobile/10/1.png">',
        block2: '<img src="../forcar/images/mobile/10/2.png">',
        block3: '<img src="../forcar/images/mobile/10/3.png">',
        block4: `
        <div class="uiTitle">Отмена и отзыв</div>
        <div class="uiDescription">В деталях записи пользователь может отменить свою запись.</div>
        <div class="uiDescription">Так же по завершению мойки пользователю открывается окно с оценкой работы автомойки.</div>
        `
    },
    eleven: {
        block1: `
        <div class="uiTitle">Профиль</div>
        <div class="uiDescription">В профиле пользователь может изменить личные данные, посмотреть сохраненные автомойки, стать партнером компании Forcar и добавить свою автомойку в базу данных.</div>
        `,
        block2: '<img src="../forcar/images/mobile/11/1.png">',
        block3: '<img src="../forcar/images/mobile/11/2.png">',
        block4: '<img src="../forcar/images/mobile/11/3.png">'
    },
}