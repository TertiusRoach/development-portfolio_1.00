export namespace DefaultRightbar {
  export function events() {
    //--🠋 Mobile (Portrait) 🠋--//
    $('#rightbar-navigation div a').on('click', (event) => {
      hideRightbar();
      downplayHeader();
      selectRightbar(event);
    });

    $('#rightbar-navigation div').on('mouseover', (event) => {
      selectMain(event);
    });

    console.log('default-rightbar.js Detected!');
  }

  //--|🠋| default-rightbar |🠋|--//
  function selectRightbar(event: any) {
    //--|🠋| Remove all 'active' classes |🠋|--//
    $('#rightbar-navigation div').removeClass('active');
    //--|🠋| Highlight Clicked Rightbar |🠋|--//
    $(event.currentTarget).addClass('active');
  }
  function selectMain(event: any) {
    //--|🠋| Scroll default-main |🠋|--//
    window.location.href = event.currentTarget.children[0].getAttribute('href');
  }
  function hideRightbar() {
    //--|🠋| Hide Rightbar |🠋|--//
    $('#rightbar-portrait').removeClass('visible');
    $('#rightbar-portrait').addClass('hidden');
    setTimeout(() => {
      $('#resume-rightbar').css('display', 'none');
    }, 375);
  }
  function downplayHeader() {
    //--|🠋| Downplay Header |🠋|--//
    $('#rightbar-hitbox').removeClass('active');
    $('#header-portrait').removeClass('active');
  }
}
