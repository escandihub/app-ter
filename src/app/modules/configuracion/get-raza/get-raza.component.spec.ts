import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetRazaComponent } from './get-raza.component';

describe('GetRazaComponent', () => {
  let component: GetRazaComponent;
  let fixture: ComponentFixture<GetRazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRazaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
