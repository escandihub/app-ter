import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerneroPage } from './ternero.page';

describe('TerneroPage', () => {
  let component: TerneroPage;
  let fixture: ComponentFixture<TerneroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerneroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
