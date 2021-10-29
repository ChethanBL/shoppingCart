/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShopServiceService } from './shopService.service';

describe('Service: ShopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopServiceService]
    });
  });

  it('should ...', inject([ShopServiceService], (service: ShopServiceService) => {
    expect(service).toBeTruthy();
  }));
});
