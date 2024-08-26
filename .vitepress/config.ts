import { defineConfig } from 'vitepress';
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      dir: 'src',
      title: 'NOISE主页配置文档',
      description: '无限多模式个性化个人主页引导页模版',
      themeConfig: {
        nav: [
          { text: '介绍', link: '/guide/intro', activeMatch: '/guide/' },
          { text: '常见问题', link: '/faq/', activeMatch: '/faq/' },
          { text: '更新日志', link: '/update/', activeMatch: '/update/' },
          {
            text: '捐赠',
            link: '/other/donate'
          },
          {
            text: '博客',
            link: 'https://www.noiseblogs.top',
            activeMatch: 'https://www.noiseblogs.top/'
          },
          {
            text: '链接',
            items: [
              {
                text: 'NOISE导航',
                link: 'https://www.noisedh.cn'
              },
              {
                text: 'NOISE宝藏阁',
                link: 'https://noisevip.cn'
              },
              {
                text: 'NOISE资源库',
                link: 'https://www.noiseyp.top/'
              },
              {
                text: '我的Star列表',
                link: 'https://rcy1314.github.io/some-stars/'
              },
              {
                text: '优惠手机卡渠道1',
                link: 'https://simhaoka.com/phone/index?id=A7BA17EFD6DC47F6826F0C67B898725A'
              },
              {
                text: '优惠手机卡渠道2',
                link: 'https://hk.yunhaoka.cn/#/pages/micro_store/index?agent_id=422648'
              }
            ]
          }
        ],
        sidebar: {
          '/guide/': [
            {
              text: '开始',
              items: [
                {
                  text: '指引',
                  link: '/guide/intro'
                },
                {
                  text: '快速上手',
                  link: '/guide/quick-start'
                }
              ]
            },
            {
              text: 'index首页',
              items: [
                {
                  text: '概述',
                  link: '/guide/index/intro'
                },
                {
                  text: '基本配置',
                  link: '/guide/index/config'
                },
                {
                  text: '随机背景前景',
                  link: '/guide/index/background'
                },
                {
                  text: '音乐部件',
                  link: '/guide/index/music'
                },
                {
                  text: '问候提醒弹窗',
                  link: '/guide/index/hello'
                },
                {
                  text: '模拟终端',
                  link: '/guide/index/terminal'
                },
                {
                  text: '广告位部件',
                  link: '/guide/index/ads'
                },
                {
                  text: 'RSS动态卡片',
                  link: '/guide/index/rss'
                },
                {
                  text: '侧边文字通告',
                  link: '/guide/index/text'
                },
                {
                  text: '隐藏式时钟',
                  link: '/guide/index/clock'
                },
                {
                  text: '隐藏式页脚',
                  link: '/guide/index/footer'
                },
                {
                  text: '侧边导航按钮',
                  link: '/guide/index/tab'
                },
                {
                  text: '浮动文字',
                  link: '/guide/index/flotext'
                }
              ]
            },
            {
              text: 'home页',
              items: [
                {
                  text: '概述',
                  link: '/guide/home/intro'
                },
                {
                  text: '基本配置',
                  link: '/guide/home/config'
                },
                {
                  text: '头像配置',
                  link: '/guide/home/logo'
                },
                {
                  text: '音乐部件',
                  link: '/guide/home/music'
                },
                {
                  text: '问候时间部件',
                  link: '/guide/home/hello'
                },
                {
                  text: 'RSS动态卡片',
                  link: '/guide/home/rss'
                },
                {
                  text: '云盘资源卡片',
                  link: '/guide/home/yunpan'
                },
                {
                  text: '摸鱼日历',
                  link: '/guide/home/moyu'
                },
                {
                  text: '躲猫猫',
                  link: '/guide/home/maomao'
                },
                {
                  text: '视频播放组件',
                  link: '/guide/home/video'
                },
                {
                  text: '轮播相册',
                  link: '/guide/home/photo'
                },
                {
                  text: '手机页导航',
                  link: '/guide/home/nav'
                },
                {
                  text: '公告通知',
                  link: '/guide/home/notify'
                },
                {
                  text: '每日60秒',
                  link: '/guide/home/days'
                },
                {
                  text: '组件监测',
                  link: '/guide/home/Detection'
                }
              ]
            },
            {
              text: '布局调整',
              items: [
                {
                  text: '配置',
                  link: '/guide/Comment'
                }
              ]
            },
            {
              text: 'PWA模式',
              items: [
                {
                  text: '配置',
                  link: '/guide/pwa'
                }
              ]
            },
            {
              text: 'loading载入',
              items: [
                {
                  text: '配置',
                  link: '/guide/loading'
                }
              ]
            },
            {
              text: '聊天室',
              items: [
                {
                  text: '配置',
                  link: '/guide/chat'
                }
              ]
            },
            {
              text: '右键菜单',
              items: [
                {
                  text: '配置',
                  link: '/guide/right'
                }
              ]
            },
            {
              text: '音效效果',
              items: [
                {
                  text: '配置',
                  link: '/guide/sound'
                }
              ]
            },
          ]
        }
      }
    }
  },
  head: [
    ['meta', { name: 'NOISE主页文档', content: 'NOISE主页配置文档' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'NOISE主页,NOISE主页配置文档'
      }
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.png' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  assetsDir: 'public',
  srcDir: 'src',
  themeConfig: {
    logo: '/favicon.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rcy1314/noisework-docs' }
    ],
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outlineTitle: '页面导航',
  footer: {
      copyright: 'Copyright © 204 NOISE'
    }
      }
      }

  );
