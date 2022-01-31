let firstSur = document.querySelector(".first-text-sub");
let secondSur = document.querySelector(".second-text-sub");
let thirdSur = document.querySelector(".third-text-sub");
let forthSur = document.querySelector(".forth-text-sub");
let fifthSur = document.querySelector(".fifth-text-sub");


let statusArr = new Array(false, false, false, false, false);

function first(){
    if(firstSur.style.display == "block"){
        firstSur.style.display = "none";
        statusArr[0] = false;
        rotatedown(".first-sur-icon");
    }
    else{
        firstSur.style.display = "block";
        statusArr[0] = true;
        rotateup(".first-sur-icon");
    }  
    check(0);
}

function second(){
    if(secondSur.style.display == "block"){
        secondSur.style.display = "none";
        statusArr[1] = false;
        rotatedown(".second-sur-icon");
    }
    else{
        secondSur.style.display = "block";
        statusArr[1] = true;
        rotateup(".second-sur-icon");
    }  
    check(1);
}

function third(){
    if(thirdSur.style.display == "block"){
        thirdSur.style.display = "none";
        statusArr[2] = false;
        rotatedown(".third-sur-icon");
    }
    else{
        thirdSur.style.display = "block";
        statusArr[2] = true;
        rotateup(".third-sur-icon");
    }  
    check(2);
}

function forth(){
    if(forthSur.style.display == "block"){
        forthSur.style.display = "none";
        statusArr[3] = false;
        rotatedown(".forth-sur-icon");
    }
    else{
        forthSur.style.display = "block";
        statusArr[3] = true;
        rotateup(".forth-sur-icon");
    }  
    check(3);
}

function fifth(){
    if(fifthSur.style.display == "block"){
        fifthSur.style.display = "none";
        statusArr[4] = false;
        rotatedown(".fifth-sur-icon");
    }
    else{
        fifthSur.style.display = "block";
        statusArr[4] = true;
        rotateup(".fifth-sur-icon");
    }  
    check(4);
}

function check(number){
    for(let i = 0; i < 5; i++){
        if(i == number){
            continue;
        }
        else{
            switch(i){
                case 0:
                    firstSur.style.display = "none";
                    rotatedown(".first-sur-icon");
                    break;
                case 1:
                    secondSur.style.display = "none";
                    rotatedown(".second-sur-icon");
                    break;
                case 2:
                    thirdSur.style.display = "none";
                    rotatedown(".third-sur-icon");
                    break;
                case 3:
                    forthSur.style.display = "none";
                    rotatedown(".forth-sur-icon");
                    break;
                case 4:
                    fifthSur.style.display = "none";
                    rotatedown(".fifth-sur-icon");
                    break;                                    
            }
        }
    }
}

function rotateup(icon){
    document.querySelector(icon).style.transform = 'rotate(180deg)';
}

function rotatedown(icon){
    document.querySelector(icon).style.transform = 'rotate(360deg)';
}