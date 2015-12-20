import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
  // selector: 'my-hero-detail',
  template: `
    <div id="video">
      <div class="title-wrap">
        <h2 class="title">视频</h2>
        <img class="video-pop" src="./images/video-pop.png" />
        <div class="video-tip">
          <p>鳄鱼日语系列节目！记得带爆米花哟！嗷！</p>
        </div>
      </div>
      <div class="content">
        <ul>
          <li *ngFor="#video of videos"></li>
        </ul>
      </div>
    </div>

  `,
  styles: [`
  #video {
    padding: 10px 110px;
  }
  #video .title-wrap {
    position: relative;
    height: 222px;
    margin-top: 50px;
    padding: 1px;
  } 
  #video .title-wrap .title {
    float: left;
    width: 318px;
    height: 196px;
    margin-right: 22px;
    line-height: 196px;
    text-align: center;
    background: url('./images/video-cloud.png');
    background-size: contain;
  }
  #video .title-wrap .video-pop {
    float: left;
    width: 216px;
    height: 222px;
  }
  #video .title-wrap .video-tip {
    position: absolute;
    top: -30px;
    right: -50px;
    width: 284px;
    height: 170px;
    background: url('./images/video-tip.gif');
    background-size: contain;
  }
  #video .title-wrap .video-tip p {
    margin-top: 30px;
    margin-left: 30px;
    width: 220px;
    height: 80px;
  }
  #video .content {
  }
  #video .content ul li{
    width: 804px;
    height: 260px;
    border-radius: 1px;
    opacity: 0.7;
  }
  #video .content ul li:nth-child(1) {
    background: #adc980;
  }
  #video .content ul li:nth-child(2) {
    background: #dfd090;
  }
  #video .content ul li:nth-child(3) {
    background: #ddbe96;
  }
  #video .content ul li:nth-child(4) {
    background: #dfb47c;
  }
  `
  ]
})

export class VideoComponent {
  // public hero: Hero;
  videos = [1, 2, 3, 4]
};
