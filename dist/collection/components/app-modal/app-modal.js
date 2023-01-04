import { Fragment, h, Host } from '@stencil/core';
var NotificationType;
(function (NotificationType) {
  NotificationType["SUCCESS"] = "success";
  NotificationType["WARNING"] = "warning";
  NotificationType["ERROR"] = "error";
  NotificationType["EMPTY"] = "empty";
})(NotificationType || (NotificationType = {}));
export class AppModal {
  constructor() {
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
  static get is() { return "app-modal"; }
  static get originalStyleUrls() {
    return {
      "$": ["app-modal.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["app-modal.css"]
    };
  }
  static get properties() {
    return {
      "showModal": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "show-modal",
        "reflect": false,
        "defaultValue": "false"
      },
      "content": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | HTMLElement",
          "resolved": "HTMLElement | string",
          "references": {
            "HTMLElement": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "content",
        "reflect": false
      },
      "title": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "title",
        "reflect": false
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "NotificationType",
          "resolved": "NotificationType.EMPTY | NotificationType.ERROR | NotificationType.SUCCESS | NotificationType.WARNING",
          "references": {
            "NotificationType": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "NotificationType.EMPTY"
      },
      "defaultButton": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "default-button",
        "reflect": false,
        "defaultValue": "false"
      },
      "onClose": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "() => void",
          "resolved": "() => void",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        }
      }
    };
  }
}
