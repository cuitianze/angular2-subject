import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from './hero';

@Component({
  // selector: 'my-hero-detail',
  template: `
    <div id="study">
      <div class="title-wrap">
        <h2 class="title">留学</h2>
        <img class="study-rabbit" src="./images/study-rabbit.png" />
        <div class="study-tip">
          <p>第一次坐飞机<br/>好激动！</p>
        </div>
      </div>
      <div class="body">
        <div class="slider-wrap">
          <img src="./images/study-slider.png"/>
        </div>
        <div class="school-menu">
          <img src="./images/study-menu.png"/>
          <a [routerLink]="['Home']"></a>
          <a [routerLink]="['Home']"></a>
          <a [routerLink]="['Home']"></a>
        </div>
        <div class="company-info">
          <img src="./images/company-info.png"/>
        </div>
      </div>
    </div>
  `,
  styles: [`
    #study {
      padding: 10px 110px;
    }
    #study .title-wrap {
      position: relative;
      height: 222px;
      margin-top: 50px;
      padding: 1px;
    }
    #study .title-wrap .title {
      float: left;
      width: 318px;
      height: 196px;
      margin-right: 22px;
      line-height: 226px;
      text-align: center;
      font-size: 60px;
      color: #eafca4;
      background: url('./images/video-cloud.png');
      background-size: contain;
    }
    #study .title-wrap .study-rabbit {
      position: absolute;
      bottom: 0;
      right: -100px;
      width: 292px;
      height: 262px;
    }
    #study .title-wrap .study-tip {
      position: absolute;
      top: -30px;
      right: 200px;
      width: 282px;
      height: 152px;
      background: url('./images/study-tip.gif') no-repeat;
      background-size: contain;
    }
    #study .title-wrap .study-tip p {
      margin-top: 30px;
      margin-left: 66px;
      width: 150px;
      height: 80px;
      font-size: 1.2em;
      line-height: 1.5em;
    }

    #study .body {
      margin-left: -40px;
    }

    #study .slider-wrap {
      margin-top: 30px;
    }
    #study .slider-wrap img {
      width: 972px;
      height: 462px;
    }

    #study .school-menu {
      position: relative;
      margin-left: -30px;
    }
    #study .school-menu img {
      width: 1024px;
      height: 695px;
    }
    #study .school-menu a {
      display: inline-block;
      width: 222px;
      height: 130px;
      position: absolute;
      right: 96px;
      cursor: pointer;
      background: red;
      opacity: 0.5;
    }
    #study .school-menu a:nth-child(0) {
      top: 93px;
    }
    #study .school-menu a:nth-child(1) {
      top: 193px;
    }
    #study .school-menu a:nth-child(2) {
      top: 293px;
    }
    #study .company-info {
      margin-left: -30px;
    }
  `
  ],
  directives: [ROUTER_DIRECTIVES]
})

export class StudyComponent {
  // public hero: Hero;
};
