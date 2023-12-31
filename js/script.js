// mousedown 
// mouseup 
// mousemove 

const container = document.getElementById('container');

const ball = document.getElementById('ball')

let initialTop, initialLeft;

function handleMove(e){
    const left = e.clientX - initialLeft;
    const top = e.clientY - initialTop;
    ball.style.top = `${top}px`;
    ball.style.left = `${left}px`

}

ball.addEventListener('mousedown', function(e){
    if(!initialLeft && !initialTop){
        initialTop = e.clientY;
        initialLeft = e.clientX;
    }
    container.addEventListener('mousemove', handleMove)
})

ball.addEventListener('mouseup', function(){
    container.removeEventListener('mousemove', handleMove)
})