import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string= 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCapital(term:string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      // tap(countries=>console.log('Pasamos por el tap 1',countries)),
      // map(countries=>[]),
      // tap(countries=>console.log('Pasamos por el tap 2',countries)),
      catchError(err=>{
        console.log('Error:',err);
        return of([])//of([]) es un observable que emite un array vacio
      })
    );
  }

  searchPais (term:string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(err=>{
        console.log('Error:',err);
        return of([])//of([]) es un observable que emite un array vacio
      })
    );
  }

  searchRegion (term:string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(err=>{
        console.log('Error:',err);
        return of([])//of([]) es un observable que emite un array vacio
      })
    );
  }



}
