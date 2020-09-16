import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeifyEmailComponent } from './veify-email.component';

describe('VeifyEmailComponent', () => {
  let component: VeifyEmailComponent;
  let fixture: ComponentFixture<VeifyEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeifyEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
