import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainstartPage } from './mainstart.page';

describe('MainstartPage', () => {
  let component: MainstartPage;
  let fixture: ComponentFixture<MainstartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainstartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainstartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
