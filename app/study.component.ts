import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
  // selector: 'my-hero-detail',
  template: `
    <div id="lesson">
      <div class="title-wrap">
        <h2 class="title">留学</h2>
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
    #lesson {
      padding: 10px 110px;
    }
    #lesson .title-wrap {
      position: relative;
      height: 222px;
      margin-top: 50px;
      padding: 1px;
    }
    #lesson .title-wrap .title {
      float: left;
      width: 318px;
      height: 196px;
      margin-right: 22px;
      line-height: 196px;
      text-align: center;
      background: url('./images/video-cloud.png');
      background-size: contain;
    }
    #lesson .title-wrap .video-pop {
      float: left;
      width: 216px;
      height: 222px;
    }
    #lesson .title-wrap .video-tip {
      position: absolute;
      top: -30px;
      right: -50px;
      width: 284px;
      height: 170px;
      background: url('./images/video-tip.gif');
      background-size: contain;
    }
    #lesson .title-wrap .video-tip p {
      margin-top: 30px;
      margin-left: 30px;
      width: 220px;
      height: 80px;
    }
  `
  ]
})

export class StudyComponent {
  // public hero: Hero;
};
