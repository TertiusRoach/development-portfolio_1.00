//--|▼| Import Index |▼|--//
import { IndexDefaultBody } from 'front-end/index/A-body/default-body/default-body';
import { IndexLoginBody } from 'front-end/index/A-body/login-body/login-body';

import { IndexDefaultOverlay } from 'front-end/index/B-overlay/default-overlay/default-overlay';
import { IndexLoginOverlay } from 'front-end/index/B-overlay/login-overlay/login-overlay';

import { IndexDefaultHeader } from 'front-end/index/C-header/default-header/default-header';
import { IndexLoginHeader } from 'front-end/index/C-header/login-header/login-header';

import { IndexDefaultFooter } from 'front-end/index/D-footer/default-footer/default-footer';
import { IndexLoginFooter } from 'front-end/index/D-footer/login-footer/login-footer';

import { IndexDefaultLeftbar } from 'front-end/index/E-leftbar/default-leftbar/default-leftbar';

import { IndexDefaultRightbar } from 'front-end/index/F-rightbar/default-rightbar/default-rightbar';

import { IndexDefaultMain } from 'front-end/index/G-main/default-main/default-main';
import { IndexGradientMain } from 'front-end/index/G-main/gradient-main/gradient-main';

import { IndexDefaultData } from 'front-end/index/H-data/default-data/default-data';
import { IndexLoginData } from 'front-end/index/H-data/login-data/login-data';

//--|▼| Import Grid |▼|--//
import { GridDefaultBody } from 'front-end/grid/A-body/default-body/default-body';
import { GridDefaultOverlay } from 'front-end/grid/B-overlay/default-overlay/default-overlay';
import { GridDefaultHeader } from 'front-end/grid/C-header/default-header/default-header';
import { GridDefaultFooter } from 'front-end/grid/D-footer/default-footer/default-footer';
import { GridDefaultLeftbar } from 'front-end/grid/E-leftbar/default-leftbar/default-leftbar';
import { GridDefaultRightbar } from 'front-end/grid/F-rightbar/default-rightbar/default-rightbar';
import { GridDefaultMain } from 'front-end/grid/G-main/default-main/default-main';
import { GridDefaultData } from 'front-end/grid/H-data/default-data/default-data';

export namespace GetEvents {
  function index(blockName: String) {
    switch (blockName) {
      //--▼ index-body ▼--//
      case 'default-body':
        return IndexDefaultBody.eventsFor(blockName);
      case 'login-body':
        return IndexLoginBody.eventsFor(blockName);
      //--▼ index-overlay ▼--//
      case 'default-overlay':
        return IndexDefaultOverlay.eventsFor(blockName);
      case 'login-overlay':
        return IndexLoginOverlay.eventsFor(blockName);
      //--▼ index-header ▼--//
      case 'default-header':
        return IndexDefaultHeader.eventsFor(blockName);
      case 'login-header':
        return IndexLoginHeader.eventsFor(blockName);
      //--▼ index-footer ▼--//
      case 'default-footer':
        return IndexDefaultFooter.eventsFor(blockName);
      case 'login-footer':
        return IndexLoginFooter.eventsFor(blockName);
      //--▼ index-leftbar ▼--//
      case 'default-leftbar':
        return IndexDefaultLeftbar.eventsFor(blockName);
      //--▼ index-rightbar ▼--//
      case 'default-rightbar':
        return IndexDefaultRightbar.eventsFor(blockName);
      //--▼ index-main ▼--//
      case 'default-main':
        return IndexDefaultMain.eventsFor(blockName);
      case 'gradient-main':
        return IndexGradientMain.eventsFor(blockName);
      //--▼ index-data ▼--//
      case 'default-data':
        return IndexDefaultData.eventsFor(blockName);
      case 'login-data':
        return IndexLoginData.eventsFor(blockName);
    }
  }
  function grid(blockName: String) {
    switch (blockName) {
      //--▼ grid-body ▼--//
      case 'default-body':
        return GridDefaultBody.eventsFor(blockName);
      //--▼ grid-overlay ▼--//
      case 'default-overlay':
        return GridDefaultOverlay.eventsFor(blockName);
      //--▼ grid-header ▼--//
      case 'default-header':
        return GridDefaultHeader.eventsFor(blockName);
      //--▼ grid-footer ▼--//
      case 'default-footer':
        return GridDefaultFooter.eventsFor(blockName);
      //--▼ grid-leftbar ▼--//
      case 'default-leftbar':
        return GridDefaultLeftbar.eventsFor(blockName);
      //--▼ grid-rightbar ▼--//
      case 'default-rightbar':
        return GridDefaultRightbar.eventsFor(blockName);
      //--▼ grid-main ▼--//
      case 'default-main':
        return GridDefaultMain.eventsFor(blockName);
      //--▼ grid-data ▼--//
      case 'default-data':
        return GridDefaultData.eventsFor(blockName);
    }
  }

  export class forPage {
    constructor(pageName: String, blockName: String) {
      //--|▼| Add page here |▼|--//
      switch (pageName) {
        case 'index':
          index(blockName);
          break;
        case 'grid':
          grid(blockName);
          break;
      }
      //--► console.log(`--${pageName} Loaded`); ◄--//
    }
  }
}
