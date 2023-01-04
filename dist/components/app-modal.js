import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';

const appModalCss = ".animated{-webkit-animation-duration:300ms;animation-duration:300ms;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.faster{-webkit-animation-duration:300ms;animation-duration:300ms}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}";

var NotificationType;
(function (NotificationType) {
  NotificationType["SUCCESS"] = "success";
  NotificationType["WARNING"] = "warning";
  NotificationType["ERROR"] = "error";
  NotificationType["EMPTY"] = "empty";
})(NotificationType || (NotificationType = {}));
const AppModal$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
    return (h(Host, { class: 'relative' }, h("div", { class: `overflow-hidden flex justify-center items-center absolute w-[100vw] h-[100vh] inset-0 animated${showModal ? ' z-30 fadeIn faster' : ' fadeOut faster'}`, style: this.showModal ? { backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.75)' } : {}, onClick: this.onClose }, h("div", { class: `overflow-y-auto overflow-x-hidden w-[70vw] md:w-[30vw] md:inset-0 h-modal md:h-full place-items-center grid` }, h("div", { class: "relative w-full h-full p-4 md:h-auto" }, h("div", { class: "relative bg-white rounded-lg shadow", onClick: e => e.stopPropagation() }, h("div", { class: "grid grid-cols-[max-content,1fr] gap-2 items-baseline p-2 rounded-t" }, h("div", { class: 'ml-2' }, (() => {
      switch (this.showModal ? this.type : null) {
        case NotificationType.SUCCESS:
          return h("i", { class: "fa-regular fa-circle-check text-teal-500" });
        case NotificationType.ERROR:
          return h("i", { class: "fa-regular fa-circle-xmark text-red-500" });
        case NotificationType.WARNING:
          return h("i", { class: "fa-solid fa-triangle-exclamation text-yellow-300" });
        default:
          return h(Fragment, null);
      }
    })()), h("h3", { class: "text-xl font-semibold text-gray-900" }, this.title)), h("div", { class: 'grid gap-4 p-2' }, h("div", { class: 'pl-2 pr-2' }, this.showModal ? this.content : ''), this.defaultButton && this.showModal ? (h("button", { class: 'defaultButton w-full', onClick: this.onClose }, "OK")) : (h(Fragment, null)))))))));
  }
  static get style() { return appModalCss; }
}, [0, "app-modal", {
    "showModal": [4, "show-modal"],
    "content": [1],
    "title": [1],
    "type": [1],
    "defaultButton": [4, "default-button"],
    "onClose": [16]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["app-modal"];
  components.forEach(tagName => { switch (tagName) {
    case "app-modal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AppModal$1);
      }
      break;
  } });
}

const AppModal = AppModal$1;
const defineCustomElement = defineCustomElement$1;

export { AppModal, defineCustomElement };
