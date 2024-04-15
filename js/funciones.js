document.addEventListener("DOMContentLoaded", function () {
    //ESCENARIOS
    const escInicio = document.querySelector(".inicio");
    const escUsEl = document.querySelector(".usuario_elige");
    const escCompEl = document.querySelector(".computador_elige");
    const escResultado = document.querySelector(".resultado");
    //ELEMENTOS DEL DOM
    const btnInicio = document.querySelector(".btn_inicio");
    const btnPiedra = document.querySelector(".btn_Piedra");
    const btnPapel = document.querySelector(".btn_Papel");
    const btnTijera = document.querySelector(".btn_Tijera");
    const txtelecComp = document.querySelector(".eleccion_computador");
    const btnContinuar = document.querySelector(".btn_continuar");
    const txtResultado = document.querySelector(".resultado h1");
    const txtResultadoUsuario=document.querySelector(".resultado .u");
    const txtResultadoCompu = document.querySelector(".resultado .c");
    const btnReinicio=document.querySelector(".btn_volver");
    const animComputadorElige= document.querySelector(".computador_elige .elecComp div");
    //const animCompFin= document.querySelector(".resultado .resF .finComp div");
    const animUsFin= document.querySelector(".resultado .resF .finUs div")
    //LOGICA
    let usuarioElige;
    let computadorElige;
    //INICIALIZACION
    escUsEl.style.display = "none";
    escCompEl.style.display = "none";
    escResultado.style.display = "none";
    //CUANDO SE PRESIONA EL BOTON INICIO
    btnInicio.addEventListener("click", function () {
        escUsEl.style.display = "block";
        escInicio.style.display = "none";
    });
    function eleccionUsuario(seleccion) {
        if (seleccion == "piedra") {
            return seleccion;
        }
        else if (seleccion == "papel") {
            return seleccion;
        }
        else if (seleccion == "tijera") {
            return seleccion;
        }
        animUsFin.classList.add(`animacion_${seleccion}`)
    }
    function eleccionComputador() {
        let elecC = Math.random();
        if (elecC < 0.33333333) {
            elecC = "piedra";
        }
        else if (elecC < 0.6666666) {
            elecC = "papel";
        }
        else {
            elecC = "tijera";
        }
        animComputadorElige.classList.add(`animacion_${elecC}`);
        //animCompFin.classList.add(`animacion_${elecC}`);
        return elecC;
        
    }
    function resultado(u, c) {
        if ((u == "piedra" && c == "piedra") || (u == "papel" && c == "papel") || (u == "tijera" && c == "tijera")) {
            txtResultado.innerHTML = `Es un empate`;
            txtResultadoUsuario.innerHTML=`${u} es igual a`;
            txtResultadoCompu.innerHTML=`${c}`;
        }
        else if ((u == "piedra" && c == "tijera") || (u == "tijera" && c == "papel")||(u=="papel"&& c=="piedra")) {
            txtResultado.innerHTML = `El usuario gana`;
            txtResultadoUsuario.innerHTML=`${u} derrota a`;
            txtResultadoCompu.innerHTML=`${c}`;
        }
        else if ((u == "piedra" && c == "papel") || (u == "papel" && c == "tijera")||(u=="tijera" && c=="piedra")) {
            txtResultado.innerHTML = `El usuario pierde`;
            txtResultadoUsuario.innerHTML=` ${u} pierde contra`;
            txtResultadoCompu.innerHTML=` ${c}`;
        }
    }
    btnPiedra.addEventListener("click", function () {
        usuarioElige = eleccionUsuario("piedra");
        if (escUsEl.style.display = "flex") {
            escUsEl.style.display = "none";
            escCompEl.style.display = "flex";
           }
            computadorElige = eleccionComputador();
            txtelecComp.innerHTML = computadorElige;
    })
    btnPapel.addEventListener("click", function () {
        usuarioElige = eleccionUsuario("papel");
        if (escUsEl.style.display = "flex") {
            escUsEl.style.display = "none";
            escCompEl.style.display = "flex";
            computadorElige = eleccionComputador();
            txtelecComp.innerHTML = computadorElige;
        }
    })
    btnTijera.addEventListener("click", function () {
        usuarioElige = eleccionUsuario("tijera");
        if (escUsEl.style.display = "flex") {
            escUsEl.style.display = "none";
            escCompEl.style.display = "flex";
            computadorElige = eleccionComputador();
            txtelecComp.innerHTML = computadorElige;
        }
    })
    btnContinuar.addEventListener("click", function () {
        if (escCompEl.style.display="flex"){
            escCompEl.style.display="none";
            escResultado.style.display="flex";
            resultado(usuarioElige,computadorElige);
            
        }
    })
    btnReinicio.addEventListener("click",function(){
        if(escResultado.style.display="flex"){
            escResultado.style.display="none";
            escInicio.style.display="flex";
        }
        animComputadorElige.removeAttribute("class");// elimina los datos previos guardados 
    })
});

