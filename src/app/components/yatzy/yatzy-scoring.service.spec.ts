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
      expect(service.twos(dicesWithOneValueFound)).toBe(expectedWithOneValueFound);
      expect(service.twos(dicesWithTwoValuesFound)).toBe(expectedWithTwoValuesFound);
      expect(service.twos(dicesWithThreeValuesFound)).toBe(expectedWithThreeValuesFound);
      expect(service.twos(dicesWithFourValuesFound)).toBe(expectedWithFourValuesFound);
      expect(service.twos(dicesWithFiveValuesFound)).toBe(expectedWithFiveValuesFound);
      expect(service.twos(dicesWithNoValueFound)).toBe(expectedWithNoValueFound);
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
      expect(YatzyComponent.threes(dicesWithOneValueFound)).toBe(expectedWithOneValueFound);
      expect(YatzyComponent.threes(dicesWithTwoValuesFound)).toBe(expectedWithTwoValuesFound);
      expect(YatzyComponent.threes(dicesWithThreeValuesFound)).toBe(expectedWithThreeValuesFound);
      expect(YatzyComponent.threes(dicesWithFourValuesFound)).toBe(expectedWithFourValuesFound);
      expect(YatzyComponent.threes(dicesWithFiveValuesFound)).toBe(expectedWithFiveValuesFound);
      expect(YatzyComponent.threes(dicesWithNoValueFound)).toBe(expectedWithNoValueFound);
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
      expect(YatzyComponent.fours(dicesWithOneValueFound)).toBe(expectedWithOneValueFound);
      expect(YatzyComponent.fours(dicesWithTwoValuesFound)).toBe(expectedWithTwoValuesFound);
      expect(YatzyComponent.fours(dicesWithThreeValuesFound)).toBe(expectedWithThreeValuesFound);
      expect(YatzyComponent.fours(dicesWithFourValuesFound)).toBe(expectedWithFourValuesFound);
      expect(YatzyComponent.fours(dicesWithFiveValuesFound)).toBe(expectedWithFiveValuesFound);
      expect(YatzyComponent.fours(dicesWithNoValueFound)).toBe(expectedWithNoValueFound);
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
      expect(YatzyComponent.fives(dicesWithOneValueFound)).toBe(expectedWithOneValueFound);
      expect(YatzyComponent.fives(dicesWithTwoValuesFound)).toBe(expectedWithTwoValuesFound);
      expect(YatzyComponent.fives(dicesWithThreeValuesFound)).toBe(expectedWithThreeValuesFound);
      expect(YatzyComponent.fives(dicesWithFourValuesFound)).toBe(expectedWithFourValuesFound);
      expect(YatzyComponent.fives(dicesWithFiveValuesFound)).toBe(expectedWithFiveValuesFound);
      expect(YatzyComponent.fives(dicesWithNoValueFound)).toBe(expectedWithNoValueFound);
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
      expect(YatzyComponent.sixes(dicesWithOneValueFound)).toBe(expectedWithOneValueFound);
      expect(YatzyComponent.sixes(dicesWithTwoValuesFound)).toBe(expectedWithTwoValuesFound);
      expect(YatzyComponent.sixes(dicesWithThreeValuesFound)).toBe(expectedWithThreeValuesFound);
      expect(YatzyComponent.sixes(dicesWithFourValuesFound)).toBe(expectedWithFourValuesFound);
      expect(YatzyComponent.sixes(dicesWithFiveValuesFound)).toBe(expectedWithFiveValuesFound);
      expect(YatzyComponent.sixes(dicesWithNoValueFound)).toBe(expectedWithNoValueFound);
    });
  });

  describe('Yatzee', () => {
    it('should score Yatzyyy ', () => {
      const yatzy6: Dices = new Dices(6, 6,6 ,6,6);
      const yatzy3: Dices = new Dices(3, 3,3 ,3,3);
      const notYatzy: Dices = new Dices(6, 1,6 ,6,6);
      expect(YatzyComponent.yatzy(yatzy6)).toBe(50);
      expect(YatzyComponent.yatzy(yatzy3)).toBe(50);
      expect(YatzyComponent.yatzy(notYatzy)).toBe(0);
    })
  })

  describe('Pair', () => {
    it('should score pair ', () => {
      const yatzyPair: Dices = new Dices(3, 3,1 ,4,5);
      const yatzyNoSimilar: Dices = new Dices(3, 2,1 ,4,5);
      expect(YatzyComponent.getScoreForSameKind(yatzyPair)).toBe(6);
      expect(YatzyComponent.getScoreForSameKind(yatzyNoSimilar)).toBe(0);
    })
  })

  describe('Two Pairs', () => {
    it('should score two pairs ', () => {
      const yatzyTwoPairs: Dices = new Dices(6, 6,5 ,5,4);
      const yatzyNoSimilar: Dices = new Dices(1, 6,3 ,5,4);
      expect(YatzyComponent.getScoreForSameKind(yatzyTwoPairs)).toBe(22);
      expect(YatzyComponent.getScoreForSameKind(yatzyNoSimilar)).toBe(0);
    })
  })

  describe('Three Of A Kind', () => {
    it('should score three of a kind ', () => {
      const yatzyThreeOfAKind: Dices = new Dices(3, 3,3 ,4,5);
      const yatzyNoSimilar: Dices = new Dices(1, 2,3 ,4,5);
      expect(YatzyComponent.getScoreForSameKind(yatzyThreeOfAKind)).toBe(9);
      expect(YatzyComponent.getScoreForSameKind(yatzyNoSimilar)).toBe(0);
    })
  })
  describe('Four Of A Kind', () => {
    it('should score sum of four of a kind ', () => {
      const yatzyFourOfAKind: Dices = new Dices(4, 4,4 ,4,5);
      expect(YatzyComponent.getScoreForSameKind(yatzyFourOfAKind)).toBe(16);
    })

    it('should score zero in four of a kind ', () => {
      const yatzyNoSimilar: Dices = new Dices(1, 2,3 ,4,5);
      expect(YatzyComponent.getScoreForSameKind(yatzyNoSimilar)).toBe(0);
    })
  })
  describe('Straights', () => {
    it('should score small straight ', () => {
      const smallStraight: Dices = new Dices(3, 1,2 ,4,5);
      expect(YatzyComponent.smallStraight(smallStraight)).toBe(15);
    })

    it('should score large straight ', () => {
      const smallStraight: Dices = new Dices(2, 3,4 ,5,6);
      expect(YatzyComponent.smallStraight(smallStraight)).toBe(20);
    })

    it('should not score small straight', () => {
      const notSmallStraight: Dices = new Dices(1, 2,3 ,6,5);
      expect(YatzyComponent.smallStraight(notSmallStraight)).toBe(0);
    })
  })

  describe('Full House', () => {
    it('should score full house ', () => {
      const fullHouse: Dices = new Dices(3, 1,1 ,3,1);
      expect(YatzyComponent.fullHouse(fullHouse)).toBe(30);
    })

    it('should not score full house', () => {
      const notAFullHouse: Dices = new Dices(1, 2,3 ,6,5);
      expect(YatzyComponent.fullHouse(notAFullHouse)).toBe(0);
    })
  })
});
});
