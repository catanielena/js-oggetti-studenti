// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// *
// * La funzione trasforma la prima lettera di ogni parola in maiuscolo e il resto in minuscolo
// *
function capitalizeWords(str) {
    return str.replace(/(?:^|\s)\S/g, function(txt) {
         return txt.toUpperCase(); 
        }
    );
};
// *
// *
// * 
// *Programma principale
// *
// *
// *
// *
// * btn Aggiungi
// *
var btnAggiungi = document.getElementById("add");
// oggetto studente
var student = {
    'nome': 'Marco',
    'cognome': 'Rossi',
}
// Stampa proprietà oggetto
for(let k in student) {
    console.log(`student > ${k}: ${student[k]}`);
}
// *
// *
// *
// array studenti
var classStudents = [
    {
        'nome': 'Marco',
        'cognome': 'Rossi',
        'età': '20'
    },
    {
        'nome': 'Maddalena',
        'cognome': 'Modonesi',
        'età': '25'
    },
    {
        'nome': 'Giacomo',
        'cognome': 'Farina',
        'età': '18'
    },
    {
        'nome': 'Pierangelo',
        'cognome': 'Filippini',
        'età': '28'
    },
    {
        'nome': 'Angela',
        'cognome': 'Pozzi',
        'età': '32'
    },
    {
        'nome': 'Salvatore',
        'cognome': 'Pasquali',
        'età': '45'
    },
    {
        'nome': 'Vittoria',
        'cognome': 'Scaroni',
        'età': '22'
    }
];
// Stampa proprietà per ogni studente
for(var i = 0; i < classStudents.length; i++) {
    // console.log(classStudents[i]);
    document.getElementById("class").innerHTML += `<li class="name-lastname">${classStudents[i].nome} ${classStudents[i].cognome}</li>`;
    document.getElementsByClassName("name-lastname")[i].innerHTML += `<ul><li class="age">${classStudents[i].età}</li></ul>`;
    // for(var k in classStudents[i]) {
    //     console.log(`student ${i + 1} > ${k}: ${classStudents[i][k]}`);
    // }
}
// *
// *
// *
// * btn aggiungi evento
var addStudent = {};
btnAggiungi.addEventListener("click",
    function() {
        // Nuovo studente nome
        var addStdName = document.getElementById("name").value;
        // Nuovo studente cognome
        var addStdLastname = document.getElementById("last-name").value;
        // Nuovo studente età
        var addStdAge = parseInt(document.getElementById("age").value);
        if(!(isNaN(addStdName)) || !(isNaN(addStdLastname))) {
            document.getElementById("message").innerHTML = "Attenzione! Almeno una delle informazioni inserite non è corretta";
        } else {
            document.getElementById("message").innerHTML = "";
            console.log(addStdName);
            classStudents[classStudents.length]
            addStudent["nome"] = capitalizeWords(addStdName);   
            addStudent["cognome"] = capitalizeWords(addStdLastname);
            addStudent["età"] = addStdAge;
            // Aggiungi
            classStudents.push(addStudent); 
            document.getElementById("class").innerHTML += `<li class="name-lastname">${(classStudents[classStudents.length - 1]).nome} ${(classStudents[classStudents.length - 1]).cognome}</li>`;
            document.getElementsByClassName("name-lastname")[i].innerHTML += `<ul><li class="age">${(classStudents[classStudents.length - 1]).età}</li></ul>`;
            // reset input
            document.getElementById("name").value = "";
            document.getElementById("last-name").value = "";
            document.getElementById("age").value = "";
        }
    }
);
