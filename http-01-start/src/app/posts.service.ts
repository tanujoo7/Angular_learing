import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

import { Injectable } from '@angular/core'

import { Post } from './post.model'
import { map } from 'rxjs/operators'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>()
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content }
    this.http
      .post<{ name: string }>(
        'https://angularpractice-5c51e-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          observe:'response'
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData)
        },
        (error) => {
          this.error.next(error.message)
        },
      )
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://angularpractice-5c51e-default-rtdb.firebaseio.com/posts.json'
        // {
        //   headers: new HttpHeaders({'checking-Headers': 'done'}),
        //   params:new HttpParams().set('print','pretty')
        // },
      )
      .pipe(
        map((responseData) => {
          const holdArray: Post[] = []
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              holdArray.push({ id: key, ...responseData[key] })
            }
          }
          return holdArray
        }),
      )
  }

  deletePost() {
    return this.http.delete(
      'https://angularpractice-5c51e-default-rtdb.firebaseio.com/posts.json',
    )
  }
}
