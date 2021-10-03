import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.scss']
})
export class AccountSetupComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
