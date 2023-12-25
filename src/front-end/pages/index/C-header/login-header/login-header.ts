import { select } from 'back-end/tools/select';

export namespace IndexLoginHeader {
  export function eventsFor(blockName: String | 'login-header') {
    //--▼ Login ▼--//
    $('#login-button').on('click', () => {
      select.button(document.getElementById('login-button'));
      select.section(document.getElementById('login-form'));
      select.section(document.getElementById('login-buttons'));
    });
    //--▼ Signup ▼--//
    $('#signup-button').on('click', () => {
      select.button(document.getElementById('signup-button'));
      select.section(document.getElementById('signup-form'));
      select.section(document.getElementById('signup-buttons'));
    });

    //--► console.log(`--${blockName} Loaded`); ◄--//
  }
}
