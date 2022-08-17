// Once All content is loaded
window.addEventListener('DOMContentLoaded', (event) => {
    // Makes images grow when hovered
    {
        const images = document.querySelectorAll('.hover-images div');
        for(let i = 0; i < images.length; i++) {
            images[i].addEventListener('mouseover', (event) => {
                for(let index = 0; index < images.length; index++){
                    if(index == i){
                        select(index);
                    }else{
                        deselect(index);
                    }
                }
            }, false);
        }
        // Object functions
        function select(index) {
            // console.log('select called'); // DEBUGGING
            let img = images[index].getElementsByTagName('img')[0]; // Get inner image object

            // Change div properties
            // images[index].style.transition = 'flex-shrink 1500ms ease-out';
            images[index].style.flexShrink = '0';
            // images[index].style.width = 'none'
            images[index].style.filter = 'drop-shadow(0 0 6px #000000)';
            images[index].style.zIndex = '10';
            // images[index].style.flexGrow = '1';
            // images[index].style.flexBasis = '100';
            // images[index].style.borderColor = 'green';

            // Change image properties
            img.style.filter = 'saturate(1) brightness(1)';
        }
        function deselect(index) {
            // console.log('deselect called'); // DEBUGGING
            let img = images[index].getElementsByTagName('img')[0]; // Get inner image object

            // Change div properties
            // images[index].style.transition = 'flex-shrink 500ms ease-out';
            images[index].style.flexShrink = '1';
            // images[index].style.width = '100%'
            images[index].style.filter = 'none';
            images[index].style.zIndex = '0';
            // images[index].style.flexGrow = '0';
            // images[index].style.flexBasis = '1';
            // images[index].style.borderColor = 'red';

            // Change image properties
            img.style.filter = 'saturate(0.25) brightness(0.6)';
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

