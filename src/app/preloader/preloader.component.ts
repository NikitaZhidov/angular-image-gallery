import {Component} from '@angular/core';

@Component({
  selector: 'app-preloader',
  template: `
    <div class="preloader-wrapper">
      <div class="preloader"></div>
    </div>
  `,
  styles: [`
    .preloader-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .preloader {
      width: 100px;
      height: 100px;
      border-radius: 10em;

      border: 12px solid #ebeff0;
      border-top: 12px solid #bfefff;
      animation: preloaderAnimation 2s linear infinite;
    }

    @keyframes preloaderAnimation {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `]
})

export class PreloaderComponent {};
