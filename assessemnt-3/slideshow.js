let images=['g1.jpg','g2.jpg','g3.jpg','g4.jpg','g5.jpg',];

let slide_container=document.getElementById("slidecontainer");
console.log(slide_container);
let img_element=document.createElement("img");
img_element.setAttribute('src',images[0]);

img_element.setAttribute('width','200px');
img_element.setAttribute('height','200px');

slide_container.appendChild(img_element);

let i=0;
function bef(btn){
    
if(i<images.length-1){
    setImage(i+1);
console.log("next -->"+(i+1));
    i++;
    
}
}

function aft(btn){
     
    if(i>0){
        console.log("prev -->"+(i-1));
        setImage(i-1);
        i--;
    }
}

function setImage(i){
    img_element.setAttribute('src',images[i]);
}