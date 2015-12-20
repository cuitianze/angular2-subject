import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
  // selector: 'my-hero-detail',
  template: `
    <div id="content">
      <div class="left">
        <div class="slide">
          
        </div>
        <div class="aboutus">
          <h2 class="title">关于我们</h2>
        </div>
      </div>
      <div class="right">
        
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
    #content .left .slide {
      width: 452px;
      height: 226px;
      background: url('./images/slide-bg.png');
    }
    #content .left .aboutus{
      width: 422px; /*452-15*2*/
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
      background: url('./images/aboutus-title.png');
    }
    #content .right {
      float: right;
      width: 338px;
      height: 472px;
      margin-right: 112px;
      border-radius: 30px;
      background: #85acb8;
      opacity: 0.7;
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
      width: 46px;
      height: 46px;
      padding: 30px 32px;
      line-height: 26px;
      text-align: center;
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
      background: url('./images/comment-title.png') no-repeat;
      background-size: contain;
      position: relative;
    }
    #comment .title span {
      position: absolute;
      top: 76px;
      left: 22px;
    }
  `
  ]
})

export class HomeComponent {
  // public hero: Hero;
};
