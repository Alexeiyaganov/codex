module.exports = (function () {

    const CodexEditor = require('codex.editor');

    /**
     * JSON preview for Editor's demo
     */
    const cPreview = require('./modules/json-preview');

    /**
     * Editor's demo save button
     * @type {HTMLElement}
     */
    let saveButton = document.getElementById('saveButton');

    /**
     * Load Tools for the Editor
     */
    const Header = require('codex.editor.header');
    const SimpleImage = require('codex.editor.simple-image');
    const Quote = require('codex.editor.quote');
    const Marker = require('codex.editor.marker');
    const CodeTool = require('codex.editor.code');
    const Delimiter = require('codex.editor.delimiter');
    const InlineCode = require('codex.editor.inline-code');
    const List = require('codex.editor.list');

    /**
     * Initialize CodeX Editor
     */
    let editor = new CodexEditor({
        /**
         * Wrapper of Editor
         */
        holderId: 'codex-editor',

        /**
         * Tools list
         */
        tools: {
            /**
             * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
             */
            header: {
                class: Header,
                inlineToolbar: [ 'link' ],
                config: {
                    placeholder: 'Header'
                }
            },

            /**
             * Or pass class directly without any configuration
             */
            image: SimpleImage,

            list: {
                class: List,
                inlineToolbar: true
            },

            quote: {
                class: Quote,
                inlineToolbar: true,
                config: {
                    quotePlaceholder: 'Enter a quote',
                    captionPlaceholder: 'Quote\'s author',
                },
            },

            marker: {
                class:  Marker,
                shortcut: 'CMD+SHIFT+M'
            },

            code: {
                class:  CodeTool,
                shortcut: 'CMD+SHIFT+D'
            },

            delimiter: Delimiter,

            inlineCode: {
                class: InlineCode,
                shortcut: 'CMD+SHIFT+C'
            },
        },

        /**
         * Initial Editor data
         */
        data: {
            blocks: [
                {
                    type: 'header',
                    data: {
                        text: 'CodeX Editor',
                        level: 2
                    }
                },
                {
                    type : 'paragraph',
                    data : {
                        text : 'Привет. Перед вами наш обновленный редактор. На этой странице вы можете проверить его в действии — попробуйте отредактировать или дополнить материал. Код страницы содержит пример подключения и простейшей настройки.'
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
                    type : 'list',
                    data : {
                        items : [
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
                    type : 'paragraph',
                    data : {
                        text : 'Блоки — это структурные элементы, из которых состоит статья. Например <span class="inline-code">Параграф</span>, <span class="inline-code">Заголовок</span>, <span class="inline-code">Изображение</span>, <span class="inline-code">Видео</span> — это все Блоки. В CodeX Editor каждый Блок определяется плагином. Есть много готовых Блоков и простой API для создания новых. Например, вы можете создать Блок для Твиттера, Инстаграма, Опроса, Игры или CTA-кнопки.'
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
                    type : 'paragraph',
                    data : {
                        text : 'В отличие от WYSIWYG-редакторов, CodeX Editor возвращает не сгенерированный HTML-код, включающий и содержание и оформление статьи, а JSON с данными о каждом Блоке. Пример таких данных находится внизу этой страницы.'
                    }
                },
                {
                    type : 'paragraph',
                    data : {
                        text : 'Полученные данные можно использовать как угодно: выводить в вебе, рендерить в нативных мобильных приложениях, передавать в Instant Articles или Google AMP, использовать для генерации аудио-версии и тд.'
                    }
                },
                {
                    type : 'paragraph',
                    data : {
                        text : 'Помимо этого, данные о Блоках удобно очищать, фильтровать и обрабатывать на бэкенде.'
                    }
                },
                {
                    type: 'image',
                    data: {
                        url : 'https://ifmo.su/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
                        caption: '',
                        stretched: false,
                        withBorder: true,
                        withBackground: false,
                    }
                },
                {
                    type : 'delimiter',
                    data : {}
                },
                {
                    type : 'paragraph',
                    data : {
                        text : 'Мы работали над этим редактором более двух лет. В отладке принимали участие известные медиа-проекты: vc.ru, TJ, DTF — с их помощью удалось найти и исправить много ошибок, стабилизировать ядро. Вместе с этим мы развивали API, который позволяет создавать плагины под любые задачи. Надеемся, вам понравится 😏'
                    }
                },
            ]
        },
        onReady: function () {

            saveButton.click();

        }
    });

    /**
     * Saving example
     */

    saveButton.addEventListener('click', function () {

        editor.saver.save().then((savedData) => {

            cPreview.show(savedData, document.getElementById('output'));

        });

    });

}({}));
