import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Inventory } from '../models/Inventory';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  // Declare required variables
  inventoryFormGroup!:FormGroup
  message:string="";
  inventories: Inventory[] = [];

  // message is to display message

  // Method to execute on submitting form
  onSubmit(onSubmit: any) {
    this.postNewInventory();
  }

  constructor(private cont: FormBuilder, private inventory: InventoryService, private router: Router) { }
  // Create a new form group onInit
  ngOnInit(): void {
    this.inventoryFormGroup=this.cont.group({
      name:['',[Validators.required]],
      quantity:['',[Validators.required]]
    });
  }


  // Post new inventory to json server by making POST request
  postNewInventory() {
    // post Api
    this.inventory.addInventory(new Inventory(this.inventoryFormGroup.value.name,this.inventoryFormGroup.value.quantity)).subscribe((q)=>console.log(q));
    this.message="Inventory added";
    }
  }
