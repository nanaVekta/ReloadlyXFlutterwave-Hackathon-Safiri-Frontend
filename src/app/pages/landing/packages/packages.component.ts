import { LocationService } from 'src/app/services/location.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit, OnDestroy {

  locations: any;
  hasData = false;
  responseData: any;
  private subscriptions = new Subscription();

  constructor(
    private locationService: LocationService,
    private ngxuiloader: NgxUiLoaderService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.ngxuiloader.start();
    const locationSubscription = this.locationService.getLocations().subscribe(
      (data) => {
        this.responseData = data;
        console.log(this.responseData.body.data);
        this.locations = this.responseData.body.data;
        if(this.locations.length > 0){
          this.hasData = true;
        }
        this.ngxuiloader.stop();
      },
      (error) => {
        this.toastrService.error('An error occured! Try again');
        console.log(error);
        this.ngxuiloader.stop();
      }
    );
    this.subscriptions.add(locationSubscription)
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }
}
