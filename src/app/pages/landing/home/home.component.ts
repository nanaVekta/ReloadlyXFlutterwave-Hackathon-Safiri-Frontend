import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

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
    this.getFeaturedLocations();
  }

  getFeaturedLocations() {
    this.ngxuiloader.start();
    const featuredSubscription = this.locationService.getFeaturedLocations().subscribe(
      (data) => {
        this.responseData = data;
        this.locations = this.responseData.body;
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
    this.subscriptions.add(featuredSubscription)
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }
}
