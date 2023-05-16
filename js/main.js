/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const footballTeams = [
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
        },{
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
        },{
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
        },{
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
        },{
        nome: 'Catania',
        puntiFatti: 0,
        falliSubiti: 0
        },{
        nome: 'Brivio',
        puntiFatti: 0,
        falliSubiti: 0
        }
];

console.log(...footballTeams);

/* Generazione punteggi random */
footballTeams.forEach(element => {
    thisTeam = element;
    thisTeam.puntiFatti = randomNum(10);
    thisTeam.falliSubiti = randomNum(10);
    
    console.log(thisTeam);
});

/* Nuovo array */
const newTeams = [];

for (let i = 0; i < footballTeams.length; i++) {
    const thisTeam = footballTeams[i];
    const {nome, falliSubiti} = thisTeam;

    newTeams.push(
        {
            nome,
            falliSubiti
        }
    )
}
console.log(newTeams);



function randomNum(max) {
    return Math.floor(Math.random() * max);
}
