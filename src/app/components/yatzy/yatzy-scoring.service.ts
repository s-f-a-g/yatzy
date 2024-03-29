import { Injectable } from '@angular/core';
import {DiceFace, Dices} from "./yatzy.component";

@Injectable({
  providedIn: 'root'
})
export class YatzyScoringService {

  public calculateChanceScore(dices: Dices): number {
    let face : keyof typeof dices;
    let total = 0;
    for (face in dices) {
      total+= dices[face];
    }
    return total;
  }

  public sumGivenFace(dices: Dices, diceFace: DiceFace): number {
    let face : keyof typeof dices;
    let sum = 0;
    for (face in dices) {
      if (dices[face] == diceFace) {
        sum+=diceFace;
      }
    }
    return sum;
  }

  public calculateOnesScore(dices: Dices): number {
    return this.sumGivenFace(dices, 1);
  }

  public calculateTwosScore(dices: Dices): number {
    return this.sumGivenFace(dices, 2);
  }

  public calculateThreesScore(dices: Dices): number {
    return this.sumGivenFace(dices, 3);
  }

  public calculateFoursScore(dices: Dices): number {
    return this.sumGivenFace(dices, 4);
  }

  public calculateFivesScore(dices: Dices): number {
    return this.sumGivenFace(dices, 5);
  }

  public calculateSixesScore(dices: Dices): number {
    return this.sumGivenFace(dices, 6);
  }

  public getYatzyScore(dices: Dices): number {
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

  public calculateScoreForSameKind(dices: Dices): number {
    let result: {1: number, 2: number, 3: number, 4:number, 5: number, 6: number } = {1: 0, 2:0, 3:0, 4:0, 5:0, 6:0};
    for (const value of Object.values(dices)){
      // @ts-ignore
      result[value]++;
    }
    let score: number = 0;
    for (const [key, value] of Object.entries(result)) {
      const isPair = value === 2;
      if (isPair){
        score+= parseInt(key) * 2
      }
    }
    return score;
  }

  public calculateThreeOfAKindScore(dices: Dices): number {
    let result: {1: number, 2: number, 3: number, 4:number, 5: number, 6: number } = {1: 0, 2:0, 3:0, 4:0, 5:0, 6:0};
    for (const value of Object.values(dices)){
      // @ts-ignore
      result[value]++;
    }
    let score: number = 0;
    for (const [key, value] of Object.entries(result)) {
      const isThreeOfAKind = value === 3;

      if (isThreeOfAKind){
        score = parseInt(key) * 3
      }
    }
    return score;
  }
  public calculateFourOfAKindScore(dices: Dices): number {
    let result: {1: number, 2: number, 3: number, 4:number, 5: number, 6: number } = {1: 0, 2:0, 3:0, 4:0, 5:0, 6:0};
    for (const value of Object.values(dices)){
      // @ts-ignore
      result[value]++;
    }
    let score: number = 0;
    for (const [key, value] of Object.entries(result)) {
      const isFourOfAKind = value === 4;

      if (isFourOfAKind){
        score = parseInt(key) * 4
      }
    }
    return score;
  }

  public getStraightScore(dices: Dices): number {
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

  public getFullHouseScore(dices: Dices): number {
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
}
