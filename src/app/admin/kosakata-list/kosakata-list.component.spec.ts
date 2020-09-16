import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KosakataListComponent } from './kosakata-list.component';

describe('KosakataListComponent', () => {
  let component: KosakataListComponent;
  let fixture: ComponentFixture<KosakataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KosakataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KosakataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
