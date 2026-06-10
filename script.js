// script.js
$(document).ready(function() {
    console.log('Script loaded!');

    // Change heading HTML
    $('h1').html("jQuery Makes It <em>Easier</em>!");

    // Add initial text to output area
    $('#outputArea').text("Ready for clicks...");

    // Style the main button with jQuery
    $('#myButton').css({
        'background-color': 'cornflowerblue',
        'color': 'white',
        'padding': '10px 15px',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer',
        'font-size': '1em'
    });

       // Style the Hide button to match the book cover
       $('#hideButton').css({
        'background-color': '#D94E32',
        'color': 'white',
        'padding': '10px 15px',
        'border': 'none',
        'border-radius': '5px',
        'cursor': 'pointer',
        'font-size': '1em'
    });

    // Add the .highlight class to the first paragraph
    $('p:first').addClass('highlight');

    // Event handler for the main button click
    $('#myButton').on('click', function() {
        console.log("Button was clicked!");

        // Text Input Interaction
        // Read the current value from #textInput and display it in #outputArea
        const inputValue = $('#textInput').val();
        $('#outputArea').text(inputValue);
        // END CHALLENGE 2

        $('p:first').toggle();
        $('h1').toggleClass('active');

    
    });

    // Add a hover effect to the main button
    $('#myButton').hover(
        function() { $(this).css('background-color', 'darkblue'); },
        function() { $(this).css('background-color', 'cornflowerblue'); }
    );


    // Hide the <h1> element when #hideButton is clicked
    $('#hideButton').on('click', function() {
        $('h1').toggle();
    });
   

}); // End of $(document).ready()
