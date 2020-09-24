import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToroPage } from './toro.page';

describe('ToroPage', () => {
  let component: ToroPage;
  let fixture: ComponentFixture<ToroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
