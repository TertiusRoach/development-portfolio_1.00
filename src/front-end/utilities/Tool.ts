export namespace Tool {
  export class info {
    constructor(blockName: String) {
      let page: String = window.location.pathname.split('/').pop().split('.')[0] || 'index';
      let block: String = blockName.split('-')[1];
      let order: String;

      switch (block) {
        case 'body':
          order = 'A';
          break;
        case 'overlay':
          order = 'B';
          break;
        case 'header':
          order = 'C';
          break;
        case 'footer':
          order = 'D';
          break;
        case 'leftbar':
          order = 'E';
          break;
        case 'rightbar':
          order = 'F';
          break;
        case 'main':
          order = 'G';
          break;
        case 'data':
          order = 'H';
          break;
      }

      return {
        directory: `dist/front-end/pages/${page}/${order}-${block}/${blockName}/${blockName}.html`,
        element: document.querySelector(`#${page}-${block}`),
      };
    }
  }
}
