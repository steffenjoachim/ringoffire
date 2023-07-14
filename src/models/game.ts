export class Game{
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() { 

for (let i = 1; i < 14; i++) {
    this.stack.push('spade_' + i);
    this.stack.push('hearts_' + i);
    this.stack.push('clubs_' + i);
    this.stack.push('diamonds_' + i);
        }
    shuffle(this.stack);
    }
}

function  shuffle(array: any) {
    let currentIndex = array.length, temporyValue, randomIndex;
    // While there remain elements to shuffle.
    while (0 != currentIndex) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
     temporyValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = temporyValue;
    }
  
    return array;
  }
