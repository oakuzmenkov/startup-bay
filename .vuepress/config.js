module.exports = {
    title: "Стартап Бухта",
    description: "Стартап Бухта — подкаст стартаперов для стартаперов",
    head: [["link", { rel: "icon", href: "/favicon.png" }]],
    themeConfig: {
        logo: "/favicon.png",
        nav: [
            { text: "Home", link: "/" },
            { text: "JSHunt", link: "https://jshunt.by", rel: "sponsored" },
            {
                text: "Seller Assistant App",
                link: "https://sellerassistant.app",
                rel: "sponsored",
            },
        ],
    },
    plugins: [
        [
            "@vuepress/google-analytics",
            {
                ga: "UA-165377879-1", // UA-00000000-0
            },
        ],
    ],
};
