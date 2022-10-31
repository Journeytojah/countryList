import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

})
export class AppComponent {
    title = 'countryList';
    countryData: any = null;
    filterTerm!: string;
    constructor(private api: ApiService) { }


    
    ngOnInit() {
        this.api.getCountries().subscribe((data) => {
            this.countryData = data;
            this.sortAlphabetically();
        });
    }

    sortAlphabetically() {
        this.countryData.sort((a, b) => a.name.common.localeCompare(b.name.common))
    }

}
