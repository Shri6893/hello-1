import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SearchComponent } from 'src/app/search/search.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { of } from 'rxjs';
import { Inventory } from '../models/Inventory';
import { InventoryService } from '../services/inventory.service';


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

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: InventoryService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule
      ],
      declarations: [ SearchComponent, SearchPipe ],
      providers: [InventoryService]
    })
    .compileComponents();
    service = TestBed.inject(InventoryService);
    spyOn(service, 'getAllInventory').and.returnValue(of(inventories));
    spyOn(service, 'addInventory').and.returnValue(of(inventories));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test to check getAllInventories is called in ngOnInit or not
  it('ngOnInit() should call Service to getAllInventories ', () => {
    component.ngOnInit();
    expect(service.getAllInventory).toHaveBeenCalled();
  });
});
