const myButton=document.getElementById("myname");
const Loco=document.querySelector("section");

myButton.addEventListener("click", function() {
  Loco.style.color="red";
}
                         );

const vput=document.getElementById("name");
const bton=document.getElementById("SUBMIT");
const grt=document.getElementById("grttn");

bton.addEventListener("click",function(){
  const tet=vput.value;
  grt.innerHTML='Hello '+ tet;
});

