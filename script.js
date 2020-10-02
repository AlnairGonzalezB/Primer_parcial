const activarMesa = (numeroMesa, tMesa) =>{
    mesa =document.getElementById(numeroMesa);
    if(mesa.src.match('img/billardOff.jpg')){
        mesa.src = "img/billardOn.jpg"
        timer(tMesa);
    }else{
        mesa.src = "img/billardOff.jpg"
        document.getElementById(tMesa).innerHTML = "Tiempo: ";
    }
}

const timer = (tMesa) =>{
    var n=0;
    var l = document.getElementById(tMesa);
    window.setInterval(function(){
    l.innerHTML = "Tiempo: "+n;
    n++;
    },1000);

}