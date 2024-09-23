import { AsyncPipe } from '@angular/common'
import { Component, DestroyRef, inject } from '@angular/core'
import { User } from '../../services/types'
import { Observable } from 'rxjs'
import { BackendService } from '../../services/backend.service'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  isLoading = false
  backendService = inject(BackendService)
  users$: Observable<User[]> = this.backendService.getUsersList()
  destroyRef = inject(DestroyRef)

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true
    this.users$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.isLoading = false
      })
  }

  goToUserPosts(userId: string) {
    console.log({ userId })
    this.router.navigate([userId], { relativeTo: this.activatedRoute })
  }
}
