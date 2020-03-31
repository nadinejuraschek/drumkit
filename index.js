const drumBtns = document.querySelectorAll('.drum').length;

for (let i=0; i < drumBtns; i++) {
    
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        
        let sound = new Audio('sounds/tom-1.mp3');

        sound.play();

    });

};

const footerYear = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
footerYear.innerHTML = currentYear;