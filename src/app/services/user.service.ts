import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/interfaces/ApiResponse.interface';
import { User } from '../models/User';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private api: ApiService) {}

  getUser(id: string): Promise<ApiResponse> {
    return this.api.get(`api/user/${id}`);
  }
}
