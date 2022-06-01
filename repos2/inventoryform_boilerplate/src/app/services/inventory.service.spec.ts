import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Inventory } from '../models/Inventory';
import { InventoryService } from './inventory.service';

const inventories: Inventory[] = [
  {
    name: 'Steel',
    quantity: 2000
  },
  {
    name: 'abc',
    quantity: 3210
  },
  {
    name: 'xyz',
    quantity: 5210
  }
];

describe('InventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [InventoryService]
  }));

  it('should be created', () => {
    const service: InventoryService = TestBed.get(InventoryService);
    expect(service).toBeTruthy();
  });

  // testing service for getAllInventories method
  it('getAllInventory() should fetch allInventories',
  inject([HttpTestingController, InventoryService],
    (httpMock: HttpTestingController, service: InventoryService) => {
      // We call the service
      service.getAllInventory().subscribe(data => {
        expect(data.data.length).toBe(3);
        expect(data.data).toEqual(inventories);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/inventory');
      expect(req.request.method).toEqual('GET');
      // Then we set the fake data to be returned by the mock
      req.flush({data: inventories });
      // httpMock.verify();
    })
);
  // testing service for add Inventory method
  it('addInventory() method should add Inventory',
  inject([HttpTestingController, InventoryService],
    (httpMock: HttpTestingController, service: InventoryService) => {
      const inventory: Inventory = {
        name: 'test',
        quantity: 88348344386,
      };
      // We call the service
      service.addInventory(inventory).subscribe(data => {
        expect(data.data.length).toBe(3);
        expect(data.data).toEqual(inventories);
      });

      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/inventory');
      expect(req.request.method).toEqual('POST');
      // Then we set the fake data to be returned by the mock
      req.flush({data: inventories});
      // httpMock.verify();
      })
    );
  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
       httpMock.verify();
    }));
});
