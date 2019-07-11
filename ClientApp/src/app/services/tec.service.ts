import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Tec } from '../models/tec';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TecService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }
  /** POST: add a new task to the server */
  addTask(task: Tec): Observable<Tec> {
    return this.http.post<Tec>(this.baseUrl + 'api/Tec', task, httpOptions).pipe(
      tap((newTask: Tec) => this.log(`added NewTask w/ id=${newTask.id}`)),
      catchError(this.handleError<Tec>('addTask'))
    );
  }

  getAll(): Observable<Tec[]> {
    return this.http.get<Tec[]>(this.baseUrl + 'api/Tec')
      .pipe(
        tap(_ => this.log("fetched Task")),
        catchError(this.handleError<Tec[]>('getAll', []))
      );
  }

  get(id: number): Observable<Tec> {

    const url = `${this.baseUrl + 'api/Tec'}/${id}`;

    return this.http.get<Tec>(url).pipe(
      tap(_ => this.log(`fetched task id=${id}`)),
      catchError(this.handleError<Tec>(`get id=${id}`))
    );
  }

  update(task: Tec): Observable<any> {
    const url =

      `${this.baseUrl + 'api/Tec'}/${task.id}`;
    return this.http.put(url, task, httpOptions).pipe(
      tap(_ => this.log(`updated task id=${task.id}`)),
      catchError(this.handleError<any>('task'))
    );
  }

  delete(task: Tec | number): Observable<Tec> {
    const id = typeof task === 'number' ? task : task.id;
    const url =

      `${this.baseUrl + 'api/Tec'}/${id}`;

    return this.http.delete<Tec>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted task id=${id}`)),
      catchError(this.handleError<Tec>('deleteTask'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    alert(`SocioService: ${message}`);
  }
}
