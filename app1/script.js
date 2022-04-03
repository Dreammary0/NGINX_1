document.body.style.overflow = "hidden"; /*прокрутка выкл*/

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'img/music.mp3');
/*кнопки старт и стоп*/
let press_start = document.querySelector('#play');
let press_stop = document.querySelector('#stop');
/*счет и время*/
let score = document.querySelector('.count');
let timer =document.querySelector('.timing');
/*картинки с кротом*/
const moles = document.querySelectorAll('.mole');
let moleArr = Array.prototype.slice.call(moles);

let random;
let kickPos;
let StartScore=0;
let sec=60;

function ShowMole(){
    moleArr.forEach(curr=>{
        curr.classList.remove("mole-active");
    });

    random=Math.floor(Math.random()*moleArr.length);
    moleArr[random].classList.add("mole-active");
    kickPos=moleArr[random].id;
}


function KickScore(){
    moleArr.forEach(curr=>{
        curr.addEventListener("click",function(){
            if (kickPos === curr.id){
    StartScore++;
                console.log(StartScore);
                score.textContent=StartScore;
            }
        })
    });
}
KickScore();

function Timer(){
    if (sec>0){
       sec--;
       timer.innerHTML=sec;
   }
   else {
        location.reload();
        alert("Игра окончена! Ваш счет: " + StartScore);
    }
}

function play()
{// play audio
    ShowMole();
    Timer();
}

function Start(){
moleTimer= setInterval(ShowMole,1100) ;
timeTimer = setInterval(Timer, 1000);
audioElement.play();

play();
}

press_start.addEventListener('click',Start);
press_stop.addEventListener('click',function (){
location.reload();
});

