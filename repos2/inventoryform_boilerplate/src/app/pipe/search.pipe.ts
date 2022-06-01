import { Pipe, PipeTransform } from '@angular/core';
import { Inventory } from '../models/Inventory';

@Pipe({
  name: 'search'
})

// Implement logic to filter the given Inventory based on given searchText
// Convert text to lowercase
export class SearchPipe implements PipeTransform {
  transform(value: Inventory[], searchText:string): Inventory[] {
    if(value.length===0 || searchText===""){
      return value
    }
    const cont=[];
    for(const val of value){
    if(val.name.includes(searchText) || val.quantity.toString().includes(searchText)){
      cont.push(val);
    }}
    return cont;
  }
}

