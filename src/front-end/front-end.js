//--|🠊| Front-end Development |🠈|--//
require(['front-end'], () => {
  let main = 'dist/front-end/utilities/Main.js';
  let jQuery = 'dist/front-end/vendors/jQuery.js';
  let fontAwesome = 'dist/front-end/vendors/Font Awesome.js';

  require([jQuery, fontAwesome, main]);
  //--|🠊| console.log('🠊 Main front-end.js Loaded 🠈'); |🠈|--//
});
