import { ComponentFixture, TestBed } from '@angular/core/testing';

import {Dices, YatzyComponent} from './yatzy.component';

describe('Yatzy', () => {
  let component: YatzyComponent;
  let fixture: ComponentFixture<YatzyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YatzyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(YatzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});



