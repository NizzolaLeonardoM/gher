var uid = localStorage.getItem("UID");
var Saldo = localStorage.getItem("saldo");
slot = new Array();
var sp = 0;
var playing = 0;
var autoroll = 0;
var dl = 50;
var puntata = 0;
var vincita = 0;
var bonusgher = 1;
var ricavo = 0;
var controllo,displayid;

document.getElementById("uid").innerHTML = uid;

for (var i = 0; i < 15; i++) {
    slot[i] = 1;
    document.getElementById(i + 1).innerHTML = "<img src=\"images/slot/" + slot[i] + ".png\" class=\"image\">";
}

function autospin(){
    if(autoroll == 0){
        document.getElementById("autospin").style = "color: red";
        autoroll = 1;
        spin();
        RollInterval = setInterval(spinautoclick, 4000);
    }else{
        document.getElementById("autospin").style = "color: gold";
        autoroll = 0;
        clearInterval(RollInterval);
    }
}

function spinautoclick(){
    spin();
}

function spin() {
    if (playing==0) {
        puntata = document.getElementById("puntata").value;
        puntata = Math.round(puntata * 100) / 100;
        if (puntata <= Saldo && puntata > 0) {
            Saldo = Saldo - puntata;
            Saldo = Math.round(Saldo * 100) / 100;
            localStorage.setItem("saldo", Saldo);
            document.getElementById("saldo").innerHTML = Saldo;
            document.getElementById("puntatarep").innerHTML = "Puntata: " + puntata + "$ ";
            document.getElementById("vincitarep").innerHTML = "";
            document.getElementById("display1").style = "background-color: white";
            document.getElementById("display2").style = "background-color: white";
            document.getElementById("display3").style = "background-color: white";
            document.getElementById("bonusghertest").innerHTML = "";
            document.getElementById("bonusghermolt").innerHTML = "";
            sp = 0;
            playing = 1;
            myInterval = setInterval(spinny, dl);
        } else if (puntata > Saldo) {
            document.getElementById("puntatarep").innerHTML = "Puntata superiore al saldo.";
            document.getElementById("vincitarep").innerHTML = "";
        } else {
            document.getElementById("puntatarep").innerHTML = "Puntata non valida.";
            document.getElementById("vincitarep").innerHTML = "";
        }

    }
}

function spinny() {
    if (sp < 10) {
        spinnumber(1);
    }
    if (sp < 20) {
        spinnumber(2);
    }
    if (sp < 30) {
        spinnumber(3);
    }
    if (sp < 40) {
        spinnumber(4);
    }
    if (sp < 50) {
        spinnumber(5);
    }
    if (sp == 50) {
        clearInterval(myInterval);
        vittoria();
    }
    sp++;
}

function spinnumber(pos) {
    slot[pos] = Math.floor((Math.random() * 10) + 1);
    document.getElementById(pos).innerHTML = "<img src=\"images/slot/" + slot[pos] + ".png\" class=\"image\">";
    pos += 5;
    slot[pos] = Math.floor((Math.random() * 10) + 1);
    document.getElementById(pos).innerHTML = "<img src=\"images/slot/" + slot[pos] + ".png\" class=\"image\">";
    pos += 5;
    slot[pos] = Math.floor((Math.random() * 10) + 1);
    document.getElementById(pos).innerHTML = "<img src=\"images/slot/" + slot[pos] + ".png\" class=\"image\">";
}

function vittoria() {
    ricavo = 0;
    var moltiplicatore = 0;
    bonusgher = 1;

    premiriga1 = new Array();
    premiriga2 = new Array();
    premiriga3 = new Array();

    for (var v = 1; v < 11; v++) {
        premiriga1[v] = 0;
        premiriga2[v] = 0;
        premiriga3[v] = 0;
    }

    controllo = premiriga1;
    for (var v = 1; v < 6; v++) {
        controllo[slot[v]]++;
    }
    for (var v = 1; v < 6; v++) {
        if (slot[v] == 2) {
            if (controllo[1] >= 1) {
                controllo[1]++;
            } else if (controllo[10] >= 1) {
                controllo[10]++;
            } else if (controllo[4] >= 1) {
                controllo[4]++;
            } else if (controllo[5] >= 1) {
                controllo[5]++;
            } else if (controllo[6] >= 2) {
                controllo[6]++;
            } else if (controllo[7] >= 2) {
                controllo[7]++;
            } else if (controllo[8] >= 2) {
                controllo[8]++;
            } else if (controllo[9] >= 2) {
                controllo[9]++;
            } else if (controllo[3] >= 2) {
                controllo[3]++;
            }
        }
    }

    controllo = premiriga2;
    for (var v = 6; v < 11; v++) {
        controllo[slot[v]]++;
    }
    for (var v = 6; v < 11; v++) {
        if (slot[v] == 2) {
            if (controllo[1] >= 1) {
                controllo[1]++;
            } else if (controllo[10] >= 1) {
                controllo[10]++;
            } else if (controllo[4] >= 1) {
                controllo[4]++;
            } else if (controllo[5] >= 1) {
                controllo[5]++;
            } else if (controllo[6] >= 2) {
                controllo[6]++;
            } else if (controllo[7] >= 2) {
                controllo[7]++;
            } else if (controllo[8] >= 2) {
                controllo[8]++;
            } else if (controllo[9] >= 2) {
                controllo[9]++;
            } else if (controllo[3] >= 2) {
                controllo[3]++;
            }
        }
    }

    controllo = premiriga3;
    for (var v = 11; v < 16; v++) {
        controllo[slot[v]]++;
    }
    for (var v = 11; v < 16; v++) {
        if (slot[v] == 2) {
            if (controllo[1] >= 1) {
                controllo[1]++;
            } else if (controllo[10] >= 1) {
                controllo[10]++;
            } else if (controllo[4] >= 1) {
                controllo[4]++;
            } else if (controllo[5] >= 1) {
                controllo[5]++;
            } else if (controllo[6] >= 2) {
                controllo[6]++;
            } else if (controllo[7] >= 2) {
                controllo[7]++;
            } else if (controllo[8] >= 2) {
                controllo[8]++;
            } else if (controllo[9] >= 2) {
                controllo[9]++;
            } else if (controllo[3] >= 2) {
                controllo[3]++;
            }
        }
    }

    /*for(var v=1;v<11;v++){
    	console.log(v+":"+premiriga2[v]);
    }*/

    controllo = premiriga1;
    displayid = "display1";
    controllodisplay();
    controllo = premiriga2;
    displayid = "display2";
    controllodisplay();
    controllo = premiriga3;
    displayid = "display3";
    controllodisplay();

    if (premiriga1[2] + premiriga2[2] + premiriga3[2] >= 4) {
        document.getElementById("bonusghertest").innerHTML = "BONUSGHER: ";
        document.getElementById("bonusghermolt").innerHTML = ("x2");
        bonusgher = 2;
    }
    calcolo();
}

