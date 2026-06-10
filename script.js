// console.log("My script is running!");
// Get the HTML content of the H1
console.log( $('h1').html() );

// Set the HTML content of the H1
$('h1').html("<em>Interactive</em> Project!"); // Adds emphasis tag too

// Set the HTML content of the output area
$('#outputArea').html("<p>Content set by jQuery!</p>");

// Get text content
console.log( $('h1').text() ); // Gets "Interactive Project!"

// Set text content
$('#outputArea').text("Just plain text here.");

$('#outputArea').append("<span> More text appended.</span>");

// Get a CSS property
console.log( $('h1').css('color') );

// Set a single CSS property
$('h1').css('color', 'darkred');

// Set multiple CSS properties using an object
$('#myButton').css({
  'background-color': 'lightblue',
  'padding': '10px 15px',
  'border': 'none',
  'border-radius': '5px', // Note: CSS property names with hyphens are quoted
  'cursor': 'pointer'     // Make the mouse cursor a pointer
});


$("#myButton").on('click', function() {
    console.log('clicked!');
    $('#outputArea').html("<strong>Button clicked!</strong> Timestamp: " + Date.now());
}
)