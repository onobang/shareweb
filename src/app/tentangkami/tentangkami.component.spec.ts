import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TentangkamiComponent } from './tentangkami.component';

describe('TentangkamiComponent', () => {
  let component: TentangkamiComponent;
  let fixture: ComponentFixture<TentangkamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentangkamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentangkamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
