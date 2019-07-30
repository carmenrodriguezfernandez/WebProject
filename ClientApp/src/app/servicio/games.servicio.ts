import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Games } from '../modelo/games';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }
  /** POST: add a new task to the server */
  addTask(task: Games): Observable<Games> {
    return this.http.post<Games>(this.baseUrl + 'api/games', task, httpOptions).pipe(
      tap((newTask: Games) => this.log(`added NewTask w/ id=${newTask.id}`)),
      catchError(this.handleError<Games>('addTask'))
    );
  }

  getAll(): Observable<Games[]> {
    return this.http.get<Games[]>(this.baseUrl + 'api/games')
      .pipe(
        tap(_ => this.log("fetched Task")),
        catchError(this.handleError<Games[]>('getAll', []))
      );
  }

  get(id: number): Observable<Games> {

    const url = `${this.baseUrl + 'api/games'}/${id}`;

    return this.http.get<Games>(url).pipe(
      tap(_ => this.log(`fetched task id=${id}`)),
      catchError(this.handleError<Games>(`get id=${id}`))
    );
  }

  update(task: Games): Observable<any> {
    const url =

      `${this.baseUrl + 'api/games'}/${task.id}`;
    return this.http.put(url, task, httpOptions).pipe(
      tap(_ => this.log(`updated task id=${task.id}`)),
      catchError(this.handleError<any>('task'))
    );
  }

  delete(task: Games | number): Observable<Games> {
    const id = typeof task === 'number' ? task : task.id;
    const url =

      `${this.baseUrl + 'api/games'}/${id}`;

    return this.http.delete<Games>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted task id=${id}`)),
      catchError(this.handleError<Games>('deleteTask'))
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
