const commonPath = '/menu1';

export default [
    {
        text: '趋势',
        collapsible: true,
        collapsed: false,
        items: [
            // This shows `/guide/index.md` page.
            { text: 'JS-2023趋势', link: `${commonPath}/2023-js-trends.md` }, // /guide/index.md
            { text: 'b', link: `${commonPath}/b.md` }, // /guide/one.md
        ]
    },
    {
        text: 'section 2',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'c', link: `${commonPath}/c.md` },
            { text: 'd', link: `${commonPath}/d.md` } // /guide/one.md
        ]
    }
]