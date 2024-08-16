import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { librarySource, AllUsers, UserList } from '@test-public-npmjs-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
  source: string = librarySource;
  userList: UserList[] = AllUsers;
}
