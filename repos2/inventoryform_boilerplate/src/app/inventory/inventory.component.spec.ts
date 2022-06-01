import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { Inventory } from '../models/Inventory';
import { InventoryComponent } from './inventory.component';
import { InventoryService } from '../services/inventory.service';

const inventory: Inventory[] = [
  {
    name: 'Steel',
    quantity: 2000
  },
  {
    name: 'Plastic',
    quantity: 3000
  },
  {
    name: 'Pipes',
    quantity: 5000
  }
];

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;
  let service: InventoryService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule
      ],
      declarations: [ InventoryComponent, SearchPipe ],
      providers: [InventoryService]
    })
    .compileComponents();
    service = TestBed.inject(InventoryService);
    spyOn(service, 'getAllInventory').and.returnValue(of(inventory));
    spyOn(service, 'addInventory').and.returnValue(of(inventory));
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test to check onSubmit method existence
  it('onSubmit() should exists', () => {
    expect(component.onSubmit).toBeTruthy();
  });

  // test to check ngOnInit method existence
  it('ngOnInit() should exists', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  // test to check addInventory is called in onSubmit or not
  it('postNewInventory() should call service to add a Inventory ', () => {
    component.inventories = inventory;
    component.inventoryFormGroup.value.name = 'test';
    component.inventoryFormGroup.value.quantity = '123456';

    component.postNewInventory();
    expect(service.addInventory).toHaveBeenCalled();
    expect(component.message).toEqual('Inventory added');
  });
});
