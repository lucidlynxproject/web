import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiTokenService {
  authPath = 'api/token';

  constructor(private api: ApiService) {}

  public async generateApiToken(email: string): Promise<string> {
    const body = { email };
    return this.api.post(`${this.authPath}/generate_token`, body);
  }
}