function controllodisplay(){
    if (controllo[3] >= 3) {
        document.getElementById(displayid).style = "background-color: orange";
    }
    if (controllo[3] == 5) {
        ricavo = ricavo + puntata * 25;
    } else if (controllo[3] == 4) {
        ricavo = ricavo + puntata * 4;
    } else if (controllo[3] == 3) {
        ricavo = ricavo + puntata * 0.5;
    }
    if (controllo[8] >= 3) {
        document.getElementById(displayid).style = "background-color: red";
    }
    if (controllo[8] == 5) {
        ricavo = ricavo + puntata * 25;
    } else if (controllo[8] == 4) {
        ricavo = ricavo + puntata * 4;
    } else if (controllo[8] == 3) {
        ricavo = ricavo + puntata * 0.5;
    }
    if (controllo[9] >= 3) {
        document.getElementById(displayid).style = "background-color: red";
    }
    if (controllo[9] == 5) {
        ricavo = ricavo + puntata * 50;
    } else if (controllo[9] == 4) {
        ricavo = ricavo + puntata * 7;
    } else if (controllo[9] == 3) {
        ricavo = ricavo + puntata * 1;
    }
    if (controllo[6] >= 3) {
        document.getElementById(displayid).style = "background-color: gray";
    }
    if (controllo[6] == 5) {
        ricavo = ricavo + puntata * 50;
    } else if (controllo[6] == 4) {
        ricavo = ricavo + puntata * 7;
    } else if (controllo[6] == 3) {
        ricavo = ricavo + puntata * 1;
    }
    if (controllo[7] >= 3) {
        document.getElementById(displayid).style = "background-color: gray";
    }
    if (controllo[7] == 5) {
        ricavo = ricavo + puntata * 75;
    } else if (controllo[7] == 4) {
        ricavo = ricavo + puntata * 10;
    } else if (controllo[7] == 3) {
        ricavo = ricavo + puntata * 1.5;
    }
    if (controllo[4] >= 3) {
        document.getElementById(displayid).style = "background-color: gold";
    }
    if (controllo[4] == 5) {
        ricavo = ricavo + puntata * 100;
    } else if (controllo[4] == 4) {
        ricavo = ricavo + puntata * 13;
    } else if (controllo[4] == 3) {
        ricavo = ricavo + puntata * 2;
    }
    if (controllo[5] >= 3) {
        document.getElementById(displayid).style = "background-color: gold";
    }
    if (controllo[5] == 5) {
        ricavo = ricavo + puntata * 100;
    } else if (controllo[5] == 4) {
        ricavo = ricavo + puntata * 13;
    } else if (controllo[5] == 3) {
        ricavo = ricavo + puntata * 2;
    }
    if (controllo[1] >= 3) {
        document.getElementById(displayid).style = "background-color: lightblue";
    }
    if (controllo[1] == 5) {
        ricavo = ricavo + puntata * 125;
    } else if (controllo[1] == 4) {
        ricavo = ricavo + puntata * 16;
    } else if (controllo[1] == 3) {
        ricavo = ricavo + puntata * 2.5;
    }
    if (controllo[10] >= 3) {
        document.getElementById(displayid).style = "background-color: lime";
    }
    if (controllo[10] == 5) {
        ricavo = ricavo + puntata * 125;
    } else if (controllo[10] == 4) {
        ricavo = ricavo + puntata * 16;
    } else if (controllo[10] == 3) {
        ricavo = ricavo + puntata * 2.5;
    }
    if (controllo[2] >= 3) {
        document.getElementById(displayid).style = "background-color: blue";
    }
    if (controllo[2] == 5) {
        ricavo = ricavo + puntata * 75;
    } else if (controllo[2] == 4) {
        ricavo = ricavo + puntata * 10;
    } else if (controllo[2] == 3) {
        ricavo = ricavo + puntata * 1.5;
    }
}

function calcolo() {
    ricavo = ricavo / 4;
    ricavo = ricavo * bonusgher;
    ricavo = Math.round(ricavo * 100) / 100;
    if (ricavo > 0) {
        document.getElementById("vincitarep").innerHTML = "Vincita: " + ricavo + "$";
        Saldo = Saldo + ricavo;
    }

    Saldo = Math.round(Saldo * 100) / 100;
    localStorage.setItem("saldo", Saldo);
    document.getElementById("saldo").innerHTML = Saldo;
    playing = 0;
}

localStorage.setItem("saldo", Saldo);
document.getElementById("saldo").innerHTML = Saldo;