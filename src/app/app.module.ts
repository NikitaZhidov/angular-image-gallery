import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { GalleryComponent } from './gallery/gallery.component';
import { ImageInfoComponent } from './image-info/image-info.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { PaginationComponent } from './pagination/pagination.component';
import { GalleryRoutingModule } from './gallery-routing/gallery-routing.module';
import {PreloaderComponent} from "./preloader/preloader.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageInfoComponent,
    GalleryItemComponent,
    PaginationComponent,
    PreloaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GalleryRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{
}
