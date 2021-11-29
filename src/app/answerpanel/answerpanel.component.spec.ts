import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerpanelComponent } from './answerpanel.component';

describe('AnswerpanelComponent', () => {
  let component: AnswerpanelComponent;
  let fixture: ComponentFixture<AnswerpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
