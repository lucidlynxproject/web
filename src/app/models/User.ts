export class User {
  _id?: string = '';
  email: string = '';
  verify?: boolean = false;
  password: string = '';
  authToken?: string = '';
  refreshToken?: string = '';
  recoveryToken?: string = '';
  username?: string = '';

  constructor(user?: User) {
    if (user) {
      this._id = user._id;
      this.email = user.email;
      this.verify = user.verify;
      this.password = user.password;
      this.authToken = user.authToken;
      this.refreshToken = user.refreshToken;
      this.recoveryToken = user.recoveryToken;
      this.username = user.username;
    }
  }
}
