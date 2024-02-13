import { Tool } from 'utilities/Tool';

import { Index } from 'pages/index/index';
import { Resume } from 'pages/resume/resume';
export namespace Load {
  export function index(blockName: String) {
    let info: any = new Tool.info(blockName);
    let item: HTMLElement = info.element;

    fetch(info.directory)
      .then((response) => response.text())
      .then((data) => {
        item.className = `${blockName}`;
        //--|🠋| Replace HTML |🠋|--//
        item.innerHTML = data;

        //--|🠋| Run Page |🠋|--//
        Index.run(blockName);
      })
      .catch((error) => {
        //--|🠋| Error Handling |🠋|--//
        console.error('|🠊 Error:', error);
      });
  }

  export function resume(blockName: String) {
    let info: any = new Tool.info(blockName);
    let item: HTMLElement = info.element;

    fetch(info.directory)
      .then((response) => response.text())
      .then((data) => {
        //--|🠋| Change Class |🠋|--//
        item.className = `${blockName}`;
        //--|🠋| Replace HTML |🠋|--//
        item.innerHTML = data;

        Resume.run(blockName);
      })
      .catch((error) => {
        //--|🠋| Error Handling |🠋|--//
        console.error('|🠊 Error:', error);
      });
  }

  /* console.log('🠊 Load.js Detected! 🠈'); */
}
