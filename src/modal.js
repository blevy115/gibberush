import { alias, tag } from '@storefront/core';

@alias('modal')
@tag('my-modal', require('../modal.html'))
class Modal {

  init() {
    console.log('modal on');
    this.set({visible:false})
  }

  onClick(){
    this.set({visible:!this.$modal.visible})
    console.log(this.$modal.visible);
  }

}

export default Modal;
