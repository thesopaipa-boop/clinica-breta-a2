console.log("holas")
const acercaBackground = document.getElementById("acerca-package");
const acercaBoton = document.getElementById('acerca-de-boton');
const acercaCerrar = document.getElementById("acerca-cerrar");

for (let i = 0; i < 3; i++) {
   this["qna"+i] = document.getElementById("qna"+i);
}
console.log(qna2)

acercaBoton.addEventListener("click",()=>{
	acercaBackground.classList.add("mostrar");
});

acercaCerrar.addEventListener("click",()=>{
	acercaBackground.classList.remove("mostrar");
});
acercaBackground.addEventListener("click",()=>{
	acercaBackground.classList.remove("mostrar");
});


