export namespace IndexLoginFooter {
  export function eventsFor(blockName: String | 'login-footer') {
    //--▼ Login Elements ▼--//
    $('#login-submit').on('click', () => {
      console.log('Log In');
    });
    $('#login-forgot').on('click', () => {
      console.log('Forgot Password?');
    });

    //--▼ Signup Elements ▼--//
    $('#signup-submit').on('click', () => {
      console.log('Sign Up');
      server();
    });
    $('#signup-demo').on('click', () => {
      console.log('View Demo?');
    });

    console.log(`--${blockName} Loaded`);
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }

  function server() {
    const { express } = require('express');

    const app = express();
    const port = process.env.PORT || 8080;

    // sendFile will go here

    app.listen(port);
    console.log('Server started at http://localhost:' + port);
  }
}
