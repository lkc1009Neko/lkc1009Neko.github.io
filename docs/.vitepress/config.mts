import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "NEKO_lkc1009_DOCS",
  description: "A some docs",
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/share' },
      { text: 'Future', link: '/' }
    ],

    outline: {
      level: 'deep',
      label: 'Docs'
    },

    sidebar: {
      '/docs/': [
        {
          items: [
            { text: 'Neko Share Project', link: '/docs/share' },
            { text: 'Neko Read Project', link: '/docs/read' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lkc1009Neko' }
    ]
  }
})
