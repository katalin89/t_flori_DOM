let pagina=document.querySelector('.container');
btnhide=document.querySelector('.btnhide');

show=true;
btnhide.addEventListener("click",()=>{
    if(show==true){
        btnhide.textContent="Show flowers";
        show=false;
    }else{
        btnhide.textContent="Hide list";
        show=true;
    }

    pagina.classList.toggle("dispare");

});


let btnChange=document.querySelector(".modifica");
let buchete=document.querySelector(".buchete");
var inp=document.getElementById('desc');

btnChange.addEventListener("click",()=>{
    buchete.textContent=inp.value ;
    inp.value="";
});

let btnAdd=document.querySelector('.addBuchet');
let adaug=document.querySelector(".adauga");
let newElem=document.querySelector(".enum");

btnAdd.addEventListener("click",()=>{
    const element=document.createElement("p");
    element.textContent=adaug.value;
    newElem.appendChild(element);
    adaug.value="";
})

let btnRemove=document.querySelector('.removeBuchet')

btnRemove.addEventListener("click",()=>{
    let lastChild=newElem.lastChild;
    newElem.removeChild(lastChild);
})