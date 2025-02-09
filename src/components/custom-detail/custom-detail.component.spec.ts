import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDetailComponent } from './custom-detail.component';

describe('CustomDetailComponent', () => {
  let component: CustomDetailComponent;
  let fixture: ComponentFixture<CustomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
