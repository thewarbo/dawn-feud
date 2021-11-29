import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorpanelComponent } from './operatorpanel.component';

describe('OperatorpanelComponent', () => {
  let component: OperatorpanelComponent;
  let fixture: ComponentFixture<OperatorpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
