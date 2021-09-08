module.exports = {
    lang: 'zh-CN',
    title: '学习笔记',
    description: 'This is my first Vue point!',
    base: '/',
    head: [
        ['link',{rel: 'icon',href: '/image/study.png'}]
    ],
    themeConfig: {
        logo: 'https://raw.githubusercontent.com/T-xiang59/pictures/master/img/0a0597248828d8e4e862645356f486b.jpg?token=AOGLUAGEL7Q7SRNSMKLGBULBGXTVC',
        logoDark: '/image/notebook.png',
        darkMode: true,
        home: '/',
        nav: [

            {
                text: 'VUEPRESS',
                items: [
                    {text: 'vue',link: '/VUEPRESS/vue.md'},
                    {text: 'vuepress',link: '/VUEPRESS/vuepress.md'},
                ],
            },
            
        ],
        sidebar: 'auto',
        sidebarDepth: 2,

    },
}