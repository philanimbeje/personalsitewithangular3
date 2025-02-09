import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTileComponent } from './custom-tile.component';

describe('CustomTileComponent', () => {
  let component: CustomTileComponent;
  let fixture: ComponentFixture<CustomTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
