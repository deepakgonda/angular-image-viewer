import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularImageViewerComponent } from './angular-image-viewer.component';
import { FullScreenDirective } from './directives/full-screen.directive';
// import { ImageViewerConfig } from 'dist/angular-image-viewer/public-api';



@NgModule({
  declarations: [AngularImageViewerComponent, FullScreenDirective],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [AngularImageViewerComponent, FullScreenDirective]
})
export class AngularImageViewerModule {
  /**
   * forRoot
   * @returns A module with its provider dependencies
   */
  // static forRoot(imageViewerConfig: ImageViewerConfig): ModuleWithProviders {
  //   return {
  //     ngModule: AngularImageViewerModule,
  //     providers: [
  //       {
  //         provide: imageViewerConfig,
  //         useValue: imageViewerConfig
  //       }
  //     ]
  //   };
  // }
}
