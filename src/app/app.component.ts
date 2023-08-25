import { Component, OnInit } from '@angular/core';
import { DogsService } from './dogs.service';
import { WhiteSpaceDirective } from '../app/shared/directives/white-space.directive.directive';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs/dogs.component.html',
  styleUrls: ['./dogs/dogs.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private dogsService: DogsService) {
  }

  ngOnInit() {
  }

  getRandomImage() {
    return this.dogsService.getRandomImage();
  }

}
