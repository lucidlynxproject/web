import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { UserService } from 'src/app/services/user.service';
import { ApiTokenService } from 'src/app/services/api-token.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.sass'],
})
export class TokenComponent implements OnInit {
  currentUser?: User;
  currentToken?: string;
  constructor(
    private stateService: StateService,
    private apiTokenService: ApiTokenService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.stateService.currentUser.subscribe((user) => {
      if (user) {
        this.currentUser = user;
        this.currentToken = user.apiToken;
      }
    });
  }

  public async generateApiToken(): Promise<void> {
    await this.apiTokenService.generateApiToken(this.currentUser!.email);
    await this.userService
      .getUser(this.currentUser!._id!)
      .then((res) => (this.currentToken = res.data.apiToken));
  }
}
