'use strict';

const _editor = require('./modules/editor');

const docReady = (f) => {

    return /in/.test(document.readyState) ? window.setTimeout(docReady, 9, f) : f();

};

/**
 * Editor's demo data
 */
const editorData = {
    blocks: [
        {
            type: 'header',
            data: {
                text: 'CodeX Editor',
                level: 2
            }
        },
        {
            type: 'paragraph',
            data: {
                text: 'Привет. Перед вами наш обновленный редактор. На этой странице вы можете проверить его в действии — попробуйте отредактировать или дополнить материал. Код страницы содержит пример подключения и простейшей настройки.'
            }
        },
        {
            type: 'header',
            data: {
                text: 'О редакторе',
                level: 3
            }
        },
        {
            type: 'list',
            data: {
                items: [
                    'Это блочный редактор',
                    'На выводе отдает чистые данные',
                    'Имеет гибкие настройки и простой API',
                ],
                style: 'unordered'
            }
        },
        {
            type: 'header',
            data: {
                text: 'Что значит «блочный» редактор',
                level: 3
            }
        },
        {
            type: 'paragraph',
            data: {
                text: 'Блоки — это структурные элементы, из которых состоит статья. Например <span class="inline-code">Параграф</span>, <span class="inline-code">Заголовок</span>, <span class="inline-code">Изображение</span>, <span class="inline-code">Видео</span> — это все Блоки. В CodeX Editor каждый Блок определяется плагином. Есть много готовых Блоков и простой API для создания новых. Например, вы можете создать Блок для Твиттера, Инстаграма, Опроса, Игры или CTA-кнопки.'
            }
        },
        {
            type: 'header',
            data: {
                text: 'Что значит «чистые данные»',
                level: 3
            }
        },
        {
            type: 'paragraph',
            data: {
                text: 'В отличие от WYSIWYG-редакторов, CodeX Editor возвращает не сгенерированный HTML-код, включающий и содержание и оформление статьи, а JSON с данными о каждом Блоке. Пример таких данных находится внизу этой страницы.'
            }
        },
        {
            type: 'paragraph',
            data: {
                text: 'Полученные данные можно использовать как угодно: выводить в вебе, рендерить в нативных мобильных приложениях, передавать в Instant Articles или Google AMP, использовать для генерации аудио-версии и тд.'
            }
        },
        {
            type: 'paragraph',
            data: {
                text: 'Помимо этого, данные о Блоках удобно очищать, фильтровать и обрабатывать на бэкенде.'
            }
        },
        {
            type: 'image',
            data: {
                url: 'https://ifmo.su/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
                caption: '',
                stretched: false,
                withBorder: true,
                withBackground: false,
            }
        },
        {
            type: 'delimiter',
            data: {}
        },
        {
            type: 'paragraph',
            data: {
                text: 'Мы работали над этим редактором более двух лет. В отладке принимали участие известные медиа-проекты: vc.ru, TJ, DTF — с их помощью удалось найти и исправить много ошибок, стабилизировать ядро. Вместе с этим мы развивали API, который позволяет создавать плагины под любые задачи. Надеемся, вам понравится 😏'
            }
        }
    ]
};

/**
 * Run editor with demo data
 */
docReady(() => {

    _editor.runEditor(editorData);

});