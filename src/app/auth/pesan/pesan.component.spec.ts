import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesanComponent } from './pesan.component';

describe('PesanComponent', () => {
  let component: PesanComponent;
  let fixture: ComponentFixture<PesanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
