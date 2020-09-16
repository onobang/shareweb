import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKamusComponent } from './add-kamus.component';

describe('AddKamusComponent', () => {
  let component: AddKamusComponent;
  let fixture: ComponentFixture<AddKamusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKamusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKamusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
