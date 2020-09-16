import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidioComponent } from './vidio.component';

describe('VidioComponent', () => {
  let component: VidioComponent;
  let fixture: ComponentFixture<VidioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
