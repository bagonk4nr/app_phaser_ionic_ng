import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoserPage } from './loser.page';

describe('LoserPage', () => {
  let component: LoserPage;
  let fixture: ComponentFixture<LoserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
