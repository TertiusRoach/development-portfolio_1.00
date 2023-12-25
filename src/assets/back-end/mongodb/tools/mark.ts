export namespace mark {
  export function aside(element: HTMLElement) {
    let input: HTMLInputElement = element.querySelector(`#${element.id} input`);
    let aside: HTMLElement = element.querySelector(`#${element.id} aside`);
    switch ($(input).attr('type')) {
      case 'email':
        if (input.value.includes('@') === true && input.value.includes('.')) {
          aside.className = 'active';
        } else {
          aside.className = '';
        }
        break;
      default:
        if (input.value !== '') {
          aside.className = 'active';
        } else {
          aside.className = '';
        }
        break;
    }
    //--► console.log(input.value); ◄--//
  }
}
