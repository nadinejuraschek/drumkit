const drumBtns = document.querySelectorAll('.drum').length;

for (let i=0; i < drumBtns; i++) {
    
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        
        let sound = new Audio('sounds/tom-1.mp3');

        sound.play();

    });

};