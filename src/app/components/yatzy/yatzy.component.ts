import {Component, computed, inject, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {YatzyScoringService} from "./yatzy-scoring.service";

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
  yatzyService: YatzyScoringService = inject(YatzyScoringService);
  //
  dices$: WritableSignal<Dices> = signal(new Dices(1, 2, 3, 4,3));
  //
  ones$: Signal<number> = computed(() => this.yatzyService.calculateOnesScore(this.dices$()));
  twos$: Signal<number> = computed(() => this.yatzyService.calculateTwosScore(this.dices$()));
  threes$: Signal<number> = computed(() => this.yatzyService.calculateThreesScore(this.dices$()));
  fours$: Signal<number> = computed(() => this.yatzyService.calculateFoursScore(this.dices$()));
  fives$: Signal<number> = computed(() => this.yatzyService.calculateFivesScore(this.dices$()));
  sixes$: Signal<number> = computed(() => this.yatzyService.calculateSixesScore(this.dices$()));
  //
  pairs$: Signal<number> = computed(() => this.yatzyService.calculateScoreForSameKind(this.dices$()));
  twoPairs$: Signal<number> = computed(() => this.yatzyService.calculateScoreForSameKind(this.dices$()));
  threeOfAKind$: Signal<number> = computed(() => this.yatzyService.calculateThreeOfAKindScore(this.dices$()));
  fourOfAKind$: Signal<number> = computed(() => this.yatzyService.calculateFourOfAKindScore(this.dices$()));
  //
  smallStraight$: Signal<number> = computed(() => this.yatzyService.getStraightScore(this.dices$()));
  largeStraight$: Signal<number> = computed(() => this.yatzyService.getStraightScore(this.dices$()));
  //
  fullHouse$: Signal<number> = computed(() => this.yatzyService.getFullHouseScore(this.dices$()));


  constructor() {
  }

  ngOnInit(): void {
  }

  launchDices() {
    const possibleValues: DiceFace[] = [1, 2, 3, 4, 5, 6];
    const dice1: DiceFace = possibleValues[(Math.floor(Math.random() * possibleValues.length))];
    const dice2:DiceFace = possibleValues[(Math.floor(Math.random() * possibleValues.length))];
    const dice3: DiceFace = possibleValues[(Math.floor(Math.random() * possibleValues.length))];
    const dice4:DiceFace = possibleValues[(Math.floor(Math.random() * possibleValues.length))];
    const dice5: DiceFace = possibleValues[(Math.floor(Math.random() * possibleValues.length))];
    this.dices$.set(new Dices(dice1, dice2, dice3,dice4, dice5));
  }
}
