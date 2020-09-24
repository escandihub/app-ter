import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullToroComponent } from './full-toro.component';

describe('FullToroComponent', () => {
  let component: FullToroComponent;
  let fixture: ComponentFixture<FullToroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullToroComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullToroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
