import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { WhiteSpaceDirective } from './shared/directives/white-space.directive';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent implements OnInit {

  // Declaración de las propiedades 'randomImage' y 'text'
  public randomImage: string;
  public text: string;

  constructor(private dogsService: DogsService) {
    this.randomImage = '';
    this.text = '';
  }

  ngOnInit() {
  }

  getRandomImage() {
    this.randomImage = this.dogsService.getRandomImage();
  }

}
