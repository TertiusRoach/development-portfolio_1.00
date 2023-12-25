import { mark } from 'back-end/tools/mark';
export namespace IndexLoginOverlay {
  export function eventsFor(blockName: String | 'login-overlay') {
    //--▼ Login Elements ▼--//
    $('#login-email').on('keyup', () => {
      mark.aside(document.getElementById('login-email'));
    });
    $('#login-password').on('keyup', () => {
      mark.aside(document.getElementById('login-password'));
    });

    //--▼ Signup Elements ▼--//
    $('#signup-username').on('keyup', () => {
      mark.aside(document.getElementById('signup-username'));
    });
    $('#signup-email').on('keyup', () => {
      mark.aside(document.getElementById('signup-email'));
    });
    $('#signup-password').on('keyup', () => {
      confirmPassword();
      mark.aside(document.getElementById('signup-password'));
    });
    $('#signup-confirm').on('keyup', () => {
      confirmPassword();
      mark.aside(document.getElementById('signup-confirm'));
    });

    //--▼ Generate Password ▼--//
    $('#generate-password').on('click', () => {
      applyPassword(randomizePassword());
      confirmPassword();
      mark.aside(document.getElementById('signup-confirm'));
    });

    //--▼ Check Password ▼--//
    $('#see-password').on('click', () => {
      viewPassword('login-password');
    });
    $('#view-password').on('click', () => {
      viewPassword('signup-confirm');
    });

    //--▼ Mark Password ▼--//
    $('#login-form').on('mouseenter', () => {
      mark.aside(document.getElementById('login-password'));
    });
    $('#signup-form').on('mouseenter', () => {
      mark.aside(document.getElementById('signup-password'));
    });

    //--► console.log(`--${pageName} Loaded`); ◄--//
  }

  function confirmPassword() {
    const password: HTMLInputElement = document.querySelector('#signup-password input');
    const confirm: HTMLInputElement = document.querySelector('#signup-confirm input');
    const toggle: HTMLElement = document.querySelector('#signup-confirm aside');

    if (password.value === confirm.value) {
      toggle.id = 'check';
    } else {
      toggle.id = 'times';
    }
  }
  function randomizePassword() {
    let getRandomLength = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + max); //--◄ Math.floor(Math.random() * (max - min + 1) + max) ◄--//
    };
    let getRandomLower = () => {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    };
    let getRandomNumber = () => {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    };
    let getRandomSymbol = () => {
      const symbols = '!@#$%^&*(){}[]=<>/,.';
      return symbols[Math.floor(Math.random() * symbols.length)];
    };

    let length: number = getRandomLength(10, 20);
    let number: string = getRandomNumber();
    let symbol: string = getRandomSymbol();
    let generatedPassword: String = '';

    let variationsCount = [number, symbol].length;
    for (let i = 0; i < length; i += variationsCount) {
      if (number) {
        generatedPassword += getRandomNumber();
      }
      if (symbol) {
        generatedPassword += getRandomSymbol();
      }
      generatedPassword += getRandomLower();
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
  }
  function viewPassword(container: String) {
    const input: HTMLInputElement = document.querySelector(`#${container} input`);
    input.type = 'text';
    setTimeout(() => {
      input.type = 'password';
    }, 5000);
  }
  function applyPassword(generatedPassword: string) {
    const passwordInput: HTMLInputElement = document.querySelector('#signup-password input');
    const confirmInput: HTMLInputElement = document.querySelector('#signup-confirm input');

    passwordInput.value = generatedPassword;
    confirmInput.value = passwordInput.value;
  }
}
