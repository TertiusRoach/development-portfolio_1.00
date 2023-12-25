import { GetDesign } from 'back-end/utilities/GetDesign';

export namespace IndexLoginBody {
  export function eventsFor(blockName: String | 'login-body') {
    new GetDesign.forPage('login-overlay');
    new GetDesign.forPage('login-header');
    new GetDesign.forPage('login-footer');
    /*
    new GetDesign.forPage('rain-leftbar');
    new GetDesign.forPage('rain-rightbar');
    */
    new GetDesign.forPage('gradient-main');
    /*
    new GetDesign.forPage('login-data');
    */

    //--► console.log(`--${blockName} Loaded`); ◄--//
  }
}
