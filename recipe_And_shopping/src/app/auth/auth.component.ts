import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { AlertComponet } from '../shared/alert/alert.component'
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive'

import { AuthService } from './auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true
  isLoading = false
  error: string = null
  success: string = null
  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective

  constructor(
    private authService: AuthService,
    private route: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }
    this.isLoading = true
    if (this.isLoginMode) {
      const email_address = form.value.email
      const password = form.value.password
      this.authService.login(email_address, password).subscribe(
        (responseData) => {
          if (responseData.success === false) {
            this.error = responseData.message
          } else {
            console.log(responseData)
            this.success = responseData.message
            this.route.navigate(['/recipes'])
          }
          this.isLoading = false
        },
        (error) => {
          console.log(error)
          this.error = 'An error Occured'
          this.isLoading = false
        },
      )
    } else {
      const displayName = form.value.displayName
      const email_address = form.value.email
      const mobile_Number = form.value.mobile_Number
      const password = form.value.password

      this.authService
        .signUp(displayName, email_address, mobile_Number, password)
        .subscribe(
          (responseData) => {
            if (responseData.success === false) {
              this.error = responseData.message
            } else if (responseData.success == true) {
              this.success = 'Successfully signUp!'
            }
            console.log(responseData)
            this.isLoading = false
          },
          (error) => {
            console.log(error)
            this.error = 'An error Occured'
            this.showErrorAlert(error)
            this.isLoading = false
          },
        )
    }
    form.reset()
  }

  private showErrorAlert(message: string) {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponet,
    )
    const hostViewContainerRef = this.alertHost.viewContainerRef
    hostViewContainerRef.clear();

    hostViewContainerRef.createComponent(alertCmpFactory)
  }

  onHandleError() {
    this.error = null
  }
}
