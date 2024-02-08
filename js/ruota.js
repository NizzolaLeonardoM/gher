var Saldo = localStorage.getItem("saldo");
var uid = localStorage.getItem("UID");
var random = 0;
var rotazione = 270;
var puntata1 = 0,
    puntata2, puntata5, puntata10, puntatacrazy, puntataflip, puntatahunt, ricavo = 0;
var sp = 0;
var playing = 0,
	playing2 = 0;
var tempo = 0;
var bonusnome, bonusmolt;
var flip1 = 0,
    flip2 = 0;
const premi = [
    "null",
    10,
    1,
    2,
    1,
    "gherflip",
    2,
    1,
    5,
    2,
    1,
    "crazygher",
    1,
    2,
    10,
    1,
    2,
    "gherflip",
    2,
    1,
    5,
    2,
    1,
    "gherhunt",
    1,
    5,
    1,
    10,
    1,
    "gherflip",
    1,
    2,
    1,
    5,
    2,
    "gherflip",
    1,
    5,
    1,
    2,
    1,
    "gherhunt",
    2
];

const bonus = [
    1,
    2, 
    5, 
    10, 
    "crazygher", "crazygher", "crazygher",
    "gherflip", "gherflip", "gherflip", 
    "gherhunt", "gherhunt", "gherhunt"
];

const bonusnum = [
    2, 2, 2, 2, 2, 2,
    3, 3, 3, 3, 3,
    4, 4, 4,
    5, 5, 5, 5,
    7, 7, 7,
    10, 10,
    15,
    25,
];

const premicrazy = [
    "null", 25, 5, 5, 10, 10, 5, 5, 50, 50, 5, 5, 10, 10, 5, 5, 25, 25, 5, 5, 10, 10, 5, 5, 15, 15, 5, 5, 10, 10, 5, 5, 25
];

function spin() {
    if (playing==0) {
        puntata1 = document.getElementById("puntata1").value;
        puntata2 = document.getElementById("puntata2").value;
        puntata5 = document.getElementById("puntata5").value;
        puntata10 = document.getElementById("puntata10").value;
        puntatacrazy = document.getElementById("puntatacrazy").value;
        puntataflip = document.getElementById("puntataflip").value;
        puntatahunt = document.getElementById("puntatahunt").value;
        puntata1 = Math.round(puntata1 * 100) / 100;
        puntata2 = Math.round(puntata2 * 100) / 100;
        puntata5 = Math.round(puntata5 * 100) / 100;
        puntata10 = Math.round(puntata10 * 100) / 100;
        puntatacrazy = Math.round(puntatacrazy * 100) / 100;
        puntataflip = Math.round(puntataflip * 100) / 100;
        puntatahunt = Math.round(puntatahunt * 100) / 100;
        var puntatatotale = puntata1 + puntata2 + puntata5 + puntata10 + puntatacrazy + puntataflip + puntatahunt;

        puntatatotale = Math.round(puntatatotale * 100) / 100;

        if (puntatatotale <= Saldo && puntata1 >= 0 && puntata2 >= 0 && puntata5 >= 0 && puntata10 >= 0 && puntatacrazy >= 0 && puntataflip >= 0 && puntatahunt >= 0) {
            sp = 0;
            tempo = 0;
            random = (Math.floor((Math.random() * 70) + 70)) / 10;
            bonusnome = Math.floor(Math.random() * 13);
            bonusnome = bonus[bonusnome];
            bonusmolt = Math.floor(Math.random() * 25);
            bonusmolt = bonusnum[bonusmolt];
            document.getElementById("report2").innerHTML = (bonusnome + ": x" + bonusmolt);
            document.getElementById("puntatarep").innerHTML = "Puntata: " + puntatatotale + "$ ";
            document.getElementById("vincitarep").innerHTML = "";
            Saldo = Saldo - puntatatotale;
            Saldo = Math.round(Saldo * 100) / 100;
            localStorage.setItem("saldo", Saldo);
            document.getElementById("saldo").innerHTML = Saldo;
			playing = 1;
            myInterval = setInterval(spinny, 50);

        } else if (puntatatotale > Saldo && puntata1 >= 0 && puntata2 >= 0 && puntata5 >= 0 && puntata10 >= 0 && puntatacrazy >= 0 && puntataflip >= 0 && puntatahunt >= 0) {
            document.getElementById("puntatarep").innerHTML = "Puntata superiore al saldo.";
            document.getElementById("vincitarep").innerHTML = "";
        } else {
            document.getElementById("puntatarep").innerHTML = "Puntata non valida.";
            document.getElementById("vincitarep").innerHTML = "";
        }
    }
}

