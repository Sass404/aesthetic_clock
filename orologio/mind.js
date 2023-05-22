function stampa_ora(){
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    document.getElementById("orario").innerHTML = hours + ": " + minutes + ": " + seconds;     
}

function stampa_data(){
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth()+1;
    const day = time.getDate();
    document.getElementById("data").innerHTML = year + ": " + month + ": " + day;
}

window.setInterval(stampa_ora, 1);
stampa_data();