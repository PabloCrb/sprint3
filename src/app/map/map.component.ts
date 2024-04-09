import {Component, OnInit} from '@angular/core';
import  * as L from 'leaflet';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{

  map:any;
  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap() {
    this.map = L.map('map').setView([0,0],13);
    const openstreetmap = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
      });
    const openstreetmapHot = L.tileLayer(
      'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        maxZoom: 20
      });
    var allOptions = {
      "Open streetmap": openstreetmap,
      "Open streetmap: Hot": openstreetmapHot
    };

    L.control.layers(allOptions).addTo(this.map);
    openstreetmapHot.addTo(this.map);
  }
}
