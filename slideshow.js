
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


var processor = {  
  timerCallback: function() {  
    if (this.video.paused || this.video.ended) {  
      return;  
    }  
    this.computeFrame();  
    var self = this;  
    setTimeout(function () {  
      self.timerCallback();  
    }, 16); // roughly 60 frames per second  
  },

  doLoad: function() {
    this.video = document.getElementById("my-video");
    this.c1 = document.getElementById("my-canvas");
    this.ctx1 = this.c1.getContext("2d");
    var self = this;  

    this.video.addEventListener("play", function() {
      self.width = self.video.width;  
      self.height = self.video.height;  
      self.timerCallback();
    }, false);
  },  

  computeFrame: function() {
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    var frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    var l = frame.data.length / 4;  

    for (var i = 0; i < l; i++) {
      var grey = (frame.data[i * 4 + 0] + frame.data[i * 4 + 1] + frame.data[i * 4 + 2]) / 3;

      frame.data[i * 4 + 0] = grey;
      frame.data[i * 4 + 1] = grey;
      frame.data[i * 4 + 2] = grey;
    }
    this.ctx1.putImageData(frame, 0, 0);

    return;
  }
};

