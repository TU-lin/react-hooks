// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/tuttor/Downloads/vitejs-vite-nfyqaj/node_modules/.pnpm/@umijs+runtime@3.5.43_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/tuttor/Downloads/vitejs-vite-nfyqaj/node_modules/.pnpm/@umijs+preset-dumi@1.1.54_react-dom@18.3.1_react@18.3.1__react-router@6.28.0_react@18.3.1__re_2ojg2omsc5ttc5caapumuns76y/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/tuttor/Downloads/vitejs-vite-nfyqaj/node_modules/.pnpm/dumi-theme-default@1.1.24_@umijs+preset-dumi@1.1.54_react-dom@18.3.1_react@18.3.1__react-rout_dolyisflu3qxqi5et33mjvnzty/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'/Users/tuttor/Downloads/vitejs-vite-nfyqaj/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1733885969093,
          "title": "首页",
          "hero": {
            "desc": "<div class=\"markdown\"><p>React Hooks library</p></div>",
            "actions": [
              {
                "text": "指南",
                "link": "/guide"
              },
              {
                "text": "Hooks 列表",
                "link": "/hooks"
              }
            ]
          },
          "footer": "<div class=\"markdown\"><p>Copyright (c) © 2023 by react studio, All Rights Reserved</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "✨ 特性",
              "heading": "-特性"
            },
            {
              "depth": 2,
              "value": "📦 安装",
              "heading": "-安装"
            },
            {
              "depth": 2,
              "value": "🔨 使用",
              "heading": "-使用"
            }
          ]
        },
        "title": "首页 - react hooks library"
      },
      {
        "path": "/guide",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__guide__index.md' */'/Users/tuttor/Downloads/vitejs-vite-nfyqaj/docs/guide/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1733885630407,
          "slugs": [
            {
              "depth": 1,
              "value": "react-hooks",
              "heading": "react-hooks"
            },
            {
              "depth": 2,
              "value": "⛰️ 能力支持",
              "heading": "️-能力支持"
            },
            {
              "depth": 3,
              "value": "1. 可靠的代码健壮",
              "heading": "1-可靠的代码健壮"
            },
            {
              "depth": 3,
              "value": "2. 完善的文档能力",
              "heading": "2-完善的文档能力"
            },
            {
              "depth": 3,
              "value": "3. 完整的测试用例",
              "heading": "3-完整的测试用例"
            },
            {
              "depth": 2,
              "value": "🌟 设计目的",
              "heading": "-设计目的"
            },
            {
              "depth": 2,
              "value": "⚒️ 技术选型",
              "heading": "️-技术选型"
            },
            {
              "depth": 3,
              "value": "包管理工具 -- pnpm",
              "heading": "包管理工具----pnpm"
            },
            {
              "depth": 3,
              "value": "构建工具 -- webpack & gulp",
              "heading": "构建工具----webpack--gulp"
            },
            {
              "depth": 3,
              "value": "静态文件打包工具 -- dumi",
              "heading": "静态文件打包工具----dumi"
            },
            {
              "depth": 3,
              "value": "测试工具 -- jest",
              "heading": "测试工具----jest"
            },
            {
              "depth": 2,
              "value": "其他",
              "heading": "其他"
            },
            {
              "depth": 3,
              "value": "生成CHANGELOG",
              "heading": "生成changelog"
            },
            {
              "depth": 2,
              "value": "📧 联系",
              "heading": "-联系"
            }
          ],
          "title": "react-hooks",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "react-hooks - react hooks library"
      },
      {
        "path": "/hooks/use-debounce",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useDebounce__index.md' */'/Users/tuttor/Downloads/vitejs-vite-nfyqaj/packages/hooks/src/useDebounce/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useDebounce/index.md",
          "updatedTime": 1733812436785,
          "nav": {
            "path": "/hooks",
            "title": "UseDebounce"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useDebounce",
              "heading": "usedebounce"
            },
            {
              "depth": 1,
              "value": "示例",
              "heading": "示例"
            }
          ],
          "title": "useDebounce",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-debounce",
            "title": "UseDebounce"
          }
        },
        "title": "useDebounce - react hooks library"
      },
      {
        "path": "/hooks/use-throttle",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useThrottle__index.md' */'/Users/tuttor/Downloads/vitejs-vite-nfyqaj/packages/hooks/src/useThrottle/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useThrottle/index.md",
          "updatedTime": 1733812927685,
          "nav": {
            "path": "/hooks",
            "title": "UseThrottle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useThrottle",
              "heading": "usethrottle"
            },
            {
              "depth": 1,
              "value": "示例",
              "heading": "示例"
            }
          ],
          "title": "useThrottle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-throttle",
            "title": "UseThrottle"
          }
        },
        "title": "useThrottle - react hooks library"
      },
      {
        "path": "/hooks/use-toggle",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useToggle__index.md' */'/Users/tuttor/Downloads/vitejs-vite-nfyqaj/packages/hooks/src/useToggle/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useToggle/index.md",
          "updatedTime": 1733732927899,
          "nav": {
            "path": "/hooks",
            "title": "UseToggle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useToggle",
              "heading": "usetoggle"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "高级用法",
              "heading": "高级用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Actions",
              "heading": "actions"
            }
          ],
          "title": "useToggle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-toggle",
            "title": "UseToggle"
          }
        },
        "title": "useToggle - react hooks library"
      },
      {
        "path": "/hooks",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/use-toggle"
      }
    ],
    "title": "react hooks library",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
