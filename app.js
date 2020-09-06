const nameInput = document.getElementById('name');

// keypress - when key is pressed
// nameInput.addEventListener('keypress', function() {
//     console.log('you pressed a key');
// });

// keydown - when key is down
// nameInput.addEventListener('keydown', function() {
//     console.log('you pressed a key');
// });

// keyup - when key is released
nameInput.addEventListener('keyup', function() {
    console.dir(nameInput.value);
});