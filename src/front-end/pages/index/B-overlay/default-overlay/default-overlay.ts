export namespace DefaultOverlay {
  export function events() {
    // Click event
    $('#target').on('click', function () {
      console.log('Yay, you clicked the button!');
    });

    // Double click event
    $('#target').on('dblclick', function () {
      console.log('Wow, you double-clicked the button!');
    });

    // Mouse enter event
    $('#target').on('mouseenter', function () {
      console.log('Look, your mouse is on the button!');
    });

    // Mouse leave event
    $('#target').on('mouseleave', function () {
      console.log('Oh no, your mouse left the button!');
    });

    // Key press event
    $('#target').on('keydown', function (event) {
      // Check if the pressed key is the Enter key (key code 13)
      if (event.which === 13) {
        console.log('You pressed the Enter key!');
      }
    });

    // Submit event (for forms)
    $('#target').on('submit', function () {
      console.log('You submitted the form!');
    });

    // Change event (for form elements like dropdowns)
    $('#target').on('change', function () {
      console.log('You changed something!');
    });

    // Focus event
    $('#target').on('focus', function () {
      console.log("You're paying attention to the button!");
    });

    // Blur event
    $('#target').on('blur', function () {
      console.log('You stopped paying attention to the button!');
    });

    // Resize event
    $(window).on('resize', function () {
      console.log('You changed the size of the window!');
    });

    console.log('default-overlay.js Detected!');
  }
}
