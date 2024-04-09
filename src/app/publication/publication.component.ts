import {AfterViewInit, Component, OnInit} from '@angular/core';import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {CommonModule} from "@angular/common";
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-publication',
  imports: [
    HeaderComponent,
    FooterComponent,
    MapComponent
  ],
  templateUrl: './publication.component.html',
  standalone: true,
  styleUrl: './publication.component.css'
})
export class PublicationComponent implements AfterViewInit{
  images = [
    '../../assets/Landscapes/dadad58b-e68d-4509-b312-07c1072c09ef_16-9-aspect-ratio_default_0 - copia.jpg',
    '../../assets/Landscapes/Galeria-Las-Canteras-01_0 - copia.jpg',
    '../../assets/Landscapes/osorio-deco1 - copia.jpg',
    '../../assets/Landscapes/Roque-nublo_g - copia.jpg'
  ];
  slideIndex = 1;
  componentId :any;

  ngAfterViewInit(){
    this.initCarousel('.image-carousel-container img')
  }
  showSlides (n:any) {
    const slides = document.querySelectorAll(this.componentId);
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[this.slideIndex - 1].style.display = 'block';
  }

  moveCarousel(n:any) {
    this.showSlides(this.slideIndex += n);
  }

  initCarousel(componentID:any) {
    this.componentId = componentID;
    this.showSlides(this.slideIndex);
  }
}
