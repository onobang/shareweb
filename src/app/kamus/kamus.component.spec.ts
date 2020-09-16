import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamusComponent } from './kamus.component';

describe('KamusComponent', () => {
  let component: KamusComponent;
  let fixture: ComponentFixture<KamusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
