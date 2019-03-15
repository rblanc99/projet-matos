import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAppareilsComponent } from './liste-appareils.component';

describe('ListeAppareilsComponent', () => {
  let component: ListeAppareilsComponent;
  let fixture: ComponentFixture<ListeAppareilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAppareilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAppareilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