function spinny() {
    if (rotazione + (((random - (sp / 20)) * 14) / random) > 360) {
        var resto = 360 - rotazione;
        rotazione = (((random - (sp / 20)) * 14) / random) - resto;
    } else {
        rotazione = rotazione + (((random - (sp / 20)) * 14) / random);
    }
    document.getElementById("ruota").style.transform = "rotate(" + rotazione + "deg)";
    if (sp / 20 == random) {
        clearInterval(myInterval);
        vittoria();
    } else {
        sp++;
    }
}

function vittoria() {
    var premio, elemento, rotinv, molt = 1;
    ricavo = 0;
    rotinv = 360 - rotazione;
    elemento = rotinv / (360 / 42) + 1;
    elemento = Math.trunc(elemento);
    premio = premi[elemento];
    if (premio == "crazygher") {
        document.getElementById("game").innerHTML = ('<img src="images/ruota/freccia.png" class="freccia"><div></div><img src="images/ruota/crazygher.png" class="ruota" id="ruota" onclick="spincrazy();">');
        sp = 0;
        crazygherruota();
    } else if (premio == "gherflip") {
        document.getElementById("game").innerHTML = ("<div class=\"flip\"><div class=\"gherflipmolt\"><span class=\"molt1\" id=\"molt1\"></span><span class=\"molt2\" id=\"molt2\"></span></div><div class=\"bottoni\"><button class=\"blu\" id=\"blu\" onclick=\"flipbut(0);\"></button><button class=\"rosso\" id=\"rosso\" onclick=\"flipbut(1);\"></button></div></div>");
        flip();
    } else if (premio == "gherhunt") {
        document.getElementById("game").innerHTML = ('<div class=\"hunt\"><div class="riga"><button class="icona" id="icona1" onclick="hunt(1);"></button><button class="icona" id="icona2" onclick="hunt(2);"></button><button class="icona" id="icona3" onclick="hunt(3);"></button><button class="icona" id="icona4" onclick="hunt(4);"></button><button class="icona" id="icona5" onclick="hunt(5);"></button></div><div class="riga"><button class="icona" id="icona6" onclick="hunt(6);"></button><button class="icona" id="icona7" onclick="hunt(7);"></button><button class="icona" id="icona8" onclick="hunt(8);"></button><button class="icona" id="icona9" onclick="hunt(9);"></button><button class="icona" id="icona10" onclick="hunt(10);"></button></div><div class="riga"><button class="icona" id="icona11" onclick="hunt(11);"></button><button class="icona" id="icona12" onclick="hunt(12);"></button><button class="icona" id="icona13" onclick="hunt(13);"></button><button class="icona" id="icona14" onclick="hunt(14);"></button><button class="icona" id="icona15" onclick="hunt(15);"></button></div><div class="riga"><button class="icona" id="icona16" onclick="hunt(16);"></button><button class="icona" id="icona17" onclick="hunt(17);"></button><button class="icona" id="icona18" onclick="hunt(18);"></button><button class="icona" id="icona19" onclick="hunt(19);"></button><button class="icona" id="icona20" onclick="hunt(20);"></button></div><div class="riga"><button class="icona" id="icona21" onclick="hunt(21);"></button><button class="icona" id="icona22" onclick="hunt(22);"></button><button class="icona" id="icona23" onclick="hunt(23);"></button><button class="icona" id="icona24" onclick="hunt(24);"></button><button class="icona" id="icona25" onclick="hunt(25);"></button></div></div>');
    } else if (premio == 1) {
        if (bonusnome == 1) {
            molt = bonusmolt;
        }
        ricavo = puntata1 + puntata1 * molt;
        premionum();
    } else if (premio == 2) {
        if (bonusnome == 2) {
            molt = bonusmolt;
        }
        ricavo = puntata2 + puntata2 * 2 * molt;
        premionum();
    } else if (premio == 5) {
        if (bonusnome == 5) {
            molt = bonusmolt;
        }
        ricavo = puntata5 + puntata5 * 5 * molt;
        premionum();
    } else if (premio == 10) {
        if (bonusnome == 10) {
            molt = bonusmolt;
        }
        ricavo = puntata10 + puntata10 * 10 * molt;
        premionum();
    }
}

function flip() {
    sp = 0;
    myInterval2 = setInterval(flippy, 50);
}

function flippy() {
    if (sp == 40) {
        clearInterval(myInterval2);
        sp = 0;
    } else {
        flip1 = Math.floor((Math.random() * 4) + 2);
        flip2 = Math.floor((Math.random() * 16) + 5);
        document.getElementById("molt1").innerHTML = ("x" + flip1);
        document.getElementById("molt2").innerHTML = ("x" + flip2);
        sp++;
    }
}

