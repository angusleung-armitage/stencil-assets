import { p as promiseResolve, b as bootstrapLazy } from './index-b12753fd.js';

/*
 Stencil Client Patch Esm v2.20.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["app-modal",[[0,"app-modal",{"showModal":[4,"show-modal"],"content":[1],"title":[1],"type":[1],"defaultButton":[4,"default-button"],"onClose":[16]}]]]], options);
  });
};

export { defineCustomElements };
