const headerContainer = document.querySelector('.header_container');
function init() {
    window.addEventListener('scroll',
        function (e) {
            scroll_position = window.scrollY;
            if(scroll_position != 0) {
                console.log("whell down");
                //headerContainer.style.background = 'black';
            }
            else {
                headerContainer.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0))';
            }
        });
    }