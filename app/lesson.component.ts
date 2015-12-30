import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
  template: `
    <div id="lesson">
      <div class="title-wrap">
        <h2 class="title">
          课程
        </h2>
        <div class="lesson-tip">
          <p>自由自我的时间安排，足不出户的快捷体验！鳄鱼日语1对1网络在线视频授课小小班！</p>
        </div>
      </div>
      <div class="lesson-content-wrap">
        <div class="lesson-tag-wrap">
          <h2 class="lesson-tag">
            定制日语
          </h2>
        </div>
        <div class="lesson-content">
content
        </div>
      </div>

      <div class="current-privileges">
        <img src="./images/lesson-cat.png" class="lesson-cat"/>
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
      line-height: 226px;
      text-align: center;
      font-size: 60px;
      color: #eafca4;
      background: url('./images/video-cloud.png');
      background-size: contain;
    }
    #lesson .title-wrap .lesson-tip {
      position: absolute;
      top: -26px;
      right: -50px;
      width: 434px;
      height: 158px;
      border-radius: 30px;
      background: #82bcdc;
      padding: 30px;
      line-height: 1.5em;
      font-size: 32px;
    }

    #lesson .lesson-content-wrap {
      position: relative;
      width: 828px;
      padding: 30px 20px;
      background-image: url('./images/lesson-yellow-bg.png');
    }
    #lesson .lesson-content {
      min-height: 396px;
      background: #404040;
    }
    #lesson .lesson-tag-wrap {
      position: absolute;
      top: 30px;
      left: -105px;
    }
    #lesson .lesson-tag {
      width: 124px;
      height: 88px;
      margin-top: 30px;
      line-height: 88px;
      text-align: center;
      font-size: 24px;
      background: #9ce159;
      cursor: pointer;
    }

    #lesson .current-privileges {
      position: relative;
      height: 430px;
    }
    #lesson .lesson-cat {
      position: absolute;
      top: 40px;
      left: -30px;
      width: 208px;
      height: 288px;
    }
  `
  ]
})

export class LessonComponent {
  // public hero: Hero;
};
