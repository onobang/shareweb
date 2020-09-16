import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaranComponent } from './saran.component';

describe('SaranComponent', () => {
  let component: SaranComponent;
  let fixture: ComponentFixture<SaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
