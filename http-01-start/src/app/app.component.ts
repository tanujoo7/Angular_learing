import { Component, OnDestroy, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Post } from './post.model'
import { PostsService } from './posts.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit,OnDestroy {
  loadedPosts: Post[] = []
  isDataFetching = false
  postDeleted = false
  error = null
  private removeErrorSubscription: Subscription

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.error.subscribe((errorMessage) => {
      this.isDataFetching=false
      this.error = errorMessage
    })

    this.isDataFetching = true
    this.postsService.fetchPosts().subscribe((posts) => {
      this.isDataFetching = false
      this.loadedPosts = posts
     
    })
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    this.isDataFetching = true
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isDataFetching = false
        this.loadedPosts = posts
      },
      (error) => {
        this.isDataFetching=false

        this.error = error.message
      },
    )
  }

  onClearPosts() {
    // Send Http request
    this.postDeleted = true
    this.postsService.deletePost().subscribe(() => {
      this.loadedPosts = []
    })
  }
  onHandleError(){
    this.error=null
  }

  ngOnDestroy(){
    this.removeErrorSubscription.unsubscribe()
  }
}
