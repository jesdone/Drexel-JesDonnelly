let nav = document.querySelector("nav");
let canSeeMenu = false

let burgerButton = document.querySelector("#burger-button");
burgerButton.addEventListener("click", openCloseMenu);

function openCloseMenu(){
    if(!canSeeMenu){
        nav.style.display = 'block';
        canSeeMenu = true;

        document.getElementById("burger-button").classList.remove('fa-bars');
        document.getElementById("burger-button").classList.add('fa-times-circle');
    }else{
        nav.style.display = 'none';
        canSeeMenu = false;

        document.getElementById("burger-button").classList.remove('fa-times-circle');
        document.getElementById("burger-button").classList.add('fa-bars');        
    }
    }
