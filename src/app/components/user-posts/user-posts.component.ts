import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { distinctUntilChanged } from 'rxjs'

import { BackendService } from '../../services/backend.service'

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.scss'
})
export class UserPostsComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const userId = params.get('id') as string
      console.log(userId)
    })

    const posts$ = this.backendService.getPostsList()
    posts$.pipe(distinctUntilChanged()).subscribe(p => console.log(p))
  }

}
