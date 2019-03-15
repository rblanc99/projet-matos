import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAppareilComponent } from './details-appareil.component';

describe('DetailsAppareilComponent', () => {
  let component: DetailsAppareilComponent;
  let fixture: ComponentFixture<DetailsAppareilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAppareilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
