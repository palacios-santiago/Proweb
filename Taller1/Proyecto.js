function highlight(element) {
    if (element.classList.contains("sub")) {
        element.style.background = "linear-gradient(rgb(245, 237, 22), rgb(245, 63, 22))";
        element.style.border = "solid white";
    } else {
        element.style.backgroundColor = "Coral";
        element.style.border = "solid green";
    }
}

function unhighlight(element) {
    if (element.id == ("explaboral")) {
        element.style.background = "linear-gradient(#1da1ee, #1d5fee)";
    } if (element.id == ("projects")) {
        element.style.background = "linear-gradient(#1d5fee, #1d2eee)";
    } if (element.id == ("training")) {
        element.style.background = "linear-gradient(#1d2eee, #6d1dee)";
    } if (element.id == ("photos")) {
        element.style.background = "linear-gradient(#6d1dee, #bd1dee)";
    }

    if (element.classList.contains("sub")) {
        element.style.border = "2px solid rgb(25, 43, 28)";
    } else {
        element.style.backgroundColor = "inherit";
        element.style.border = "inherit";
    }
}

//////////////////////////////

function Scroll(element) {
  let enlace = this.getAttribute("href");
 // let offsetTop = document.querySelector(href).offsetTop;

  scroll({
    behavior: "smooth"
  });
}

let links =document.getElementsByClassName("link");
for (let link of links) {
  link.addEventListener("click", Scroll);
}


function clickHandler(){

    let flag=1;
    let msg = document.getElementById("msg").value;
    let name = document.getElementById("nametxt").value;
    if(msg.length==0 ||msg.length>300){
        flag=0;
        console.log("nea mensaje");
        document.getElementById("errormsg").style.visibility = "visible";
    }   
    if(name.length==0){
        flag=0;
        console.log("nea names");
        document.getElementById("errorname").style.visibility = "visible";
    }else{
        document.getElementById("errorname").style.visibility = "hidden";
    }
    if(flag==1){
        let log= name+": "+msg+"\n";
    let txtarea=document.getElementById("logchat");
    txtarea.value=txtarea.value+log;
    console.log(log);
    document.getElementById("errormsg").style.visibility = "hidden";
    document.getElementById("errorname").style.visibility = "hidden";
    }
    
}

var button = document.getElementById("enviarbtn");
console.log(button);
button.addEventListener("click", clickHandler);

