

// Once All content is loaded
window.addEventListener('DOMContentLoaded', (event) => {
    class Image {
        constructor(div){
            this.div = div;
            this.img = div.getElementsByTagName('img')[0];
            this.selected = false;
        }
    }
    
    // Desktop interaction
    {
        let selecting = false;
        let firstSelection = true;
        const divs = document.querySelectorAll('.hover-images div');
        let images = [];
        for(let i = 0; i < divs.length; i++) {
            images.push(new Image(divs[i]));
        }
        
        for(let i = 0; i < images.length; i++) {
            images[i].div.addEventListener('click', (event) => {
                if(!selecting){
                    for(let index = 0; index < images.length; index++){
                        if(index == i){
                            if(firstSelection){
                                select(index);
                                firstSelection = false;
                            } else {
                                selecting = true;
                                setTimeout(() => {
                                    select(index);
                                    selecting = false;
                                }, 750);
                            }
                        }else{
                            deselect(index);
                        }
                    }
                }
            }, false);

            images[i].div.addEventListener('mouseover', (event) => {
                for(let index = 0; index < images.length; index++){
                    if(!images[index].selected){
                        if(index == i){
                            images[index].img.style.filter = 'saturate(0.25) brightness(0.8)' 
                        }else{
                            images[index].img.style.filter = 'saturate(0.25) brightness(0.6)'
                        }
                    }
                }
            }, false);
        }
        // Object functions
        function select(index) {
            // console.log('select called'); // DEBUGGING
            images[index].selected = true;

            // Change div properties
            images[index].div.style.flexShrink = '0.5';
            images[index].div.style.filter = 'drop-shadow(0 0 6px #000000)';
            images[index].div.style.zIndex = '1';

            // Change image properties
            images[index].img.style.filter = 'saturate(1) brightness(1)';
        }
        function deselect(index) {
            // console.log('deselect called'); // DEBUGGING
            images[index].selected = false;

            // Change div properties
            images[index].div.style.flexShrink = '1';
            images[index].div.style.filter = 'none';
            images[index].div.style.zIndex = '0';

            // Change image properties
            images[index].img.style.filter = 'saturate(0.25) brightness(0.6)';
        }
    }

    // Mobile interaction
    {
        let currentImg = 0;

        let selecting = false;
        let firstSelection = true;
        const divs = document.querySelectorAll('.images-mobile div');
        let images = [];
        for(let i = 0; i < divs.length; i++) {
            images.push(new Image(divs[i]));
        }

        document.addEventListener('touchstart', handleTouchStart, false);        
        document.addEventListener('touchmove', handleTouchMove, false);
        
        var yDown = null;
        
        function getTouches(evt) {
          return evt.touches ||             // browser API
                 evt.originalEvent.touches; // jQuery
        }                                                     
                                                                                 
        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];                                      
            yDown = firstTouch.clientY;                                      
        };                                                
                                                                                 
        function handleTouchMove(evt) {
            if (!yDown ) {
                return;
            }
        
            var yUp = evt.touches[0].clientY;
        
            var yDiff = yDown - yUp;
                                                                                 
            if ( yDiff > 0 ) {
                deselect(currentImg);
                console.log(currentImg);
                if(currentImg < 4){
                    currentImg++;
                } else {
                    currentImg = 0;
                }
                console.log(currentImg);
                select(currentImg);
            } else { 
                deselect(currentImg);
                console.log(currentImg);
                if(currentImg > 0){
                    currentImg--;
                } else {
                    currentImg = 4;
                }
                console.log(currentImg);
                select(currentImg);
            }                   

            /* reset value */
            yDown = null;                                             
        };

        select(currentImg);
        document.getElementsByClassName('images-mobile')[0].addEventListener('click', (event) => {

            
        }, false);

        // Object functions
        function select(index) {
            // console.log('select called'); // DEBUGGING
            images[index].selected = true;

            // Change div properties
            images[index].div.style.flexShrink = '0.5';
            images[index].div.style.filter = 'drop-shadow(0 0 6px #000000)';
            images[index].div.style.zIndex = '1';

            // Change image properties
            images[index].img.style.filter = 'saturate(1) brightness(1)';
        }
        function deselect(index) {
            // console.log('deselect called'); // DEBUGGING
            images[index].selected = false;

            // Change div properties
            images[index].div.style.flexShrink = '1';
            images[index].div.style.filter = 'none';
            images[index].div.style.zIndex = '0';

            // Change image properties
            images[index].img.style.filter = 'saturate(0.25) brightness(0.6)';
        }
    }

    // Makes contact button clickable
    {
        document.getElementById('contact').addEventListener('click', () => {
            document.getElementsByClassName('contact')[0].style.display = 'flex';
            // document.getElementsByClassName('contact')[0].style.zIndex = '20';
        }, false)

        document.getElementById('close').addEventListener('click', () => {
            document.getElementsByClassName('contact')[0].style.display = 'none';
            // document.getElementsByClassName('contact')[0].style.zIndex = '20';
        }, false)
    }
}, false);

