// Once All content is loaded
window.addEventListener('DOMContentLoaded', (e) => {
    // Create Variables
    const backgroundColors = [
        'rgba(115, 93, 91, 0.6)',
        'rgba(89, 70, 38, 0.5)',
        'rgba(222, 218, 201, 0.9)',
        'rgba(103, 116, 123, 0.5)',
        'rgba(137, 136, 209, 0.85)'
    ];

    var slideshow = document.getElementsByClassName('slideshow')[0];
    var currentColor = 1; // Initializes at 1 beacause color 0 is set by css

    // Create function fadeComplete
    var fadeComplete = (e) => {
        // Put first image element inside slideshow element
        slideshow.appendChild(imageArr[0]);
    };
    // Create function fadeStart
    var fadeStart = () => {
        document.documentElement.style.setProperty('--current-color', backgroundColors[currentColor]);
        
        if(currentColor == 4){
            currentColor = 0;
        } else {
            currentColor++;
        }
    }

    // Create array of slideshow images (stored as HTML elements)
    var imageArr = slideshow.getElementsByTagName('img');
        
    // For each image
    for(let i=0; i < imageArr.length; i++) {
        // Add an event listener that calls fadeComplete when the animation/fade has ended
        imageArr[i].addEventListener('animationend', fadeComplete, false);
        // 'Vice versa' with fadeStart
        imageArr[i].addEventListener('animationstart', fadeStart, false);
    }

}, false);