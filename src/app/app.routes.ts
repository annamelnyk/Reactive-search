import { Routes } from '@angular/router'
import { UserPostsComponent } from './components/user-posts/user-posts.component'
import { UsersListComponent } from './components/users-list/users-list.component'

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    component: UsersListComponent,
    children: [{
      path: ':id',
      component: UserPostsComponent
    }]
  },
  { path: 'posts', component: UserPostsComponent }
]
