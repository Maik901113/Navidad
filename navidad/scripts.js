function obtenerTiempofaltante(fechalimite){
    let ahora=new Date();
    tiempoFaltante=(new Date(fechalimite)-ahora+1000)/1000;
    segundosFaltantes =('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    minutosFaltantes =('0'+Math.floor(tiempoFaltante /60 % 60)).slice(-2);
    horasFaltantes =('0'+Math.floor(tiempoFaltante/3600 % 24)).slice(-2);
    diasFaltantes =('0'+Math.floor(tiempoFaltante /(3600*24))).slice(-2);
    return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }

};
//console.log(obtenerTiempofaltante('Dec 25 2023 00:00:00 GMT-0500'));//
function cuentaRegresiva(tiempoFaltante,reloj,mensaje){
    const e =document.getElementById(reloj);

    const tiempoActual=setInterval(()=>{
        let t =obtenerTiempofaltante(tiempoFaltante);
        e.innerHTML =

         ` <div class="mensajeInicial"> Faltan días para navidad </div>
            <div class="cuentaRegresiva">
            
                <div class="dias">${t.diasFaltantes}</div><br>D 
                <div class="horas">${t.horasFaltantes}</div><br>H
                <div class="minutos">${t.minutosFaltantes}</div><br>M
                <div class="segundos">${t.segundosFaltantes}</div><br>S

            </div> `;
        if (t.tiempoFaltante <0) {
            clearInterval(tiempoActual);
            e.innerHTML=mensaje;
            
        } 
    },1000)
};
cuentaRegresiva('nov 16 2023 23:56:00','cuentaRegresiva','¡Feliz Navidad!');


let figura = "off";

let figuraPlay = document.getElementById("figuraPlay")
let figuraStop = document.getElementById("figuraStop")

let audio = new Audio("sound/sonidoBoton.mp3");
let audio2 = new Audio("sound/navidad.mp3");

function play() {
    if (figura == "off") {
        figura = "on"
        figuraPlay.classList.add("on")
        figuraPlay.addEventListener("click", () => {
            audio.play();
            audio2.play();
        })
        console.log("On");
    }
}
function pause() {
    if (figura == "on") {
        figura = "off"
        console.log("Off")
        figuraPlay.classList.remove("on");
        figuraStop.addEventListener("click", () => {
            audio2.pause();
        })
    }
}