import { Component, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'

import { Observable } from 'rxjs'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female']
  signupForm: FormGroup
  // emailIsForbidden:false

  ngOnInit() {
    this.signupForm = new FormGroup({
      userD: new FormGroup({
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmails),
      }),
      gender: new FormControl(null, Validators.required),
      hobbies: new FormArray([]),
    })
    // this.signupForm.statusChanges.subscribe((status)=>{
    //     console.log(status)
    // })
    this.signupForm.valueChanges.subscribe((value)=>{
      console.log(value)
    })
  }

  letsSubmiteForm() {
    console.log(this.signupForm)
  }
 onAddHobbies() {
    const data = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(data)
  }
 

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "tanujg93@gmail.com") {
          resolve({ emailIsForbidden: true })
        }else{
          resolve(null);
        }
      }, 1000)
    })
    return promise;
  }
}
