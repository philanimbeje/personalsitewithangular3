import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadspageComponent } from './downloadspage.component';

describe('DownloadspageComponent', () => {
  let component: DownloadspageComponent;
  let fixture: ComponentFixture<DownloadspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
