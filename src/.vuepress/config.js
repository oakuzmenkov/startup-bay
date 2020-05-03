const currentDateUTC = new Date().toUTCString();

module.exports = {
    title: "Стартап Бухта",
    dest: "./public",
    themeConfig: {
        // repo: "https://wwww.github.com",
        // repoLabel: "Repo",
        // editLinks: true,
        // editLinkText: 'Found a bug? Help me improve this page!',
        nav: [
            { text: "Home", link: "/" },
            { text: "Подкаст", link: "/podcast" },
            { text: "JSHunt", link: "https://jshunt.by", rel: "sponsored" },
            {
                text: "Seller Assistant App",
                link: "https://sellerassistant.app",
                rel: "sponsored",
            },
        ],
        logo: "/favicon.png",
        docsDir: "src",
        pageSize: 5,
        startPage: 0,
    },
    plugins: [
        [
            "@vuepress/google-analytics",
            {
                ga: "UA-165377879-1", // UA-00000000-0
            },
        ],
        [
            "vuepress-plugin-rss",
            {
                base_url: "/",
                site_url: "https://startupbay.netlify.app/",
                filter: (frontmatter) =>
                    frontmatter.date <= new Date(currentDateUTC),
                count: 20,
            },
        ],
        "vuepress-plugin-reading-time",
        "vuepress-plugin-janitor",
    ],
    // head: [
    //     [
    //         "link",
    //         {
    //             rel: "apple-touch-icon",
    //             sizes: "180x180",
    //             href: "/apple-icon.png",
    //         },
    //     ],
    //     ["link", { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" }],
    //     ["link", { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" }],
    //     ["link", { rel: "manifest", href: "/site.webmanifest" }],
    //     [
    //         "link",
    //         {
    //             rel: "mask-icon",
    //             href: "/safari-pinned-tab.svg",
    //             color: "#5bbad5",
    //         },
    //     ],
    //     ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    //     ["meta", { name: "theme-color", content: "#ffffff" }],
    // ],
};
