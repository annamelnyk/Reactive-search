import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserPostsComponent } from "./components/user-posts/user-posts.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserPostsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive-search';
}
