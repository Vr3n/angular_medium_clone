import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { CurrenUserInterface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from '../types/authResponse.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrenUserInterface> {
    const register_url = environment.apiUrl + '/users';

    return this.http
      .post<AuthResponseInterface>(register_url, data)
      .pipe(map((res: AuthResponseInterface) => res.user));
  }
}
