import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText = '';
  inventories: Inventory[] = [];
  constructor(private inventoryservice: InventoryService) { }

  // Get all inventory by making GET request to json server
  ngOnInit(): void {

    this.inventoryservice.getAllInventory().subscribe((inventories=>{
      this.inventories=inventories;
      console.log(inventories);

    }));
  }

}
