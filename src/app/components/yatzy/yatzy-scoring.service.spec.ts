import { TestBed } from '@angular/core/testing';

import { YatzyScoringService } from './yatzy-scoring.service';
import {Dices, YatzyComponent} from "./yatzy.component";

describe('YatzyScoringService', () => {
  let service: YatzyScoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YatzyScoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Chance', () => {
    const dicesSum15: Dices = new Dices(2, 3, 4, 5,  1)
    const dicesSum20: Dices = new Dices(3, 5, 2, 6,  4)
    const expected15 = 15;
    const expected20 = 20
    it('scores sum of all dice', () => {
      expect(service.calculateChanceScore(dicesSum15)).toBe(expected15)
      expect(service.calculateChanceScore(dicesSum20)).toBe(expected20)
    });
  });

  describe('Generic', () => {
    const dicesWithOneValueFound: Dices = new Dices(1, 2, 3, 4, 5)
    const dicesWithTwoValuesFound: Dices = new Dices(1, 1, 2, 4,4)
    const dicesWithThreeValuesFound: Dices = new Dices(1, 6, 6, 2, 6)
    const dicesWithFourValuesFound: Dices = new Dices(2, 3, 2, 2, 2)
    const dicesWithFiveValuesFound: Dices = new Dices(5, 5, 5, 5, 5)
    const dicesWithNoValueFound: Dices = new Dices(1, 3, 3, 5, 6)

    it('score sum of dices based on a given face', () => {
      expect(service.sumGivenFace(dicesWithOneValueFound, 3)).toBe(3);
      expect(service.sumGivenFace(dicesWithTwoValuesFound, 4)).toBe(8);
      expect(service.sumGivenFace(dicesWithThreeValuesFound, 6)).toBe(18);
      expect(service.sumGivenFace(dicesWithFourValuesFound, 2)).toBe(8);
      expect(service.sumGivenFace(dicesWithFiveValuesFound, 5)).toBe(25);
      expect(service.sumGivenFace(dicesWithNoValueFound, 2)).toBe(0);
    });

  });

  describe('Ones', () => {
    const dicesWithOneValueFound: Dices = new Dices(1, 2, 3, 4, 5)
    const dicesWithTwoValuesFound: Dices = new Dices(1, 1, 2, 3,4)
    const dicesWithThreeValuesFound: Dices = new Dices(1, 1, 1, 2, 3)
    const dicesWithFourValuesFound: Dices = new Dices(1, 1, 1, 1, 3)
    const dicesWithFiveValuesFound: Dices = new Dices(1, 1, 1, 1, 1)
    const dicesWithNoValueFound: Dices = new Dices(2, 2, 2, 2, 2)

    const range = 1;
    it('score only the ones', () => {
      expect(service.calculateOnesScore(dicesWithOneValueFound)).toBe(1);
      expect(service.calculateOnesScore(dicesWithTwoValuesFound)).toBe(2);
      expect(service.calculateOnesScore(dicesWithThreeValuesFound)).toBe(3);
      expect(service.calculateOnesScore(dicesWithFourValuesFound)).toBe(4);
      expect(service.calculateOnesScore(dicesWithFiveValuesFound)).toBe(5);
      expect(service.calculateOnesScore(dicesWithNoValueFound)).toBe(0);
    });

  });

  describe('Twos', () => {
    const dicesWithOneValueFound: Dices = new Dices(2, 3, 4, 5, 6)
    const dicesWithTwoValuesFound: Dices = new Dices(1, 2, 2, 3,4)
    const dicesWithThreeValuesFound: Dices = new Dices(2, 2, 1, 2, 3)
    const dicesWithFourValuesFound: Dices = new Dices(2, 2, 2, 2, 3)
    const dicesWithFiveValuesFound: Dices = new Dices(2, 2, 2, 2, 2)
    const dicesWithNoValueFound: Dices = new Dices(1, 3, 4, 5, 6)

    const range = 2;
    const expectedWithOneValueFound = range;
    const expectedWithTwoValuesFound = range *2;
    const expectedWithThreeValuesFound = range *3;
    const expectedWithFourValuesFound = range *4;
    const expectedWithFiveValuesFound = range *5;
    const expectedWithNoValueFound = range * 0;

    it('score only the twos', () => {
      expect(service.calculateTwosScore(dicesWithOneValueFound)).toBe(expectedWithOneValueFound);
      expect(service.calculateTwosScore(dicesWithTwoValuesFound)).toBe(expectedWithTwoValuesFound);
      expect(service.calculateTwosScore(dicesWithThreeValuesFound)).toBe(expectedWithThreeValuesFound);
      expect(service.calculateTwosScore(dicesWithFourValuesFound)).toBe(expectedWithFourValuesFound);
      expect(service.calculateTwosScore(dicesWithFiveValuesFound)).toBe(expectedWithFiveValuesFound);
      expect(service.calculateTwosScore(dicesWithNoValueFound)).toBe(expectedWithNoValueFound);
    });
  });

  describe('Threes', () => {
    const dicesWithOneValueFound: Dices = new Dices(2, 3, 4, 5, 6)
    const dicesWithTwoValuesFound: Dices = new Dices(3, 2, 2, 3,4)
    const dicesWithThreeValuesFound: Dices = new Dices(3, 3, 1, 2, 3)
    const dicesWithFourValuesFound: Dices = new Dices(3, 3, 3, 2, 3)
    const dicesWithFiveValuesFound: Dices = new Dices(3, 3, 3, 3, 3)
    const dicesWithNoValueFound: Dices = new Dices(6, 5, 4, 2, 1)

    const range = 3;
    const expectedWithOneValueFound = range;
    const expectedWithTwoValuesFound = range *2;
    const expectedWithThreeValuesFound = range *3;
    const expectedWithFourValuesFound = range *4;
    const expectedWithFiveValuesFound = range *5;
    const expectedWithNoValueFound = range * 0;

    it('score only the threes', () => {
      expect(service.calculateThreesScore(dicesWithOneValueFound)).toBe(expectedWithOneValueFound);
      expect(service.calculateThreesScore(dicesWithTwoValuesFound)).toBe(expectedWithTwoValuesFound);
      expect(service.calculateThreesScore(dicesWithThreeValuesFound)).toBe(expectedWithThreeValuesFound);
      expect(service.calculateThreesScore(dicesWithFourValuesFound)).toBe(expectedWithFourValuesFound);
      expect(service.calculateThreesScore(dicesWithFiveValuesFound)).toBe(expectedWithFiveValuesFound);
      expect(service.calculateThreesScore(dicesWithNoValueFound)).toBe(expectedWithNoValueFound);
    });
  });

  describe('Fours', () => {
    const dicesWithOneValueFound: Dices = new Dices(2, 3, 4, 5, 6)
    const dicesWithTwoValuesFound: Dices = new Dices(4, 4, 2, 3,5)
    const dicesWithThreeValuesFound: Dices = new Dices(4, 4, 4, 2, 3)
    const dicesWithFourValuesFound: Dices = new Dices(4, 4, 4, 4, 3)
    const dicesWithFiveValuesFound: Dices = new Dices(4, 4, 4, 4, 4)
    const dicesWithNoValueFound: Dices = new Dices(1, 3, 1, 5, 6)

    const range = 4;
    const expectedWithOneValueFound = range;
    const expectedWithTwoValuesFound = range *2;
    const expectedWithThreeValuesFound = range *3;
    const expectedWithFourValuesFound = range *4;
    const expectedWithFiveValuesFound = range *5;
    const expectedWithNoValueFound = range * 0;

    it('score only the fours', () => {
      expect(service.calculateFoursScore(dicesWithOneValueFound)).toBe(expectedWithOneValueFound);
      expect(service.calculateFoursScore(dicesWithTwoValuesFound)).toBe(expectedWithTwoValuesFound);
      expect(service.calculateFoursScore(dicesWithThreeValuesFound)).toBe(expectedWithThreeValuesFound);
      expect(service.calculateFoursScore(dicesWithFourValuesFound)).toBe(expectedWithFourValuesFound);
      expect(service.calculateFoursScore(dicesWithFiveValuesFound)).toBe(expectedWithFiveValuesFound);
      expect(service.calculateFoursScore(dicesWithNoValueFound)).toBe(expectedWithNoValueFound);
    });
  });

  describe('Fives', () => {
    const dicesWithOneValueFound: Dices = new Dices(2, 3, 4, 5, 6)
    const dicesWithTwoValuesFound: Dices = new Dices(5, 5, 2, 3,4)
    const dicesWithThreeValuesFound: Dices = new Dices(5, 5, 5, 2, 3)
    const dicesWithFourValuesFound: Dices = new Dices(5, 5, 5, 2, 5)
    const dicesWithFiveValuesFound: Dices = new Dices(5, 5, 5, 5, 5)
    const dicesWithNoValueFound: Dices = new Dices(1, 3, 4, 2, 6)

    const range = 5;
    const expectedWithOneValueFound = range;
    const expectedWithTwoValuesFound = range *2;
    const expectedWithThreeValuesFound = range *3;
    const expectedWithFourValuesFound = range *4;
    const expectedWithFiveValuesFound = range *5;
    const expectedWithNoValueFound = range * 0;

    it('score only the fives', () => {
      expect(service.calculateFivesScore(dicesWithOneValueFound)).toBe(expectedWithOneValueFound);
      expect(service.calculateFivesScore(dicesWithTwoValuesFound)).toBe(expectedWithTwoValuesFound);
      expect(service.calculateFivesScore(dicesWithThreeValuesFound)).toBe(expectedWithThreeValuesFound);
      expect(service.calculateFivesScore(dicesWithFourValuesFound)).toBe(expectedWithFourValuesFound);
      expect(service.calculateFivesScore(dicesWithFiveValuesFound)).toBe(expectedWithFiveValuesFound);
      expect(service.calculateFivesScore(dicesWithNoValueFound)).toBe(expectedWithNoValueFound);
    });
  });

  describe('Sixes', () => {
    const dicesWithOneValueFound: Dices = new Dices(2, 3, 4, 5, 6)
    const dicesWithTwoValuesFound: Dices = new Dices(1, 6, 6, 3,4)
    const dicesWithThreeValuesFound: Dices = new Dices(6, 6, 6, 2, 3)
    const dicesWithFourValuesFound: Dices = new Dices(6, 6, 6, 6, 3)
    const dicesWithFiveValuesFound: Dices = new Dices(6, 6, 6, 6, 6)
    const dicesWithNoValueFound: Dices = new Dices(1, 3, 4, 5, 1)

    const range = 6;
    const expectedWithOneValueFound = range;
    const expectedWithTwoValuesFound = range *2;
    const expectedWithThreeValuesFound = range *3;
    const expectedWithFourValuesFound = range *4;
    const expectedWithFiveValuesFound = range *5;
    const expectedWithNoValueFound = range * 0;

    it('score only the fives', () => {
      expect(service.calculateSixesScore(dicesWithOneValueFound)).toBe(expectedWithOneValueFound);
      expect(service.calculateSixesScore(dicesWithTwoValuesFound)).toBe(expectedWithTwoValuesFound);
      expect(service.calculateSixesScore(dicesWithThreeValuesFound)).toBe(expectedWithThreeValuesFound);
      expect(service.calculateSixesScore(dicesWithFourValuesFound)).toBe(expectedWithFourValuesFound);
      expect(service.calculateSixesScore(dicesWithFiveValuesFound)).toBe(expectedWithFiveValuesFound);
      expect(service.calculateSixesScore(dicesWithNoValueFound)).toBe(expectedWithNoValueFound);
    });
  });

  describe('Yatzee', () => {
    it('should score Yatzyyy ', () => {
      const yatzy6: Dices = new Dices(6, 6,6 ,6,6);
      const yatzy3: Dices = new Dices(3, 3,3 ,3,3);
      const notYatzy: Dices = new Dices(6, 1,6 ,6,6);
      expect(service.getYatzyScore(yatzy6)).toBe(50);
      expect(service.getYatzyScore(yatzy3)).toBe(50);
      expect(service.getYatzyScore(notYatzy)).toBe(0);
    })
  })

  describe('Pair', () => {
    it('should score pair ', () => {
      const yatzyPair: Dices = new Dices(3, 3,1 ,4,5);
      const yatzyNoSimilar: Dices = new Dices(3, 2,1 ,4,5);
      expect(service.calculateScoreForSameKind(yatzyPair)).toBe(6);
      expect(service.calculateScoreForSameKind(yatzyNoSimilar)).toBe(0);
    })
  })

  describe('Two Pairs', () => {
    it('should score two pairs ', () => {
      const yatzyTwoPairs: Dices = new Dices(6, 6,5 ,5,4);
      const yatzyNoSimilar: Dices = new Dices(1, 6,3 ,5,4);
      expect(service.calculateScoreForSameKind(yatzyTwoPairs)).toBe(22);
      expect(service.calculateScoreForSameKind(yatzyNoSimilar)).toBe(0);
    })
  })

  describe('Three Of A Kind', () => {
    it('should score three of a kind ', () => {
      const yatzyThreeOfAKindA: Dices = new Dices(3, 3,3 ,4,5);
      const yatzyThreeOfAKindB: Dices = new Dices(5, 5,3 ,4,5);
      const yatzyThreeOfAKindC: Dices = new Dices(1, 1,3 ,1,5);
      const yatzyNoSimilar: Dices = new Dices(1, 2,3 ,4,5);
      expect(service.calculateThreeOfAKindScore(yatzyThreeOfAKindA)).toBe(9);
      expect(service.calculateThreeOfAKindScore(yatzyThreeOfAKindB)).toBe(15);
      expect(service.calculateThreeOfAKindScore(yatzyThreeOfAKindC)).toBe(3);
      expect(service.calculateThreeOfAKindScore(yatzyNoSimilar)).toBe(0);
    })
  })
  describe('Four Of A Kind', () => {
    it('should score sum of four of a kind ', () => {
      const yatzyFourOfAKind: Dices = new Dices(4, 4,4 ,4,5);
      expect(service.calculateFourOfAKindScore(yatzyFourOfAKind)).toBe(16);
    })

    it('should score zero in four of a kind ', () => {
      const yatzyNoSimilar: Dices = new Dices(1, 2,3 ,4,5);
      expect(service.calculateFourOfAKindScore(yatzyNoSimilar)).toBe(0);
    })
  })
  describe('Straights', () => {
    it('should score small straight ', () => {
      const smallStraight: Dices = new Dices(3, 1,2 ,4,5);
      expect(service.getStraightScore(smallStraight)).toBe(15);
    })

    it('should score large straight ', () => {
      const smallStraight: Dices = new Dices(2, 3,4 ,5,6);
      expect(service.getStraightScore(smallStraight)).toBe(20);
    })

    it('should not score small straight', () => {
      const notSmallStraight: Dices = new Dices(1, 2,3 ,6,5);
      expect(service.getStraightScore(notSmallStraight)).toBe(0);
    })
  })

  describe('Full House', () => {
    it('should score full house ', () => {
      const fullHouse: Dices = new Dices(3, 1,1 ,3,1);
      expect(service.getFullHouseScore(fullHouse)).toBe(30);
    })

    it('should not score full house', () => {
      const notAFullHouse: Dices = new Dices(1, 2,3 ,6,5);
      expect(service.getFullHouseScore(notAFullHouse)).toBe(0);
    })
  })
});
