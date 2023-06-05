import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDctComponent } from './dashboard-dct.component';

describe('DashboardDctComponent', () => {
  let component: DashboardDctComponent;
  let fixture: ComponentFixture<DashboardDctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
