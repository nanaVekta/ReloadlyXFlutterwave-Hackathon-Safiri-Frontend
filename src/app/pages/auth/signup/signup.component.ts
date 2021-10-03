import { PasswordValidator } from './../../../validators/password.validator';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  form: FormGroup;
  submitted = false;
  responseData: any;
  focused = false;
  focused1 = false;
  focused2 = false;
  focused3 = false;
  private subscriptions = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private ngxuiloader: NgxUiLoaderService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
 ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      last_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      password_confirmation: ['', [Validators.required, PasswordValidator.equalTo]],
    });

  }

  get f() { return this.form.controls; }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.ngxuiloader.start();

    this.subscriptions.add(
      this.authService.register(this.form.value).subscribe(
        (response) => {
          this.ngxuiloader.stop();
          this.responseData = response;
          if(this.responseData.status === 200){
            this.authService.addData(this.responseData.body);
            const safiriSwal = Swal.mixin({
              customClass: {
                confirmButton: 'btn btn-primary safiri-btn',
                cancelButton: 'btn btn-danger'
              },
              buttonsStyling: false
            });

            safiriSwal.fire({
              title: 'Awesome',
              text: 'You can now proceed to save for your vacation',
              icon: 'success',
              confirmButtonText: 'Proceed',
              showCancelButton: false,
              padding: '2em 5em',
              backdrop: `rgba(0,0,0,0.8)`,
              iconColor: `rgba(6,146,196,1)`,
              allowEscapeKey: false,
              allowOutsideClick: false
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/auth/account-setup']);
              }
            });
          }
          else{
            this.toastr.error('An error occured. Try again later', 'Error');
          }

        },
        (error) => {
          this.ngxuiloader.stop();
          this.toastr.error(error.error);
          console.log(error.error);
        }
      )
    );
  }
}
