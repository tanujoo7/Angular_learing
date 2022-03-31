import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { CustomValidators } from './custom-validators'

@Component({
  selector: 'app-assignment-reactive-forms',
  templateUrl: './assignment-reactive-forms.component.html',
  styleUrls: ['./assignment-reactive-forms.component.css'],
})
export class AssignmentReactiveFormsComponent implements OnInit {
  assignmentForm: FormGroup
  projectStatus = ['Stable', 'Critical', 'Finished']
  constructor() {}

  ngOnInit(): void {
    this.assignmentForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required,CustomValidators.invalidProjectName],
        this.forbiddenProjectName,
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('Finished'),
    })
  }

  forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'tester') {
          resolve({
            projectNameIsForbidden: true,
          })
        } else {
          resolve(null)
        }
      }, 2000)
    })
    return promise
  }

  letsSubmiteForm() {
    console.log(this.assignmentForm.value)
  }
}
