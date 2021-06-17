import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../gallery.service";

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() img: Image | undefined;
  compressedImgUrl: string = "https://picsum.photos/id";

  private defaultImageWidth: number = 300;
  private defaultImageHeight: number = 250;

  constructor() {
  }

  ngOnInit(): void {
    this.compressedImgUrl += `/${this.img?.id}/${this.defaultImageWidth}/${this.defaultImageHeight}`
  }

}
