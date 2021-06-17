import { Component, OnInit } from '@angular/core';
import {GalleryService, Image} from "../gallery.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images: Image[] = [];

  currentPage: number = 1;

  errorMsg: string = '';

  hasNextPage: boolean = false;
  hasPrevPage: boolean = false;

  isLoading: boolean = false;

  constructor(
      private galleryService: GalleryService,
      private route: ActivatedRoute,
      private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.currentPage = Number(this.route.snapshot.paramMap.get('page'));

    if (this.currentPage < 1 || isNaN(this.currentPage)) {
      this.router.navigate(['/unknown'])
      return;
    }

    this.isLoading = true;
    this.hasPrevPage = false;
    this.hasNextPage = false;

    this.galleryService.getImages(this.currentPage).subscribe(images => {
      this.images = images;
      this.isLoading = false;
      this.hasPrevPage = this.galleryService.hasPrevPage;
      this.hasNextPage = this.galleryService.hasNextPage;
    }, err => this.errorMsg = err);
  }

  async selectNextPage() {
    await this.router.navigate([`/page/${this.currentPage + 1}`])
    this.getImages()
  }

  async selectPrevPage() {
    await this.router.navigate([`/page/${this.currentPage - 1}`])
    this.getImages();
  }

  async goToFirstPage() {
    await this.router.navigate([`/page/1`]);
    this.getImages();
  }
}
