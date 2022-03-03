let btn = document.querySelector('.btn');

btn.addEventListener('click', myAnimation);
function myAnimation (){
    const elem = document.querySelector('.box');
    let pos = 0;
    

    const id = setInterval(frame, 1);
    function frame() {
        if(pos === 300){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
            if(pos !== 0){
                btn.removeEventListener('click', myAnimation)
            }
        }
    }
}