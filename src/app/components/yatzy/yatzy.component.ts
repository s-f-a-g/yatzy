import {Component, OnInit, signal, WritableSignal} from '@angular/core';

export type DiceFace = 1|2|3|4|5|6;
export class Dices {
  constructor(public dice1: DiceFace, public dice2 : DiceFace, public dice3: DiceFace, public dice4: DiceFace, public dice5: DiceFace) {}
}

@Component({
  selector: 'app-yatzy',
  standalone: true,
  imports: [],
  templateUrl: './yatzy.component.html',
  styleUrl: './yatzy.component.scss'
})
export class YatzyComponent implements OnInit {
  dices: Dices = new Dices( 2, 3, 4, 5, 1);
  dices$: WritableSignal<Dices> = signal(new Dices(1, 2, 3, 4,3));

  constructor() {
  }

  ngOnInit(): void {
    // this.dices = new Dices( 2, 3,4, 5,1);
  }

  static chance(dices: Dices): number {
    let face : keyof typeof dices;
    let total = 0;
    for (face in dices) {
      total+= dices[face];
    }
    return total;
  }

  static sumGivenFace(dices: Dices, diceFace: DiceFace): number {
    let face : keyof typeof dices;
    let sum = 0;
    for (face in dices) {
      if (dices[face] == diceFace) {
        sum+=diceFace;
      }
    }
    return sum;
  }

  static ones(dices: Dices): number {
    return YatzyComponent.sumGivenFace(dices, 1);
  }

  static twos(dices: Dices): number {
    return YatzyComponent.sumGivenFace(dices, 2);
  }

  static threes(dices: Dices): number {
    return YatzyComponent.sumGivenFace(dices, 3);
  }

  static fours(dices: Dices): number {
    return YatzyComponent.sumGivenFace(dices, 4);
  }

  static fives(dices: Dices): number {
    return YatzyComponent.sumGivenFace(dices, 5);
  }

  static sixes(dices: Dices): number {
    return YatzyComponent.sumGivenFace(dices, 6);
  }

  static yatzy(dices: Dices): number {
    let face : keyof typeof dices;
    let reference= dices.dice1;
    let sameFacesCounter: number = 0;
    for (face in dices) {
      if (dices[face] !== reference){
        sameFacesCounter++;
      }
    }
    return sameFacesCounter > 0 ? 0 : 50;
  }

  static getScoreForSameKind(dices: Dices): number {
    let result: {1: number, 2: number, 3: number, 4:number, 5: number, 6: number } = {1: 0, 2:0, 3:0, 4:0, 5:0, 6:0};
    for (const value of Object.values(dices)){
      // @ts-ignore
      result[value]++;
    }
    let score: number = 0;
    for (const [key, value] of Object.entries(result)) {
      const isPair = value === 2;
      const isThreeOfAKind = value === 3;
      const isFourOfAKind = value === 4;
      if (isPair){
        score+= parseInt(key) * 2
      }

      if (isThreeOfAKind){
        score = value * 3
      }

      if (isFourOfAKind){
        score = value * 4
      }
    }
    return score;
  }

  static smallStraight(dices: Dices): number {
    let score = 0;

    let result: {1: number, 2: number, 3: number, 4:number, 5: number, 6: number } = {1: 0, 2:0, 3:0, 4:0, 5:0, 6:0};
    let face : keyof typeof dices;
    for (face in dices) {
      result[dices[face]]++;
    }
    const isSmallStraight = result[1] === 1 && result[2] === 1 && result[3] === 1 && result[4] === 1 && result[5] === 1;
    const isLargeStraight = result[2] === 1 && result[3] === 1 && result[4] === 1 && result[5] === 1 && result[6] === 1;

    if (isSmallStraight) { score = 15; }
    if (isLargeStraight){  score = 20; }
    return score;
  }

  static fullHouse(dices: Dices): number {
      let result: {1: number, 2: number, 3: number, 4:number, 5: number, 6: number } = {1: 0, 2:0, 3:0, 4:0, 5:0, 6:0};
      for (const value of Object.values(dices)){
        // @ts-ignore
        result[value]++
      }
      let score: number = 0;
      let hasPair = 0;
      let hasThreeOfAKind = 0;
      for (const value of Object.values(result)) {
        if (value === 2) {
          hasPair++
        }

        if (value === 3) {
          hasThreeOfAKind++;
        }
      }
      const isFullHouse: boolean = hasPair >0 && hasThreeOfAKind > 0;
      if (isFullHouse) {
        score = 30;
      }
    return score;
  }

  launchDices() {
    const possibleValues: DiceFace[] = [1, 2, 3, 4, 5, 6];
    const dice1: DiceFace = possibleValues[(Math.floor(Math.random() * possibleValues.length))];
    const dice2:DiceFace = possibleValues[(Math.floor(Math.random() * possibleValues.length))];
    const dice3: DiceFace = possibleValues[(Math.floor(Math.random() * possibleValues.length))];
    const dice4:DiceFace = possibleValues[(Math.floor(Math.random() * possibleValues.length))];
    const dice5: DiceFace = possibleValues[(Math.floor(Math.random() * possibleValues.length))];
    this.dices = new Dices(dice1, dice2, dice3,dice4, dice5);
    this.dices$.set(new Dices(dice1, dice2, dice3,dice4, dice5));
  }
}
