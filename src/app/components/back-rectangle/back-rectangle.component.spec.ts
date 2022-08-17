import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackRectangleComponent } from './back-rectangle.component';

describe('BackRectangleComponent', () => {
  let component: BackRectangleComponent;
  let fixture: ComponentFixture<BackRectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackRectangleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
