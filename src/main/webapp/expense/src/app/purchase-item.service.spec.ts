/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PurchaseItemService } from './purchase-item.service';

describe('Service: PurchaseItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurchaseItemService]
    });
  });

  it('should ...', inject([PurchaseItemService], (service: PurchaseItemService) => {
    expect(service).toBeTruthy();
  }));
});
