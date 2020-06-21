for (let i =0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        let buttonHtml=this.innerHTML;
        findKey(buttonHtml);
        makeAnimation(buttonHtml);
    });

}
document.addEventListener("keypress",function (e) {
    findKey(e.key);
    makeAnimation(e.key);
})
function findKey(key) {
    switch (key) {
        case  'w':
            let tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            let tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            let tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            let tom4=new Audio("sounds/tom-2.mp3");
            tom4.play();
            break;
        case 'j':
            let snare=new Audio("sounds/tom-3.mp3");
            snare.play();
            break;
        case 'k':
            let crash=new Audio("sounds/tom-3.mp3");
            crash.play();
            break;
        case 'l':
            let kick=new Audio("sounds/tom-3.mp3");
            kick.play();
            break;
        default: console.log(key);
    }
}

function makeAnimation(key) {
    let activeKey=document.querySelector("."+key);
    activeKey.classList.add("pressed");
    setTimeout(function () {
    activeKey.classList.remove("pressed");
    },150);
}

