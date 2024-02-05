/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function () {
    document.getElementsByTagName("h1")[0].innerText = "Titolo della pagina modificato!";
};
changeTitle();

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
    document.getElementsByTagName("h1")[0].className = "myHeading";
};
addClassToTitle();

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {

    const arrayElements = document.querySelectorAll('div > p');

    for (let i = 0; i < arrayElements.length; i++) {
        arrayElements[i].innerText += '***';
    }
};
changePcontent();

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {

    const arrayElements = document.querySelectorAll('div > a');
    for (let i = 0; i < arrayElements.length; i++) {
        arrayElements[i].href = 'https://www.google.com';
    }
};
changeUrls();

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {

    const ulElement = document.getElementById('secondList');

    const newElement = document.createElement('li');
    newElement.textContent = 'nuovo elemento';

    ulElement.appendChild(newElement);
};
addToTheSecond();

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {

    const newElement = document.createElement('p');
    newElement.textContent = 'nuovo paragrafo';
    const divElements = document.getElementsByTagName('div')[0].appendChild(newElement);
};
addParagraph();

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
    document.getElementById('firstList').remove();
};
//hideFirstUl();

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {

    const ulElements = document.getElementsByTagName('ul');

    for (let i = 0; i < ulElements.length; i++) {
        ulElements[i].style.backgroundColor = 'green';
    }
};
paintItGreen();

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {

    const el = document.getElementsByTagName("h1")[0];

    el.addEventListener('click', function () {
        el.textContent = el.textContent.substring(0, el.textContent.length - 1);
    });
};
makeItClickable();

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () {

    const el = document.getElementsByTagName("footer")[0];
    el.addEventListener('click', function () {
        let msg = document.querySelector('h3 > a').href;
        alert(msg);
    });
};
revealFooterLink();

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () {

    let tableContainer = document.getElementById('tableArea');

    let table = document.createElement('table');

    let tr = [];

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    let text1 = document.createTextNode('immagine');
    let text2 = document.createTextNode('nome prodotto');
    let text3 = document.createTextNode('quantità');
    let text4 = document.createTextNode('prezzo');

    for (let i = 0; i < 3; i++) {
        tr[i] = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');

        let text1 = document.createTextNode('immagine');
        let text2 = document.createTextNode('nome prodotto');
        let text3 = document.createTextNode('quantità');
        let text4 = document.createTextNode('prezzo');

        for (let j = 0; j < 3; j++) {

            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);

            tr[i].appendChild(td1);
            tr[i].appendChild(td2);
            tr[i].appendChild(td3);
            tr[i].appendChild(td4);
        }
        table.appendChild(tr[i]);
    }

    tableContainer.appendChild(table);


    a = 0;
};
generateTable();


/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function (row) {

    let table = document.querySelector('table');
    table.appendChild(tr1);
};


//crea riga
let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');
let td4 = document.createElement('td');

let text1 = document.createTextNode('immagine');
let text2 = document.createTextNode('nome prodotto');
let text3 = document.createTextNode('quantità');
let text4 = document.createTextNode('prezzo');

td1.appendChild(text1);
td2.appendChild(text2);
td3.appendChild(text3);
td4.appendChild(text4);

let tr1 = document.createElement('tr');

tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);
tr1.appendChild(td4);
addRow(tr1);

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {

    let table = document.querySelector('table');

    for (let i = 0; i < table.rows.length; i++) {
        for (j = 0; j < table.rows[0].cells.length; i++) {
            //table.rows[i].cells[j].innerText = '';
        }
    }
};
hideAllImages();

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () { };