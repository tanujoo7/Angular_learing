import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild('formD') loginForm: NgForm
  // defaultQuestion = 'school'
  // Answer = ''
  // genders = ['male', 'female']
  // user = {
  //   username: '',
  //   email: '',
  //   secret: '',
  //   questionAnswer: '',
  //   gender: '',
  // }

  // submitted = false

  // suggestUserName() {
  //   const suggestedName = 'Superuser'
  //   // this.loginForm.setValue({
  //   //   userData:{
  //   //     username:suggestedName,
  //   //     email:''
  //   //   },
  //   //   secret:'pet',
  //   //   questionAnswer:'',
  //   //   gender:'male'
  //   // })
  //   this.loginForm.form.patchValue({
  //     userData: {
  //       username: suggestedName,
  //     },
  //   })
  // }

  // onSubmit() {
  //   this.submitted = true
  //   this.user.username = this.loginForm.value.userData.username
  //   this.user.email = this.loginForm.value.userData.email
  //   this.user.secret = this.loginForm.value.secret
  //   this.user.questionAnswer = this.loginForm.value.questionAnswer
  //   this.user.gender = this.loginForm.value.gender
  // }
}
