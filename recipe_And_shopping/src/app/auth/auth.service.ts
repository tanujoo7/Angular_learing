import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { tap } from 'rxjs/operators'
import { User } from './user.model'

interface AuthResponseData {
  success: boolean
  message: string
  userId: string
}

export interface LoginResponseData {
  email: string
  userId: string
  token: string
  message: string
  expiresIn: string
  success: boolean
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null)
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router) {}

  signUp(
    displayName: string,
    email_address: string,
    mobile_Number: string,
    password: string,
  ) {
    return this.http.post<AuthResponseData>(
      'http://localhost:1001/user/signup',
      {
        displayName: displayName,
        email_address: email_address,
        mobile_Number: mobile_Number,
        password: password,
      },
    )
  }

  login(email_address: string, password: string) {
    return this.http
      .post<LoginResponseData>('http://localhost:1001/user/login', {
        email_address: email_address,
        password: password,
      })
      .pipe(
        tap((responseData) => {
          this.handleAuthentication(
            responseData.email,
            responseData.userId,
            responseData.token,
            +responseData.expiresIn,
          )
        }),
      )
  }

  private handleAuthentication(email, userId, token, expiresIn) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
    const user = new User(email, userId, token, expirationDate)
    this.user.next(user)
    localStorage.setItem('userData', JSON.stringify(user))
  }

  autoLogin() {
    const userData: {
      email: string
      id: string
      _token: string
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'))
    if (!userData) {
      return
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate),
    )
    if (loadedUser.token) {
      this.user.next(loadedUser)
      const expirationDuration =
      new Date(userData._tokenExpirationDate).getTime() -
      new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logOut() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }


  autoLogout(expirationDuration:number){
      setTimeout(()=>{
        this.logOut()
      },expirationDuration)
  }
}


