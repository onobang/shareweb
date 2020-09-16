import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKosakataComponent } from './add-kosakata.component';

describe('AddKosakataComponent', () => {
  let component: AddKosakataComponent;
  let fixture: ComponentFixture<AddKosakataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKosakataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKosakataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
