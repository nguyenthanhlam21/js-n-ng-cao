const game = {
    team1 : ' Bayern Munich',
    team2 : 'Totenham',
    players :[
        [
            'Manuel Neuer',
            'Kim Min Jae',
            'Dayot Upamecano',
            'Alphonso Davies',
            'Eric Dier',
            'Leon Goretzka',
            'Joshua Kimmich',
            'Jamal Musiala',
            'Serge Gnabry',
            'Kingsley Coman',
            'Harry Kane'
        ],
        [
           'Brandon Austin',
           'Micky van de Ven',
           'Cristian Gabriel Romero',
           'Pedro Porro',
           'Ben Davies',
           'James Maddison',
           'Pierre-Emile Hojbjerg',
           'Ivan Perisic',
           'Dejan Kulusevski',
           'Heung-Min Son',
           'Richarlison',
          
        ],
    ],
        score : '4:0',
        scored :['Harry Kane', 'Serge Gnabry', 'Kingsley Coman', 'Joshua Kimmich'],
        date : 'Nov 12, 2024',
        odd :{
            team1: 11.33,
            x: 3.25,
            team2: 6.5
        },
    
}
// CHANLLENGE	#1
// 1
const [player1, player2] = game.players;
console.log(player1, player2);
// 2
const [gk, ...fieldPlayers] =player1;
console.log(gk, ...fieldPlayers);
// 3
const allPlayer = [...player1, ...player2];
console.log(allPlayer);
//4
const player1sFInal = [...player1, 'Thiago', 'Coutinho', 'Mane'];

const {odd: {team1, x: draw , team2}} = game;
console.log(team1,  draw , team2);
// 5
const printGoal = function(...players){
    console.log(players);
    console.log(`${players.length} goals were scored`);
};
// printGoal('Harry Kane', 'Serge Gnabry', 'Kingsley Coman', 'Joshua Kimmich');
// printGoal('Harry Kane', 'Serge Gnabry');
printGoal(...game.scored);
// 6
 team1 < team2 && console.log('team 1 is more likely to win ');
 team1 > team2 && console.log('team 2 is more likely to win ');
//  CHANLLENGE	#2
//1
for (const  [i, player] of game.scored.entries())
 console.log(`Goal ${i+1}: ${player}`);
//2
 const odds = Object.values(game.odd);
 let average = 0;
 for (const odd of odds)
    average += odd;
    
    average /= odds.length;
    console.log(average);

//3
for( const [team, odd] of Object.entries(game.odd)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log (`Odd of ${odd}`)
}