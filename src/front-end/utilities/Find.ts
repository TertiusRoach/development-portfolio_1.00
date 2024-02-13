import { Load } from 'utilities/Load';

export namespace Find {
  export function block(blockName: String) {
    //--|🠋| Get pageName |🠋|--//
    let pageName: String = window.location.pathname.split('/').pop().split('.')[0] || 'index';

    switch (pageName) {
      case 'index':
        Load.index(blockName);
        break;
      case 'resume':
        Load.resume(blockName);
        break;
      case 'ticket':
        // Load.page('default-body');
        break;
      case 'university':
        // Load.page('default-body');
        break;
    }
  }
}
