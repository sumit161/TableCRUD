import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseCountComponent } from './passe-count.component';

describe('PasseCountComponent', () => {
  let component: PasseCountComponent;
  let fixture: ComponentFixture<PasseCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasseCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasseCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
