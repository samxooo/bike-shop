import { Component, OnInit } from '@angular/core';
import { BikeService } from '../services/bike.service';
import { Bikes } from '../shared/Bikes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  bikes: Bikes[] = [];

  constructor(private bikeService: BikeService) {}

  ngOnInit(): void {
    this.bikes = this.bikeService.getAll();
  }

}
