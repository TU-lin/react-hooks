// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/tuttor/Downloads/vitejs-vite-nfyqaj/packages/hooks/src/useDebounce/demo/demo1.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/tuttor/Downloads/vitejs-vite-nfyqaj/packages/hooks/src/useThrottle/demo/demo1.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/tuttor/Downloads/vitejs-vite-nfyqaj/packages/hooks/src/useToggle/demo/demo1.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/tuttor/Downloads/vitejs-vite-nfyqaj/packages/hooks/src/useToggle/demo/demo2.tsx?dumi-raw-code';

export default {
  'usedebounce-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/tuttor/Downloads/vitejs-vite-nfyqaj/packages/hooks/src/useDebounce/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"18.3.1"}},"identifier":"usedebounce-demo1"},
  },
  'usethrottle-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/tuttor/Downloads/vitejs-vite-nfyqaj/packages/hooks/src/useThrottle/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"react":{"version":"18.3.1"}},"identifier":"usethrottle-demo1"},
  },
  'usetoggle-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/tuttor/Downloads/vitejs-vite-nfyqaj/packages/hooks/src/useToggle/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode3}},"dependencies":{"react":{"version":"18.3.1"}},"identifier":"usetoggle-demo1"},
  },
  'usetoggle-demo2': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/tuttor/Downloads/vitejs-vite-nfyqaj/packages/hooks/src/useToggle/demo/demo2.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode4}},"dependencies":{"react":{"version":"18.3.1"}},"identifier":"usetoggle-demo2"},
  },
};
