/*
//--|►| RequireJS (Workflow Setup) |◄|--//
require(['main', 'mongo'], () => {
  //--|▼| Find pageName |▼|--//
  const pageName = window.location.href.split('/').pop().split('.')[0];

  let fontAwesomePro = 'dist/vendors/font-awesome/js/all.min.js'; //--|◄| Font Awesome Pro (5.13.0) |◄|--//
  let bootstrap = 'dist/vendors/bootstrap/5.3.0/js/bootstrap.bundle.js'; //--|◄| Bootstrap (5.3.0) |◄|--//
  let jQuery = 'dist/vendors/jquery/3.6.0/3.6.0.min.js'; //--|◄| jQuery (3.6.0) |◄|--//
  let main = `dist/front-end/${pageName}/${pageName}.js`;

  require([fontAwesomePro, bootstrap, jQuery, main]);

  console.log('--main.js Loaded');
  //--► console.log('--main.js Loaded'); ◄--//
});
*/
