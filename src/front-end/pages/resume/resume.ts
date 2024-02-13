import { DefaultBody } from '../resume/A-body/default-body/default-body';
import { DefaultOverlay } from '../resume/B-overlay/default-overlay/default-overlay';
import { DefaultHeader } from '../resume/C-header/default-header/default-header';
import { DefaultFooter } from '../resume/D-footer/default-footer/default-footer';
import { DefaultLeftbar } from '../resume/E-leftbar/default-leftbar/default-leftbar';
import { DefaultRightbar } from '../resume/F-rightbar/default-rightbar/default-rightbar';
import { DefaultMain } from '../resume/G-main/default-main/default-main';
import { DefaultData } from '../resume/H-data/default-data/default-data';

export namespace Resume {
  export function run(blockName: String) {
    switch (blockName) {
      //--|🠋| Body |🠋|--//
      case 'default-body':
        DefaultBody.events();
        break;
      case 'backup-body':
        // BackupBody.events();
        break;

      //--|🠋| Overlay |🠋|--//
      case 'default-overlay':
        DefaultOverlay.events();
        break;
      case 'backup-overlay':
        // BackupOverlay.events();
        break;

      //--|🠋| Header |🠋|--//
      case 'default-header':
        DefaultHeader.events();
        break;
      case 'scalable-header':
        // ScalableHeader.events();
        break;

      //--|🠋| Footer |🠋|--//
      case 'default-footer':
        DefaultFooter.events();
        break;
      case 'backup-footer':
        // BackupFooter.events();
        break;

      //--|🠋| Leftbar |🠋|--//
      case 'default-leftbar':
        DefaultLeftbar.events();
        break;
      case 'backup-leftbar':
        // BackupLeftbar.events();
        break;

      //--|🠋| Rightbar |🠋|--//
      case 'default-rightbar':
        DefaultRightbar.events();
        break;
      case 'backup-rightbar':
        // BackupRightbar.events();
        break;

      //--|🠋| Main |🠋|--//
      case 'default-main':
        DefaultMain.events();
        break;
      case 'backup-main':
        // BackupMain.events();
        break;

      //--|🠋| Data |🠋|--//
      case 'default-data':
        DefaultData.events();
        break;
      case 'backup-data':
        // BackupData.events();
        break;
    }
    /* console.log('🠊 résumé.js Detected! 🠈'); */
  }
}
