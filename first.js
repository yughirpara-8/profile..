let name = prompt("enter you name");

let userName = `@${"name=",name}${name.length}`;
let bio = prompt("your profession");
 
let bioOut= `| ${bio} |`;

let img = ["dog.jpg","pi.jpg","asmita.jpg","hemil.jpg","karnavati.jpg","ramesh.jpg","rishabh.jpg","yug.jpeg"];

document.querySelector("#btn").addEventListener("click",()=>{
    if(name == "yug"){
        window.open(img[7],"_blank")
    } else if (name == "hemil"){
        window.open(img[0,3],"_blank")
    }
    else if (name == "asmita"){
        window.open(img[2],"_blank")
    }
    else if (name == "mitesh"){
        window.open(img[4],"_blank")
    }
    else if (name == "ramesh"){
        window.open(img[5],"_blank")
    }
    else if (name == "rishabh"){
        window.open(img[6],"_blank")
    }
    else {
        window.open(img[1],"_blank")
    }
});

document.querySelector("#uid").append(userName);
document.querySelector("#bio").prepend(bioOut);
document.querySelector("#name").append(name);

