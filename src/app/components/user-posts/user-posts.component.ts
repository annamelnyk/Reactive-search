import { Component } from '@angular/core'
import { AsyncPipe, NgTemplateOutlet } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'
import { distinctUntilChanged, Observable, Subject } from 'rxjs'

import { BackendService } from '../../services/backend.service'
import { Post } from '../../services/types'

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [AsyncPipe, NgTemplateOutlet],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.scss'
})
export class UserPostsComponent {
  private postsSubject = new Subject<Post[]>()
  posts$: Observable<Post[]> = this.postsSubject.asObservable()
  isLoading = false

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) { }

  ngOnInit() {
    this.isLoading = true
    this.activatedRoute.paramMap.subscribe(params => {
      const userId = params.get('id') as string
      console.log(userId)
    })

    this.backendService.getPostsList()
    .pipe(distinctUntilChanged()).subscribe(p => {
      this.isLoading = false
      console.log(p)
      this.postsSubject.next(p)

    })
  }

}
