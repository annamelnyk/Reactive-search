import { Routes } from '@angular/router'
import { UserPostsComponent } from './components/user-posts/user-posts.component'
import { UsersListComponent } from './components/users-list/users-list.component'

export const routes: Routes = [
  { path: '', component: UsersListComponent, pathMatch: 'full' },
  { path: 'posts', component: UserPostsComponent }
]
