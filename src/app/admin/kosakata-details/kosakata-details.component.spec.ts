import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KosakataDetailsComponent } from './kosakata-details.component';

describe('KosakataDetailsComponent', () => {
  let component: KosakataDetailsComponent;
  let fixture: ComponentFixture<KosakataDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KosakataDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KosakataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
