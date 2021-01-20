import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LvlsPage } from './lvls.page';

describe('LvlsPage', () => {
  let component: LvlsPage;
  let fixture: ComponentFixture<LvlsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LvlsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LvlsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
