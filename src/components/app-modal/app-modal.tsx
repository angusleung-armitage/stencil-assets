import { Component, Fragment, h, Host, Prop } from '@stencil/core';

enum NotificationType {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  EMPTY = 'empty',
}

@Component({
  tag: 'app-modal',
  styleUrl: 'app-modal.css',
})
export class AppModal {
  icon: string;
  @Prop() showModal: boolean = false;
  @Prop() content?: string | HTMLElement;
  @Prop() title?: string;
  @Prop() type: NotificationType = NotificationType.EMPTY;
  @Prop() defaultButton?: boolean = false;
  @Prop() onClose?: () => void;

  render() {
    // const { showModal, content, title, type, redirect, defaultButton } = appModalState;
    // const onClose = () => {
    //   if (this.redirect) this.redirect();
    //   closeModal();
    // };

    return (
      <Host class={'relative'}>
        <div
          class={`overflow-hidden flex justify-center items-center absolute w-[100vw] h-[100vh] inset-0 animated${showModal ? ' z-30 fadeIn faster' : ' fadeOut faster'}`}
          style={this.showModal ? { backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.75)' } : {}}
          onClick={this.onClose}
        >
          <div class={`overflow-y-auto overflow-x-hidden w-[70vw] md:w-[30vw] md:inset-0 h-modal md:h-full place-items-center grid`}>
            <div class="relative w-full h-full p-4 md:h-auto">
              <div class="relative bg-white rounded-lg shadow" onClick={e => e.stopPropagation()}>
                <div class="grid grid-cols-[max-content,1fr] gap-2 items-baseline p-2 rounded-t">
                  <div class={'ml-2'}>
                    {(() => {
                      switch (this.showModal ? this.type : null) {
                        case NotificationType.SUCCESS:
                          return <i class="fa-regular fa-circle-check text-teal-500"></i>;
                        case NotificationType.ERROR:
                          return <i class="fa-regular fa-circle-xmark text-red-500"></i>;
                        case NotificationType.WARNING:
                          return <i class="fa-solid fa-triangle-exclamation text-yellow-300"></i>;
                        default:
                          return <></>;
                      }
                    })()}
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900">{this.title}</h3>
                </div>
                <div class={'grid gap-4 p-2'}>
                  <div class={'pl-2 pr-2'}>{this.showModal ? this.content : ''}</div>
                  {this.defaultButton && this.showModal ? (
                    <button class={'defaultButton w-full'} onClick={this.onClose}>
                      OK
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
