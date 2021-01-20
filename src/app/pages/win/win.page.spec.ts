import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WinPage } from './win.page';

describe('WinPage', () => {
  let component: WinPage;
  let fixture: ComponentFixture<WinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
