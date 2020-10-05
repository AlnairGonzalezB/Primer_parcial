const activarMesa = (numeroMesa, iMesa, tMesa, cMesa) =>{
    mesa = document.getElementById(numeroMesa);
    if(mesa.src.match('img/billardOff.jpg')){
        mesa.src = "img/billardOn.jpg";
        time(iMesa);
        timer(mesa, tMesa, cMesa);
    }else{
        mesa.src = "img/billardOff.jpg";
    }
}

const time = (iMesa) =>{
    tiempo = new Date();
    hora = tiempo.getHours()
    minuto = tiempo.getMinutes()
    seg = tiempo.getSeconds()
    totHora = hora+" : "+minuto+" : "+seg;
    document.getElementById(iMesa).innerHTML = "Hora inicio: "+totHora;
}

const timer = (numeroMesa, tMesa, cMesa) =>{
    var n = 1;
    var l = document.getElementById(tMesa);
    var intervalo=setInterval(function(){
        l.innerHTML = "Tiempo: "+ n;
        n++;
        if(numeroMesa.src.match('img/billardOff.jpg')){
            tiempo = new Date();
            hora = tiempo.getHours()
            minuto = tiempo.getMinutes()
            seg = tiempo.getSeconds()
            totHora=hora+" : "+minuto+" : "+seg;
            document.getElementById(tMesa).innerHTML="Tiempo: "+totHora;
            check(n,cMesa);
            clearInterval(intervalo);
        }
      },1000);
}

const check = (time, cMesa) =>{
    document.getElementById(cMesa).innerHTML="Costo: "+ ((time*0.0139)-0.0139)+" Pesos";
}