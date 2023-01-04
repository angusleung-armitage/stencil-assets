import { p as promiseResolve, b as bootstrapLazy } from './index-b12753fd.js';

/*
 Stencil Client Patch Browser v2.20.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["app-modal",[[0,"app-modal",{"showModal":[4,"show-modal"],"content":[1],"title":[1],"type":[1],"defaultButton":[4,"default-button"],"onClose":[16]}]]]], options);
});
