import {Component} from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import {Hero} from './hero';

@Component({
  // selector: 'my-hero-detail',
  template: `
    <div id="content">
      <div class="left">
        <div class="slider">
          <carousel [interval]="intervalTime" [noWrap]="noWrapSlides">
            <slide *ngFor="#slidez of slides; #index=index" [active]="slidez.active">
              <img [src]="slidez.image" style="margin: auto"/>
            </slide>
          </carousel>
        </div>
        <div class="aboutus">
          <h2 class="title">关于我们</h2>
        </div>
      </div>
      <div class="right">
        <a [routerLink]="['Lesson']">查看更多>></a>
        <img src="./images/home-lesson.png"/>
      </div>
    </div>
    <div id="teachers-wrap">
      <h2 class="title">教师<br>介绍</h2>
      <img class="teacher-1" src="./images/teacher-1.png">
      <img class="teacher-2" src="./images/teacher-2.png">
      <img class="teachers" src="./images/teachers.png">
    </div>
    <div id="comment">
      <h2 class="title"><span>留言</span></h2>
    </div>
  `,
  styles: [`
    /* 首页主体 */
    #content {
      margin-top: 30px;
    }
    #content:after {
      display: block;
      content: '';
      clear: both;
    }
    /* 左侧 */
    #content .left {
      float: left;
      width: 454px;
      margin-left: 116px;
    }
    /* 轮播图 */
    #content .left .slider {
      width: 452px;
      height: 226px;
      padding-top: 9px;
      padding-left: 13px;
      padding-right: 6px;
      background: url('./images/slide-bg.png');
    }
    #content .left .slider img {
      width: 433px;
      height: 210px;
      border-radius: 30px;
    }
    #content .left .slider .carousel .carousel-control {
      background: none !important;
    }
    #content .left .aboutus{
      width: 450px; /*452-15*2*/
      height: 202px; /*228-12*2*/
      margin-top: 18px;
      padding: 12px 15px;
      border-radius: 30px;
      background: #dacc89;
      opacity: 0.7;
      /*background: url('./images/aboutus-bg.png');*/
    }
    #content .left .aboutus .title{
      width: 136px;
      height: 72px;
      line-height: 72px;
      text-align: center;
      font-size: 24px;
      background: url('./images/aboutus-title.png');
    }
    #content .right {
      position: relative;
      float: right;
      width: 338px;
      height: 472px;
      margin-right: 112px;
      border-radius: 30px;
      background: #85acb8;
      opacity: 0.7;
    }
    #content .right a {
      position: absolute;
      top: 8px;
      right: 10px;
      color: #000;
    }
    #content .right img {
      margin-top: 10px;
      margin-left: 10px;
      width: 320px;
      height: 450px;
    }
    /* 教师介绍 */
    #teachers-wrap {
      position: relative;
      margin-left: 116px;
      height: 300px;
    }
    #teachers-wrap .title{
      position: absolute;
      top: 10px;
      left: -20px;
      // width: 46px;
      // height: 46px;
      padding: 30px 32px;
      line-height: 26px;
      text-align: center;
      font-size: 23px;
      background: url('./images/teacher-title.png');
    }
    #teachers-wrap .teachers {
      position: absolute;
      left: 54px;
      bottom: 0;
      width: 804px;
      height: 214px;
    }
    #teachers-wrap .teacher-1 {
      position: absolute;
      bottom: 0;
      left: -30px;
      width: 134px;
      height: 152px;
      z-index: 1;
    }
    #teachers-wrap .teacher-2 {
      position: absolute;
      top: 60px;
      left: 82px;
      width: 126px;
      height: 86px;
      z-index: 1;
    }
    /* 留言 */
    #comment {
      width: 748px; /*808-30*2*/
      height: 558px; /*618-30*2*/
      margin: 30px auto;
      padding: 10px;
      border-radius: 50px;
      background: #e0c5a4;
      opacity: 0.7;
    }
    #comment .title {
      width: 255px;
      height: 168px;
      font-size: 21px;
      background: url('./images/comment-title.png') no-repeat;
      background-size: contain;
      position: relative;
    }
    #comment .title span {
      position: absolute;
      top: 76px;
      left: 22px;
    }
  `],
  directives: [ROUTER_DIRECTIVES, CAROUSEL_DIRECTIVES, CORE_DIRECTIVES]
})

export class HomeComponent {
  // public hero: Hero;
  private intervalTime:number = 5000;
  private noWrapSlides:boolean = false;
  private slides:Array<any> = [];

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }
  private addSlide() {
    let imageNum = this.slides.length + 1;
    this.slides.push({
      image: `./images/homepage/首页图片${imageNum}.jpg`,
      text: ``
    });
  }

};
