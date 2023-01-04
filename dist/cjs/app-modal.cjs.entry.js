'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a9cee8a1.js');

const appModalCss = ".animated{-webkit-animation-duration:300ms;animation-duration:300ms;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.faster{-webkit-animation-duration:300ms;animation-duration:300ms}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}";

var NotificationType;
(function (NotificationType) {
  NotificationType["SUCCESS"] = "success";
  NotificationType["WARNING"] = "warning";
  NotificationType["ERROR"] = "error";
  NotificationType["EMPTY"] = "empty";
})(NotificationType || (NotificationType = {}));
const AppModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.showModal = false;
    this.content = undefined;
    this.title = undefined;
    this.type = NotificationType.EMPTY;
    this.defaultButton = false;
    this.onClose = undefined;
  }
  render() {
    // const { showModal, content, title, type, redirect, defaultButton } = appModalState;
    // const onClose = () => {
    //   if (this.redirect) this.redirect();
    //   closeModal();
    // };
    return (index.h(index.Host, { class: 'relative' }, index.h("div", { class: `overflow-hidden flex justify-center items-center absolute w-[100vw] h-[100vh] inset-0 animated${showModal ? ' z-30 fadeIn faster' : ' fadeOut faster'}`, style: this.showModal ? { backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.75)' } : {}, onClick: this.onClose }, index.h("div", { class: `overflow-y-auto overflow-x-hidden w-[70vw] md:w-[30vw] md:inset-0 h-modal md:h-full place-items-center grid` }, index.h("div", { class: "relative w-full h-full p-4 md:h-auto" }, index.h("div", { class: "relative bg-white rounded-lg shadow", onClick: e => e.stopPropagation() }, index.h("div", { class: "grid grid-cols-[max-content,1fr] gap-2 items-baseline p-2 rounded-t" }, index.h("div", { class: 'ml-2' }, (() => {
      switch (this.showModal ? this.type : null) {
        case NotificationType.SUCCESS:
          return index.h("i", { class: "fa-regular fa-circle-check text-teal-500" });
        case NotificationType.ERROR:
          return index.h("i", { class: "fa-regular fa-circle-xmark text-red-500" });
        case NotificationType.WARNING:
          return index.h("i", { class: "fa-solid fa-triangle-exclamation text-yellow-300" });
        default:
          return index.h(index.Fragment, null);
      }
    })()), index.h("h3", { class: "text-xl font-semibold text-gray-900" }, this.title)), index.h("div", { class: 'grid gap-4 p-2' }, index.h("div", { class: 'pl-2 pr-2' }, this.showModal ? this.content : ''), this.defaultButton && this.showModal ? (index.h("button", { class: 'defaultButton w-full', onClick: this.onClose }, "OK")) : (index.h(index.Fragment, null)))))))));
  }
};
AppModal.style = appModalCss;

exports.app_modal = AppModal;
