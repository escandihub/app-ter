import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VacaPage } from './vaca.page';

describe('VacaPage', () => {
  let component: VacaPage;
  let fixture: ComponentFixture<VacaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
