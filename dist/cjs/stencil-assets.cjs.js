'use strict';

const index = require('./index-a9cee8a1.js');

/*
 Stencil Client Patch Browser v2.20.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-assets.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["app-modal.cjs",[[0,"app-modal",{"showModal":[4,"show-modal"],"content":[1],"title":[1],"type":[1],"defaultButton":[4,"default-button"],"onClose":[16]}]]]], options);
});
