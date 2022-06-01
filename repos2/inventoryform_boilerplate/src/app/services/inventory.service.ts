import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inventory } from '../models/Inventory';
const URL="http://localhost:3000/inventory";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor(private http: HttpClient) {}

  // Implement addInventories method using HttpClient for  saving a Inventories details
  addInventory(inventory: Inventory): Observable<any> {
    return this.http
    .post<Inventory>(URL, inventory, httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  // Implement getAllInventories method using HttpClient for getting all Inventories details
  getAllInventory(): Observable<any> {
    return this.http
    .get<Inventory[]>(URL)
    .pipe(retry(1), catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

