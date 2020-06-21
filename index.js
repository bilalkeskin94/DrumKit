for (let i =0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        let buttonHtml=this.innerHTML;
        switch (buttonHtml) {
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
            default:
                break;
        }
    });

}

