import { TestBed } from '@angular/core/testing';

import { AddParcelService } from './add-parcel.service';

describe('AddParcelService', () => {
  let service: AddParcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddParcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
