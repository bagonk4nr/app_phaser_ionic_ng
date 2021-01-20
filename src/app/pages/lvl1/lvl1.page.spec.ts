import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lvl1Page } from './lvl1.page';

describe('Lvl1Page', () => {
  let component: Lvl1Page;
  let fixture: ComponentFixture<Lvl1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lvl1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lvl1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
