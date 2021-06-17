import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GalleryComponent} from "../gallery/gallery.component";
import {ImageInfoComponent} from "../image-info/image-info.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'page/:page', component: GalleryComponent},
  {path: '', redirectTo:'page/1', pathMatch: 'full'},
  {path: 'image/:id', component: ImageInfoComponent},
  {path: 'unknown', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GalleryRoutingModule { }
