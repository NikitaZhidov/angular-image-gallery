import {Component, Input, OnInit} from '@angular/core';
import {GalleryService, Image} from "../gallery.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-image-info',
  templateUrl: './image-info.component.html',
  styleUrls: ['./image-info.component.scss']
})
export class ImageInfoComponent implements OnInit {

  @Input() img: Image | undefined;
  isLoading: boolean = false;

  compressedImgUrl: string = "https://picsum.photos/id";

  private defaultImageWidth: number = 750;
  private defaultImageHeight: number = 450;

  errorMsg: string = '';

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService,
  ) { }

  ngOnInit(): void {
    this.getImage();
  }

  getImage(): void {
    this.isLoading = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.galleryService.getImage(id).subscribe(img => {
      this.img = img;
      this.compressedImgUrl += `/${this.img?.id}/${this.defaultImageWidth}/${this.defaultImageHeight}`;
      this.isLoading = false;
    }, err => this.errorMsg = err)
  }
}
