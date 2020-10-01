import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewRumianteComponent } from './new-rumiante.component';

describe('NewRumianteComponent', () => {
  let component: NewRumianteComponent;
  let fixture: ComponentFixture<NewRumianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRumianteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewRumianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
