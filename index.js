const drumBtns = document.querySelectorAll('.drum').length;

for (let i=0; i < drumBtns; i++) {
    
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {

        let btnInnerHTML = this.innerHTML;

        switch (btnInnerHTML) {
            case 'w':

                let tomOne = new Audio('sounds/tom-1.mp3');
                tomOne.play();

                break;
            
            case 'a':
                
                let tomTwo = new Audio('sounds/tom-2.mp3');
                tomTwo.play();

                break;

            case 's':
                
                let tomThree = new Audio('sounds/tom-3.mp3');
                tomThree.play();
                    
                break;

            case 'd':
                
                let tomFour = new Audio('sounds/tom-4.mp3');
                tomFour.play();
                        
                break;
                
            case 'j':
                
                let snare = new Audio('sounds/snare.mp3');
                snare.play();
                            
                break;

            case 'k':
                
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
                                
                break;

            case 'l':
                
                let kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                                
                break;
            
            default: console.log('Clicked');

        };
    });

};

const footerYear = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
footerYear.innerHTML = currentYear;