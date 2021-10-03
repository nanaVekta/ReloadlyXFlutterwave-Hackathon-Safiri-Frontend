import { LocationService } from 'src/app/services/location.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Location } from 'src/app/models/location';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit, OnDestroy {

  locationId: string;
  responseData: any;
  location: Location;
  hasData = false;
  private subscriptions = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngxuiloader: NgxUiLoaderService,
    private toastr: ToastrService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.locationId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getlocation(this.locationId);
  }

  getlocation(id) {
    this.ngxuiloader.start();
    this.subscriptions.add(this.locationService.getLocation(id).subscribe(
      (response: any) => {
        this.responseData = response.body;
        this.location = this.responseData;
        console.log(this.location);
        this.hasData = true;
        this.ngxuiloader.stop();
      },
      error => {
        this.toastr.error(error.error.message);
        this.ngxuiloader.stop();
      }
    ));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
