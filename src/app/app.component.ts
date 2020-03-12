import { Component } from '@angular/core';
import { ImageViewerConfig, CustomImageEvent } from 'angular-x-image-viewer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-image-viewer';
  images = [
    `https://sls-app-resources-bucket.s3.us-east-2.amazonaws.com/temp/1.2M.png?q=${1}`,
    `https://sls-app-resources-bucket.s3.us-east-2.amazonaws.com/temp/520K.png?q=${2}`,
    `https://sls-app-resources-bucket.s3.us-east-2.amazonaws.com/temp/43.6K.png?q=${3}`,
    `https://sls-app-resources-bucket.s3.us-east-2.amazonaws.com/temp/16M.jpg?q=${4}`,
    'https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg',
    'https://www.askideas.com/media/10/Funny-Goat-Closeup-Pouting-Face.jpg'
  ];

  imageIndexOne = 0;

  config: ImageViewerConfig = { customBtns: [{ name: 'print', icon: 'fa fa-print' }, { name: 'link', icon: 'fa fa-link' }] };

  handleEvent(event: CustomImageEvent) {
    console.log(`${event.name} has been click on img ${event.imageIndex + 1}`);

    switch (event.name) {
      case 'print':
        console.log('run print logic');
        break;
    }
  }
}
