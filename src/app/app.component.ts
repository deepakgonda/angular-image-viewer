import { Component } from '@angular/core';
import { ImageViewerConfig, CustomImageEvent } from '@hreimer/angular-image-viewer';


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

  config: ImageViewerConfig = {
      btnContainerClass: 'other',
      btnClass: 'btn btn-hover-primary px-1',
      btnSubClass: 'material-icons font-size-xl',
      zoomFactor: 0.1,
      containerBackgroundColor: '#ccc',
      wheelZoom: false,
      allowFullscreen: true,
      allowKeyboardNavigation: true,
      btnShow: {
        zoomIn: true,
        zoomOut: true,
        rotateClockwise: true,
        rotateCounterClockwise: true,
        next: false,
        prev: false,
        reset: true
      },
      btnIcons: {
        zoomIn: {
          text: 'zoom_in'
        },
        zoomOut: {
          text: 'zoom_out'
        },
        rotateClockwise:  {
          text: 'rotate_right'
        },
        rotateCounterClockwise:  {
          text: 'rotate_left'
        },
        next:  {
          text: 'arrow_right'
        },
        prev:  {
          text: 'arrow_left'
        },
        fullscreen:  {
          text: 'fullscreen'
        },
        reset:  {
          text: 'restore'
        },
    },
    customBtns: [
      {
        name: 'print',
        icon:
          {
            text: 'print'
          }
      },
      {
        name: 'link',
        icon:
        {
          text: 'link'
        }
      }
    ]
  };

  handleEvent(event: CustomImageEvent) {
    console.log(`${event.name} has been clicked on img ${event.imageIndex + 1}`);

    switch (event.name) {
      case 'print':
        console.log('run print logic');
        break;
    }
  }
}
