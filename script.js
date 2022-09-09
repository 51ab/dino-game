score=0;
cross=true;
document.onkeydown = function(e)
{
    console.log("key code is: ",e.code);
    if(e.key=="ArrowUp")
    {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(( )=> {
            dino.classList.remove('animateDino')
        },700);
    }
    if(e.key=="ArrowDown")
    {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(( )=> {
            dino.classList.remove('animateDino')
        },1000);
    }
    
    if(e.key=="ArrowRight"){
        dino=document.querySelector('.dino')
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinox +112+"px";
    }
    if(e.key=="ArrowLeft"){
        dino=document.querySelector('.dino')
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinox -112 )+"px";
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    X = Math.abs(dx-ox);
    Y=Math.abs(dy-oy);
    console.log(X,Y);
    if(X<113 && Y <52)
    {
        
        gameOver.innerHTML = "Game Over :( - Reload to play again";
        obstacle.classList.remove('obsani')
        
    }
    else if(cross && X<100){
        score+=10;
        updateScore(score)
        cross=false;
        setTimeout(() => {
            cross = true;
        },1000);
        setTimeout(() =>{

        
        animatioDuration = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newDur = animatioDuration - 0.07;
        obstacle.style.animationDuration = newDur + 's';
    },500);
    }
},100);
function updateScore(score){
    scoreContainer.innerHTML = "Your Score : " + score
}
