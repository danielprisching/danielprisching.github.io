
var paalla = true; 
var koko = null;
var laskuri = 0;



 function display() {
    $.getJSON("https://daniel-prisching.firebaseio.com/uutiset.json", function (data) {
        $('#otsikko').html(data[laskuri].otsikko); //jotenkin fadein, ja fade out
        $('#päivämäärä').html(data[laskuri].päivämäärä).fadeIn(1000);
        $('#sisältö').hide().html(data[laskuri].sisältö).fadeIn(1000, "linear");
        koko = data.length - 1;
    });
};

function seuraava() {
    if (laskuri < 2) {
        laskuri += 1;
    } else {
        laskuri = 0;
    }
    localStorage.setItem("muisti", laskuri);
    console.log(localStorage.getItem("muisti"));
    display();
};

function intervalli() {
    setInterval(function () {
        seuraava();
    }, 3000);
};
var autorun = window.setInterval(function(){ seuraava();}, 10000);

	window.onload = function () {
		localStorage.getItem("muisti");
	if (localStorage.getItem("muisti") !== String(NaN)){
		laskuri = parseInt(localStorage.getItem("muisti"));
	}

     display();
     autorun;
};


function taaksepäinfunktio() {
    if(laskuri === 2||laskuri === 1) {
        laskuri -= 1;
    } else {
        laskuri = 2;
    }
    localStorage.setItem("muisti", laskuri);
    display();
};
function eteenpäinfunktio() {
    if(laskuri === 0||laskuri === 1) {
        laskuri += 1;
    } else {
        laskuri = 0;
    }
    localStorage.setItem("muisti", laskuri);
    display();
};
function jatka(){
	if ( paalla) {
	clearInterval(autorun);
	paalla = false;
	$("#jatkakaa").text("Jatka");
} else {
	autorun = window.setInterval(function(){ seuraava();}, 5000);
	paalla = true;
	$("#jatkakaa").text("Pysäytä");
}
};


