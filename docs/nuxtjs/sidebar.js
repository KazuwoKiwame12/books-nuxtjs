module.exports = {
    "/nuxtjs/": [
        "/lessons/",
        {
            title: 'Nuxt.js Tips',
            collapsable: false,
            path: "/nuxtjs/",
            children: [
                'layout',
                'scss',
                'ssr',
                'lint',
            ]
        },
        "/vuejs/",
        "/firebase/"
    ],
}
