import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private static token = '';
  private static apiUrl = environment.apiUrl || '';

  constructor(private http: HttpClient) {
    ApiService.token = 'uy';
  }

  async get<T>(url: string, headers?: any, params?: any): Promise<any> {
    try {
      return await firstValueFrom(
        this.http
          .get<T>(`${ApiService.apiUrl}/${url}`, {
            headers: {
              ...headers,
              Authorization: `Bearer ${ApiService.token}`,
            },
            params,
          })
          .pipe(take(1))
      );
    } catch (err) {
      this.handleRequestError(err);
    }
  }

  async post<T>(
    url: any,
    body: any,
    headers?: any,
    params?: any
  ): Promise<any> {
    try {
      return await firstValueFrom(
        this.http
          .post<T>(`${ApiService.apiUrl}/${url}`, body, {
            headers: {
              ...headers,
              Authorization: `Bearer ${ApiService.token}`,
            },
            params,
          })
          .pipe(take(1))
      );
    } catch (err) {
      this.handleRequestError(err);
    }
  }

  async put<T>(url: any, body: any, headers?: any, params?: any): Promise<any> {
    try {
      return await firstValueFrom(
        this.http
          .put<T>(`${ApiService.apiUrl}/${url}`, body, {
            headers: {
              ...headers,
              Authorization: `Bearer ${ApiService.token}`,
            },
            params,
          })
          .pipe(take(1))
      );
    } catch (err) {
      this.handleRequestError(err);
    }
  }

  async patch<T>(
    url: any,
    body: any,
    headers?: any,
    params?: any
  ): Promise<any> {
    try {
      return await firstValueFrom(
        this.http
          .patch<T>(`${ApiService.apiUrl}/${url}`, body, {
            headers: {
              ...headers,
              Authorization: `Bearer ${ApiService.token}`,
            },
            params,
          })
          .pipe(take(1))
      );
    } catch (err) {
      this.handleRequestError(err);
    }
  }

  async delete<T>(url: any, headers?: any, params?: any): Promise<any> {
    try {
      return await firstValueFrom(
        this.http
          .delete<T>(`${ApiService.apiUrl}/${url}`, {
            headers: {
              ...headers,
              Authorization: `Bearer ${ApiService.token}`,
            },
            params,
          })
          .pipe(take(1))
      );
    } catch (err) {
      this.handleRequestError(err);
    }
  }

  private handleRequestError(err: any) {
    throw err;
  }
}
