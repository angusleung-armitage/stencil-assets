'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a9cee8a1.js');

/*
 Stencil Client Patch Esm v2.20.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["app-modal.cjs",[[0,"app-modal",{"showModal":[4,"show-modal"],"content":[1],"title":[1],"type":[1],"defaultButton":[4,"default-button"],"onClose":[16]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
