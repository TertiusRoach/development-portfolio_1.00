import { Find } from 'utilities/Find';

export namespace DefaultBody {
  export function events() {
    console.log('default-body.js Detected!');

    Find.block('default-overlay');
    Find.block('default-header');
    Find.block('default-footer');
    Find.block('default-leftbar');
    Find.block('default-rightbar');
    Find.block('default-main');
    Find.block('default-data');
  }
}
