/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChildService } from './child.service';

describe('Service: Child', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildService]
    });
  });

  it('should ...', inject([ChildService], (service: ChildService) => {
    expect(service).toBeTruthy();
  }));
});