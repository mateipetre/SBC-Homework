const x2j = new X2JS();
let data = {};
data = x2j.xml_str2json(xmlText);
// create tabel studenti
const tabelStudenti = document.getElementById("cryptoCoins");
data.proiect.student.forEach( element => insertRow(tabelStudenti, element));

//create tabel cursuri
const tabelCursuri = document.getElementById("investitori");
data.proiect.curs.forEach( element => insertRow(tabelCursuri, element));

//create tabel laboratoare
const tabelLaboratoare = document.getElementById("exchange");
data.proiect.laborator.forEach( element => insertRow(tabelLaboratoare, element));

//create tabel restante
const tabelRestante = document.getElementById("dobanda");
data.proiect.restanta.forEach( element => insertRow(tabelRestante, element));

//create tabel practicanti
//const tabelPracticanti = document.getElementById("practicanti");
//data.proiect.practicant.forEach( element => insertRow(tabelPracticanti, element));

function insertRow(table, obj) {
  const row = table.insertRow(1);
  Object.values(obj).forEach((element, index) => {
   const cell=  row.insertCell(index);
   cell.innerHTML = element;
  });
}

const raspunsDiv = document.getElementById("raspuns");
function cautaDupaNume(){
  const nume_student = document.forms["student"]["nume_student"].value;
  let an_studiu = document.forms["student"]["an_studiu"].value;
  let specializare = document.forms["student"]["specializare"].value;
  const raspuns = `<br>
  <table id="raspunsTabel" class="my-table">
  <tr>
    <th>nume_student</th>
    <th>an_studiu</th>
    <th>specializare</th>
  </tr>
  </table>`;
  raspunsDiv.innerHTML = raspuns;
  const raspunsTabel = document.getElementById("raspunsTabel");
  data.proiect.curs.forEach( element => {
    if (nume_student != element.nume_student || an_studiu != element.an_studiu || specializare != element.specializare) return;
    insertRow(raspunsTabel, element)
  });
  if (raspunsTabel.rows.length === 1) raspunsDiv.innerHTML = " <h2> Nu am gasit pe nimeni! </h2>";
  raspunsDiv.style.visibility = 'visible';

}
// const raspunsDivDobanda = document.getElementById("raspunsDobanda");
// function calculeazaDobanda(){
//   const nrAni = document.forms["dobandaCompusa"]["nrAni"].value;
//   let tipMoneda = document.forms["dobandaCompusa"]["tipMoneda"].value;
//   let raspuns = 1;
//   let apr;
//   data.proiect.dobanda.forEach( element => {
//     if( element.numeMoneda === tipMoneda) {
//       apr = element.APR/100 + 1;
//       return false;
//     }
//   })
//   for( i=0; i<nrAni; i++) raspuns = raspuns * apr;
//   raspunsDivDobanda.innerHTML = `<h2> In decurs de ${nrAni} ani iti multiplicai banii de <mark style=" color: #04AA6D;font-weight: bold; background: white;">${raspuns} </mark> ori. </h2>`;
//   raspunsDivDobanda.style.visibility = 'visible';

// }


// //investitorul zile



// const investitorulZileiNume = document.getElementById("investitorulZilei");
// const investitorulZileiProfit = document.getElementById("maxProfit");

// // calculateMaxProfit 

// const cresteriSiValori = {};
// const profitInvestitori ={};
// const max = { maxPfotit: 0};

// data.proiect.moneda.forEach( element => {
//   cresteriSiValori[element.nume] = { crestere: element.crestere_astazi_usd, valoare: element.valoare_usd };
// });
// data.proiect.detine.forEach( element => {
//   console.log(cresteriSiValori[element.nume]);

//   if(profitInvestitori[element.nume]){
//     profitInvestitori[element.nume] = {profit: element.cantitate * cresteriSiValori[element.moneda].crestere/100 * cresteriSiValori[element.moneda].valoare +  profitInvestitori[element.nume].profit };
//   } else{
//     profitInvestitori[element.nume] = { profit: element.cantitate * cresteriSiValori[element.moneda].crestere/100 * cresteriSiValori[element.moneda].valoare} }
//    if (profitInvestitori[element.nume].profit > max.maxPfotit) {
//      max.maxPfotit = profitInvestitori[element.nume].profit
//     max.nume = element.nume;}
// });
// investitorulZileiNume.innerHTML = max.nume;
// investitorulZileiProfit.innerHTML = `Profit astazi: ${max.maxPfotit} $.`;
