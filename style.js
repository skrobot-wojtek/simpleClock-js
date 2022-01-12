function zegar(){
    let czas = new Date();

    let godzina = czas.getHours();
    if (godzina<10){godzina='0'+godzina};
    let minuta = czas.getMinutes();
    if (minuta<10){minuta='0'+minuta};
    let sekunda = czas.getSeconds();
    if (sekunda<10){sekunda='0'+sekunda};
    let dzien = czas.getDate();
    if (dzien<10){dzien='0'+dzien};
    let miesiac = czas.getMonth()+1;
    if (miesiac<10){miesiac='0'+miesiac}
    let rok = czas.getFullYear();
    
    document.getElementById('clock').innerHTML = godzina+'-'+minuta+'-'+sekunda+' ------ '+dzien+'-'+miesiac+'-'+rok;;
    
    setTimeout(zegar, 1000); // other ver. (zegar(), 1000) or ('zegar()', 1000) are incorrrect
} 
