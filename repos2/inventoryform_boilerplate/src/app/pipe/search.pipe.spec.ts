import { Inventory } from '../models/Inventory';
import { SearchPipe } from './search.pipe';

const pipe = new SearchPipe();
const inventory: Inventory[] = [
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

describe('SearchPipe', () => {

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  // testing the search pipe based on name
  it('transform() should return result based on name', () => {
    const result: Inventory[] = [{
        name: 'abc',
        quantity: 3210
      }];
    expect(new SearchPipe().transform(inventory, 'abc')).toEqual(result);
  });

  // testing the search pipe based on quantity number
  it('transform() should return result based on quantity number', () => {
    const result: Inventory[] = [
      {
        name: 'abc',
        quantity: 3210
      },
      {
        name: 'xyz',
        quantity: 5210
      }];
    expect(new SearchPipe().transform(inventory, '210')).toEqual(result);
  });

});
