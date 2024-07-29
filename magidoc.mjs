export default {
    introspection: {
        type: 'url',
        url: 'http://localhost:8080/query',
    },
    website: {
        template: 'carbon-multi-page',
        // output: './docs',
        options: {
            appTitle: 'ChaosCenter API Documentation',

            /**
             * Your application logo, which can either be
             * an absolute URL or a relative URL pointing to a static asset.
             * If your `siteRoot` is set and you use a relative URL, include the `siteRoot` in the path
             *
             * @default (magidoc logo)
             */
            appLogo: 'https://litmuschaos.github.io/litmus/graphql/logo.png',

            /**
             * Your application's favicon, which can either be
             * an absolute URL or a relative URL pointing to a static asset.
             *
             * @default (magidoc logo)
             */
            appFavicon: 'https://litmuschaos.github.io/litmus/graphql/logo.png',

            /**
             * The a root path where your website will be served from.
             * It is common to see docs websites hosted on a /docs path.
             * Example: https://your-website.com/docs
             *
             * If your website is served from the root path, leave this undefined.
             *
             * @default undefined
             */
            siteRoot: '/suyeon-jung-dev.github.io/litmus-api-docs',

            /**
             * Customizes the website meta tags in the header of the HTML pages.
             * Any meta tags with the following format are supported:
             *
             * <meta name={key} content={value} />
             *
             * A list of common tags can be found here: https://gist.github.com/whitingx/3840905
             *
             * @default (arbitrary title, description and image are generated from `appTitle` and `appLogo`)
             */
            siteMeta: {
                description: 'This is your website description',
                keywords: 'svelte,docs,magidoc,cool',
            },

            /**
             * A list of custom stylesheets to override the default style.
             * These stylesheets should be included in your `staticAssets` directory, and the property should be an absolute path to them.
             *
             *
             * Be aware that the name of the CSS classes are not guaranteed to stay the same through different versions of Magidoc.
             * Use at your own risk.
             *
             * @default []
             */
            // customStyles: ['/styles/custom.css'],

            /**
             * Defines the order that the fields of a query/mutation/subscription type appear in the page.
             * Choices are ['default', 'alphabetical']
             *
             * @default 'default' The order used in the schema.
             */
            fieldsSorting: 'default',

            /**
             * Defines the order that the arguments of a type appear in the page.
             * Choices are ['default', 'alphabetical']
             *
             * @default 'default' The order used in the schema.
             */
            argumentsSorting: 'default',

            pages: [
                {
                    /**
                     * Each page must have a title for the navbar.
                     */
                    title: 'Introduction',

                    /**
                     * The content. Markdown is supported, but be careful with the indentation.
                     * Javascript multi-line templates conserve the indentation you have in your strings, which will not output properly.
                     * It is recommended to either get your markdown from files or use a library to un-indent your strings.
                     *
                     * @see: https://www.npmjs.com/package/dedent
                     */
                    content: `
            # ChaosCenter API Documentation


            ChaosCenter provides console and UI experience for creating, scheduling, and monitoring chaos workflows. Chaos workflows consist of a sequence of experiments run together to achieve the objective of introducing some kind of fault into an application.
          `
                        .split('\n')
                        .map((line) => line.trim())
                        .join('\n'),
                },
            ]
        }
    },
}