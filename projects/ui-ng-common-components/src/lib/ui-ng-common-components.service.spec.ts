import { TestBed } from '@angular/core/testing';

import { UiNgCommonComponentsService } from './ui-ng-common-components.service';

describe('UiNgCommonComponentsService', () => {
  let service: UiNgCommonComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiNgCommonComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
