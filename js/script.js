function mostrar(){
    if(firstext.value !== ""){
        imagen.style.display = "none"
        mensajeImagen.style.display = "none"
        encriptado.style.display = "block"
    }
}

function noMostrar(){
    if(firstext.value === ""){
        imagen.style.display = "block"
        mensajeImagen.style.display = "block"
        encriptado.style.display = "none"
        encriptado.innerHTML = ""
    }
}

function encriptar(){
    mostrar()
    //Intento solucion 1
    /* for(i = 0; i < firstext.value.length; i++){
        if(firstext.value[i] === "e"){
            encriptado.innerHTML = encriptado.value + firstext.value[i].replace("e","enter")
        }else if(firstext.value[i] === "i"){  
            encriptado.innerHTML = encriptado.value + firstext.value[i].replace("i","imes")
        }else if(firstext.value[i] === "a"){
            encriptado.innerHTML = encriptado.value + firstext.value[i].replace("a","ai")
        }else if(firstext.value[i] === "o"){
            encriptado.innerHTML = encriptado.value + firstext.value[i].replace("o","ober")
        }else if(firstext.value[i] === "u"){
            encriptado.innerHTML = encriptado.value + firstext.value[i].replace("u","ufat")
        }else{
            encriptado.innerHTML = encriptado.value + firstext.value[i]
        }
    //Intentosolucion2
        if(firstext.value[i] === "e"){
            encriptado.innerHTML = encriptado.value + "enter"
        }else if(firstext.value[i] === "i"){
            encriptado.innerHTML = encriptado.value + "imes"
        }else if(firstext.value[i] === "a"){
            encriptado.innerHTML = encriptado.value + "ai"
        }else if(firstext.value[i] === "o"){
            encriptado.innerHTML = encriptado.value + "ober"
        }else if(firstext.value[i] === "u"){
            encriptado.innerHTML = encriptado.value + "ufat"
        }else{
            encriptado.innerHTML = encriptado.value + firstext.value[i]
        }
        Intento solucion 3
        if(firstext.value[i] === "e"){
            texto.push("enter")
            encriptado.innerHTML = encriptado.value + texto[i]
        }else if(firstext.value[i] === "i"){
            texto.push("imes")
            encriptado.innerHTML = encriptado.value + texto[i]
        }else if(firstext.value[i] === "a"){
            texto.push("ai")
            encriptado.innerHTML = encriptado.value + texto[i]
        }else if(firstext.value[i] === "o"){
            texto.push("ober")
            encriptado.innerHTML = encriptado.value + texto[i]
        }else if(firstext.value[i] === "u"){
            texto.push("ufat")
            encriptado.innerHTML = encriptado.value + texto[i]
        }else{
            texto.push(firstext.value[i])
            encriptado.innerHTML = encriptado.value + texto[i]
        }
    } */
    //Solucion con el metodo replace() y expresiones regulares
    let letraE = /e/ig
    let letraI = /i/ig
    let letraA = /a/ig
    let letraO = /o/ig
    let letraU = /u/ig

    encriptado.innerHTML = firstext.value.replace(letraE,"enter").replace(letraI,"imes").replace(letraA,"ai").replace(letraO,"ober").replace(letraU,"ufat")
}
function desencriptar(){
    mostrar()
    let pEnter = /enter/ig
    let pImes = /imes/ig
    let pAi = /ai/ig
    let pOber = /ober/ig
    let pUfat = /ufat/ig

    encriptado.innerHTML = firstext.value.replace(pEnter,"e").replace(pImes,"i").replace(pAi,"a").replace(pOber,"o").replace(pUfat,"u")
}

function copiarTexto(){
    navigator.clipboard.writeText(encriptado.textContent)
}

let firstext = document.getElementById("area-texto")
firstext.addEventListener("input",noMostrar)

let encriptado = document.getElementById("parrafo-encriptado")

let botonEncriptar = document.getElementById("boton-encriptar")
botonEncriptar.addEventListener("click",encriptar)

let botonDesencriptar = document.getElementById("boton-desencriptar")
botonDesencriptar.addEventListener("click",desencriptar)

let botonCopiar = document.querySelector(".copiar")
botonCopiar.addEventListener("click",copiarTexto)

let imagen = document.querySelector(".envoltorio-imagen")
let mensajeImagen = document.querySelector(".mensaje-imagen")

let texto = []

