export namespace select {
  export function button(element: HTMLElement) {
    let buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(`.${element.parentElement.className} button`);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].className = '';
      element.className = 'active';
    }
  }
  export function section(element: HTMLElement) {
    let sections: NodeListOf<HTMLElement> = document.querySelectorAll(`.${element.parentElement.className} section`);
    for (let i = 0; i < sections.length; i++) {
      sections[i].className = '';
      element.className = 'active';
    }
  }
}
