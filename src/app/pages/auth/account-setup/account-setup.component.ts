import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.scss']
})
export class AccountSetupComponent implements OnInit, OnDestroy {

  // json data of all countries in Africa
  countries = [
      {
        "name": "Algeria"
      },
      {
        "name": "Angola"
      },
      {
        "name": "Benin"
      },
      {
        "name": "Botswana"
      },
      {
        "name": "Burkina Faso"
      },
      {
        "name": "Burundi"
      },
      {
        "name": "Cabo Verde"
      },
      {
        "name": "Cameroon"
      },
      {
        "name": "Central African Republic"
      },
      {
        "name": "Chad"
      },
      {
        "name": "Comoros"
      },
      {
        "name": "Democratic Republic of the Congo"
      },
      {
        "name": "Republic of the Congo"
      },
      {
        "name": "Cote D'Ivoire"
      },
      {
        "name": "Djibouti"
      },
      {
        "name": "Egypt"
      },
      {
        "name": "Equatorial Guinea"
      },
      {
        "name": "Eritrea"
      },
      {
        "name": "Ethiopia"
      },
      {
        "name": "Gabon"
      },
      {
        "name": "Ghana"
      },
      {
        "name": "Gambia"
      },
      {
        "name": "Guinea"
      },
      {
        "name": "Guinea-Bissau"
      },
      {
        "name": "Kenya"
      },
      {
        "name": "Lesotho"
      },
      {
        "name": "Liberia"
      },
      {
        "name": "Libya"
      },
      {
        "name": "Madagascar"
      },
      {
        "name": "Malawi"
      },
      {
        "name": "Mali"
      },
      {
        "name": "Mauritania"
      },
      {
        "name": "Mauritius"
      },
      {
        "name": "Morocco"
      },
      {
        "name": "Mozambique"
      },
      {
        "name": "Namibia"
      },
      {
        "name": "Niger"
      },
      {
        "name": "Nigeria"
      },
      {
        "name": "Rwanda"
      },
      {
        "name": "Sao Tome And Principe"
      },
      {
        "name": "Senegal"
      },
      {
        "name": "Seychelles"
      },
      {
        "name": "Sierra Leone"
      },
      {
        "name": "Somalia"
      },
      {
        "name": "South Africa"
      },
      {
        "name": "South Sudan"
      },
      {
        "name": "Sudan"
      },
      {
        "name": "Eswatini"
      },
      {
        "name": "Tanzania"
      },
      {
        "name": "Togo"
      },
      {
        "name": "Tunisia"
      },
      {
        "name": "Uganda"
      },
      {
        "name": "Zambia"
      },
      {
        "name": "Zimbabwe"
      }

  ];

  form: FormGroup;
  submitted = false;
  responseData: any;
  focused = false;
  focused1 = false;
  focused2 = false;
  focused3 = false;
  focused4 = false;
  focused5 = false;
  focused6 = false;
  focused7 = false;

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
      destination: ['', [Validators.required]],
      budget: ['', [Validators.required]],
      save_preference: ['', [Validators.required]],
      amount_to_save: ['', [Validators.required]],
      day_of_month: ['', [Validators.required]],
      time_of_day: ['', [Validators.required]],
      source_of_funds: ['', [Validators.required]],
      start: ['', [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.ngxuiloader.start();
    this.subscriptions.add(
      this.authService.addAccount(this.form.value).subscribe(
        (res: any) => {
          this.responseData = res;
          this.ngxuiloader.stop();
          const safiriSwal = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-primary safiri-btn',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          });

          safiriSwal.fire({
            title: 'Awesome',
            text: 'You’ve successfully set up your savings plan. Proceed to your dashboard',
            icon: 'success',
            confirmButtonText: 'Proceed',
            showCancelButton: false,
            padding: '2em 5em',
            backdrop: `rgba(0,0,0,0.8)`,
            iconColor: `rgba(6,146,196,1)`,
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/dashboard']);
            }
          });
        },
        (err: any) => {
          this.ngxuiloader.stop();
          this.toastr.error(err.error);
          console.log(err.error);
        }
      )
    );
  }
}
