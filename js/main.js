function closentfcn() {
    var container = document.getElementById('ntfcsn');
    container.style.display = 'none';
}

const openmblmenu = document.querySelector("#mobilebtn");
const mmenubar = document.querySelector("#menubar");
const closemmenubar = document.querySelector("#clsmenubtn");

openmblmenu.addEventListener("click", function(){
    console.log("sa")
mmenubar.style.left = "0";
});

closemmenubar.addEventListener("click", function () {
    mmenubar.style.left = "-260px";
});
