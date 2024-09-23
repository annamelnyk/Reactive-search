import { Routes } from '@angular/router'
import { UserPostsComponent } from './components/user-posts/user-posts.component'
import { UsersListComponent } from './components/users-list/users-list.component'

export const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent
  },
  { path: 'users/:id', component: UserPostsComponent },
  { path: 'posts', component: UserPostsComponent },
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
]