function flipbut(press) {
    molt = 1;
    if (sp == 0) {
        var big = Math.floor(Math.random() * 2);
        if (big == 0) {
            document.getElementById("molt1").style = "color: blue;";
            document.getElementById("molt2").style = "color: red;";
        } else {
            document.getElementById("molt2").style = "color: blue;";
            document.getElementById("molt1").style = "color: red;";
        }
        if (bonusnome == "gherflip") {
            molt = bonusmolt;
        }
        if (press == 0) {
            if (big == 0) {
                ricavo = puntataflip + puntataflip * flip1 * molt;
            } else {
                ricavo = puntataflip + puntataflip * flip2 * molt;
            }
        } else {
            if (big == 0) {
                ricavo = puntataflip + puntataflip * flip2 * molt;
            } else {
                ricavo = puntataflip + puntataflip * flip1 * molt;
            }
        }
        setTimeout(flippremi, 2000);
    }
}

function flippremi() {
    document.getElementById("game").innerHTML = ("<img src=\"images/ruota/freccia.png\" class=\"freccia\"><div></div><img src=\"images/ruota/ruota.png\" class=\"ruota\" id=\"ruota\" onclick=\"spin();\">");
    document.getElementById("ruota").style.transform = "rotate(" + rotazione + "deg)";
    premionum();
}

function hunt(num) {
    molt = 1;
    voti = new Array();
    const votiprob = [
        3, 3,
        4, 4, 4, 4, 4,
        5, 5, 5, 5, 5, 5,
        6, 6, 6, 6, 6,
        7, 7, 7, 7,
        8, 8,
        9, 9,
        10, 10,
        11,
        15,
        20,
        25,
        50,
    ]
    num--;
    for (var i = 0; i < 25; i++) {
        voti[i] = votiprob[Math.floor(Math.random() * 33)];
        if (voti[i] >= 6) {
            document.getElementById("icona" + (i + 1)).style = ("background-color: green;");
        } else if (voti[i] == 5) {
            document.getElementById("icona" + (i + 1)).style = ("background-color: orange;");
        } else {
            document.getElementById("icona" + (i + 1)).style = ("background-color: red;");
        }
        document.getElementById("icona" + (i + 1)).innerHTML = voti[i];
    }
    if (bonusnome == "gherhunt") {
        molt = bonusmolt;
    }
    ricavo = puntatahunt + puntatahunt * voti[num] * molt;
    setTimeout(flippremi, 2000);
}

function crazygherruota() {
    rotazione = 270;
    document.getElementById("ruota").style.transform = "rotate(" + 270 + "deg)";
}

function spincrazy() {
    if (playing2 == 0) {
        random = (Math.floor((Math.random() * 70) + 70)) / 10;
		playing2 = 1;
        myInterval = setInterval(crazyspinny, 50);
    }
}

function crazyspinny() {
    if (rotazione + (((random - (sp / 20)) * 14) / random) > 360) {
        var resto = 360 - rotazione;
        rotazione = (((random - (sp / 20)) * 14) / random) - resto;
    } else {
        rotazione = rotazione + (((random - (sp / 20)) * 14) / random);
    }
    document.getElementById("ruota").style.transform = "rotate(" + rotazione + "deg)";
    if (sp / 20 == random) {
        clearInterval(myInterval);
        vittoriacrazy();
    } else {
        sp++;
    }
}

function vittoriacrazy() {
    var premio, elemento, rotinv, molt = 1;
    rotinv = 360 - rotazione;
    elemento = rotinv / (360 / 32) + 1;
    elemento = Math.trunc(elemento);
    premio = premicrazy[elemento];
    ricavo = puntatacrazy * premio;
    molt = 1;
    if (bonusnome == "crazygher") {
        molt = bonusmolt;
    }
    ricavo = puntatacrazy + puntatacrazy * premio * molt;
    setTimeout(restorewheel, 2000);
}

function restorewheel() {
    flippremi();
	playing2 = 0;
    rotazione = 270;
    document.getElementById("ruota").style.transform = "rotate(" + 270 + "deg)";
}

function premionum() {
    ricavo = Math.round(ricavo * 100) / 100;
    if (ricavo > 0) {
        document.getElementById("vincitarep").innerHTML = "Vincita: " + ricavo + "$";
        Saldo = Saldo + ricavo;
        Saldo = Math.round(Saldo * 100) / 100;
        localStorage.setItem("saldo", Saldo);
        document.getElementById("saldo").innerHTML = Saldo;
    }
	playing = 0;
}

document.getElementById("ruota").style.transform = "rotate(" + rotazione + "deg)";
localStorage.setItem("saldo", Saldo);
document.getElementById("saldo").innerHTML = Saldo;
document.getElementById("uid").innerHTML = uid;