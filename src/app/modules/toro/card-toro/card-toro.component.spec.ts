import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardToroComponent } from './card-toro.component';

describe('CardToroComponent', () => {
  let component: CardToroComponent;
  let fixture: ComponentFixture<CardToroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardToroComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardToroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
