score=0;
cross=true;
document.onkeydown= function(e)
{
if(e.keyCode==38)//up arrow key
{
    hero_obj=document.getElementById("hero");
    hero_obj.classList.add("animate_hero");
    setTimeout( () =>
        {
            hero_obj.classList.remove("animate_hero");
        }
        ,700
    );
}

if(e.keyCode==39)
{
    hero_obj=document.getElementById("hero");
   
        hero_x= parseInt(window.getComputedStyle(hero_obj, null).getPropertyValue('left'));
    
    hero_obj.style.left=hero_x+250+"px";

    hero_right= parseInt(window.getComputedStyle(hero_obj, null).getPropertyValue('right'));
        if(hero_right<0)
        {
            hero_obj.style.left=0;
        }
       
}
}

setInterval(() => {
    hero_obj=document.getElementById("hero");
    dragon_obj=document.getElementById("dragon");
    //gives the current coordinates
    hero_x= parseInt(window.getComputedStyle(hero_obj, null).getPropertyValue('left'));
    hero_y= parseInt(window.getComputedStyle(hero_obj, null).getPropertyValue('bottom'));

    dragon_x= parseInt(window.getComputedStyle(dragon_obj, null).getPropertyValue('left'));
    dragon_y= parseInt(window.getComputedStyle(dragon_obj, null).getPropertyValue('bottom'));

    let diffx= Math.abs(dragon_x-hero_x);
    let diffy= Math.abs(dragon_y-hero_y);
   // console.log(diffx);
    if(diffy<150 && diffx< 80)
    {
        over=document.getElementById("gameover");
        over.style.visibility="visible";
        hero_obj.style.visibility="hidden";
        dragon_obj.style.visibility="hidden";
        score_el= document.getElementById("scorec");
        score_el.style.visibility="hidden";
        /*gwindow=document.getElementById("gamewindow");
        gwindow.style.background-color="blue";*/
    }

    else if (diffx < 150 && cross && hero_x>dragon_x) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        /*setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(dragon, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            dragon.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);*/
        console.log(score);

    }
}, 10);

function updateScore(score) {
   score_el= document.getElementById("scorec");
   score_el.textContent="Your score: "+score;
}