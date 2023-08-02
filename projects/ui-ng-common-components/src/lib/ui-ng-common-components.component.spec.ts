import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNgCommonComponentsComponent } from './ui-ng-common-components.component';

describe('UiNgCommonComponentsComponent', () => {
  let component: UiNgCommonComponentsComponent;
  let fixture: ComponentFixture<UiNgCommonComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiNgCommonComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiNgCommonComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
