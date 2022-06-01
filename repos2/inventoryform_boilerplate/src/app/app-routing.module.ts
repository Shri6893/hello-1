import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '', component: InventoryComponent
  },
  {
    path: 'inventory', component: InventoryComponent
  },
  {
    path: 'search', component: SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
