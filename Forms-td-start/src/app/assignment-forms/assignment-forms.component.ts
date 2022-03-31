import { Component, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-assignment-forms',
  templateUrl: './assignment-forms.component.html',
  styleUrls: ['./assignment-forms.component.css'],
})
export class AssignmentFormsComponent {
  @ViewChild('f', { static: false }) assignmentForm: NgForm
  defaultSubscription = 'advanced'
  Subscriptions = ['basic', 'advanced', 'pro']
  submitted = false
  user = {
    email: '',
    password: '',
    selectedSubscription: '',
  }

  suggestEmail() {
    const suggestedEmail = 'jonDoe983@gmail.com'
    this.assignmentForm.form.patchValue({
      userD: {
        email: suggestedEmail,
      },
    })
  }

  onSubmit() {
    this.submitted = true
    this.user.email = this.assignmentForm.value.userD.email
    this.user.password = this.assignmentForm.value.userD
    this.user.selectedSubscription = this.assignmentForm.value.subscription
  }

  reset(){
    this.assignmentForm.reset();
  }
}
