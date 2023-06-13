import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormUserComponent } from './order-form-user.component';

describe('OrderFormUserComponent', () => {
  let component: OrderFormUserComponent;
  let fixture: ComponentFixture<OrderFormUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFormUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
