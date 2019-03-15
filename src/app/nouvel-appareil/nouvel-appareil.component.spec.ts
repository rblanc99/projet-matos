import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelAppareilComponent } from './nouvel-appareil.component';

describe('NouvelAppareilComponent', () => {
  let component: NouvelAppareilComponent;
  let fixture: ComponentFixture<NouvelAppareilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelAppareilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
