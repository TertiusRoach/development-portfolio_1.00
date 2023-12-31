//--|►| RequireJS (Workflow Setup) |◄|--//
require(['front-end'], () => {
  //--|▼| Find pageName |▼|--//
  const pageName = window.location.href.split('/').pop().split('.')[0];

  let fontAwesome = 'dist/front-end/vendors/Font Awesome.js'; //--|◄| Font Awesome Pro (5.13.0) |◄|--//
  //   let jQuery = 'dist/vendors/jquery/3.6.0/3.6.0.min.js'; //--|◄| jQuery (3.6.0) |◄|--//
  // let main = `dist/front-end/pages/${pageName}/${pageName}.js`;
  let test = 'dist/front-end/pages/index/index.js';

  require([fontAwesome, test]);

  console.log(`🠊 front-end.js Loaded 🠈`);
});
