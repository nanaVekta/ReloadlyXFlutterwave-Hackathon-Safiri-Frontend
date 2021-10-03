import { User } from './../../../models/user';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  responseData: any;
  focused = false;
  focused1 = false;
  focused2 = false;
  focused3 = false;
  user: User;
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

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
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
      this.authService.login(this.form.value).subscribe(
        (response) => {
          this.ngxuiloader.stop();
          this.responseData = response;
          if(this.responseData.status === 200){
            this.authService.addData(this.responseData.body);
            this.user = this.responseData.body;
            if(this.user.user.account_setted == 1) {
              this.router.navigate(['/dashboard']);
            }
            else {
              this.router.navigate(['/auth/account-setup']);
            }
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
