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
    },
    {
        'nome': 'Maddalena',
        'cognome': 'Modonesi',
    },
    {
        'nome': 'Giacomo',
        'cognome': 'Farina',
    },
    {
        'nome': 'Pierangelo',
        'cognome': 'Filippini',
    },
    {
        'nome': 'Angela',
        'cognome': 'Pozzi',
    },
    {
        'nome': 'Salvatore',
        'cognome': 'Pasquali',
    },
    {
        'nome': 'Vittoria',
        'cognome': 'Scaroni',
    }
];
// Stampa proprietà per ogni studente
for(var i = 0; i < classStudents.length; i++) {
    // console.log(classStudents[i]);
    for(var k in classStudents[i]) {
        console.log(`student ${i + 1} > ${k}: ${classStudents[i][k]}`);
    }
}
// Nuovo studente
var addStudent = [];
// Nuovo studente nome
var addStdName;
do {
    addStdName = prompt("Inserisci il nome dello studente");
} while (!(isNaN(addStdName)));
console.log(capitalizeWords(addStdName));
addStudent.push(capitalizeWords(addStdName));
// Nuovo studente conome
var addStdLastname;
do {
    addStdLastname = prompt("Inserisci il cognome dello studente");
} while (!(isNaN(addStdLastname)));
console.log(capitalizeWords(addStdLastname));
addStudent.push(capitalizeWords(addStdLastname));
// Nuovo studente età
var addStdAge;
while (isNaN(addStdAge)) {
    addStdAge = parseInt(prompt("Inserisci l'età dello studente"));
}
console.log(addStdAge);
addStudent.push(addStdAge);

classStudents.push(addStudent);
console.log(classStudents[classStudents.length - 1]);
