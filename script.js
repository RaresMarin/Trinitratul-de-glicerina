const v = ['1 (1).png', '1 (2).png', '1 (3).png', '1 (4).png', '1 (5).png'];
const v1 = ['2 (1).png', '2 (2).png', '2 (3).png', '2 (4).png', '2 (5).png'];
function p(n){
        if(window.innerWidth > 1500){
            document.body.style.backgroundImage = "url('" + v1[n] + "')";
                    document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
                document.getElementById("nu").style.display = "block";
        } else {
            document.body.style.backgroundImage = "url('" + v[n] + "')";
                    document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "contain";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
                document.getElementById("nu").style.display = "none";

        }
        document.getElementById("V").style.display = "none";
        document.getElementById("h").style.display = "none";
}
let intrebari = [
  {
    intrebare: "Care este formula chimică a trinitratului de glicerină?",
    variante: ["C3H5(OH)3", "C3H5(NO3)3", "C2H5NO3"],
    corect: 1
  },
  {
    intrebare: "Din ce se obține trinitratul de glicerină?",
    variante: ["Etanol", "Glicerină", "Acetonă"],
    corect: 1
  },
  {
    intrebare: "Ce tip de substanță este trinitratul de glicerină?",
    variante: ["Exploziv", "Bază", "Acid"],
    corect: 0
  },
  {
    intrebare: "Care este starea la temperatura camerei?",
    variante: ["Solid", "Lichid", "Gaz"],
    corect: 1
  },
  {
    intrebare: "De ce este periculos trinitratul de glicerină?",
    variante: ["Instabil și exploziv", "Radioactiv", "Toxic la ingerare"],
    corect: 0
  },
  {
    intrebare: "În ce domeniu se folosește ca exploziv?",
    variante: ["Industria construcțiilor", "Industria textilă", "Medicină"],
    corect: 0
  },
  {
    intrebare: "Cum este folosit în medicină?",
    variante: ["Tratament angină pectorală", "Antibiotic", "Anestezic"],
    corect: 0
  },
  {
    intrebare: "Ce factor poate declanșa explozia?",
    variante: ["Șoc mecanic", "Apă", "Aer"],
    corect: 0
  },
  {
    intrebare: "Ce culoare are trinitratul de glicerină pur?",
    variante: ["Incolor", "Alb", "Verde"],
    corect: 0
  },
  {
    intrebare: "Cine a inventat dinamita folosind trinitratul de glicerină stabilizat?",
    variante: ["Alfred Nobel", "Marie Curie", "Dmitri Mendeleev"],
    corect: 0
  }
];

let index = 0;
let scor = 0;
let inimi = 5;
let ok=0;
function start() {
        if(window.innerWidth > 1500){
                  document.body.style.backgroundImage = "url('s9.png')";
        }
        if(ok==0){
        for(let i = 0; i < 5; i++){
        document.getElementsByClassName("s5")[i].src = "s7.png";
        }
  document.getElementById("Q").style.display = "block";
  document.getElementById("P").style.display = "none";
  afiseazaIntrebare();
        }
    else
    {
        alert("Ai dat testul deja!");
    }
}

function afiseazaIntrebare() {
  let q = intrebari[index];

  document.getElementById("Q1").innerText = q.intrebare;
  document.getElementById("A").innerText = q.variante[0];
  document.getElementById("B").innerText = q.variante[1];
  document.getElementById("C").innerText = q.variante[2];
}

function verifica(raspuns) {
  if (raspuns === intrebari[index].corect) {
    scor++;
  }
  else{
        inimi--;
        document.getElementsByClassName("s5")[inimi].src = "s8.png";
        if(inimi === 0){
  alert("Ai pierdut! Scorul tău final este: " + scor);
  document.getElementById("Q").style.display = "none";
  document.getElementById("P").style.display = "grid";
  document.body.style.backgroundImage = "url('s6.png')";
ok=1;
        }
  }

  index++;

  if (index < intrebari.length) {
    afiseazaIntrebare();
  } else {
    final();
  }
}

function raspuns1() { verifica(0); }
function raspuns2() { verifica(1); }
function raspuns3() { verifica(2); }

function final() {
  document.getElementById("Q1").innerHTML =
    `<h2>Ai obținut ${scor} din ${intrebari.length}!</h2>`;
    document.getElementById("N").style.display = "block";
    document.getElementById("BVA").style.display = "none";
    ok=1;
    
}
function next(){
                if(window.innerWidth > 1500){
  document.body.style.backgroundImage = "url('s6.png')";
                }
  document.getElementById("Q").style.display = "none";
  document.getElementById("P").style.display = "grid";
}