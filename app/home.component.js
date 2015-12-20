System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        // selector: 'my-hero-detail',
                        template: "\n    <div id=\"content\">\n      <div class=\"left\">\n        <div class=\"slide\">\n          \n        </div>\n        <div class=\"aboutus\">\n          <h2 class=\"title\">\u5173\u4E8E\u6211\u4EEC</h2>\n        </div>\n      </div>\n      <div class=\"right\">\n        \n      </div>\n    </div>\n    <div id=\"teachers-wrap\">\n      <h2 class=\"title\">\u6559\u5E08<br>\u4ECB\u7ECD</h2>\n      <img class=\"teacher-1\" src=\"./images/teacher-1.png\">\n      <img class=\"teacher-2\" src=\"./images/teacher-2.png\">\n      <img class=\"teachers\" src=\"./images/teachers.png\">\n    </div>\n    <div id=\"comment\">\n      <h2 class=\"title\"><span>\u7559\u8A00</span></h2>\n    </div>\n  ",
                        styles: ["\n    /* \u9996\u9875\u4E3B\u4F53 */\n    #content {\n      margin-top: 30px;\n    }\n    #content:after {\n      display: block;\n      content: '';\n      clear: both;\n    }\n    /* \u5DE6\u4FA7 */\n    #content .left {\n      float: left;\n      width: 454px;\n      margin-left: 116px;\n    }\n    /* \u8F6E\u64AD\u56FE */\n    #content .left .slide {\n      width: 452px;\n      height: 226px;\n      background: url('./images/slide-bg.png');\n    }\n    #content .left .aboutus{\n      width: 422px; /*452-15*2*/\n      height: 202px; /*228-12*2*/\n      margin-top: 18px;\n      padding: 12px 15px;\n      border-radius: 30px;\n      background: #dacc89;\n      opacity: 0.7;\n      /*background: url('./images/aboutus-bg.png');*/\n    }\n    #content .left .aboutus .title{\n      width: 136px;\n      height: 72px;\n      line-height: 72px;\n      text-align: center;\n      background: url('./images/aboutus-title.png');\n    }\n    #content .right {\n      float: right;\n      width: 338px;\n      height: 472px;\n      margin-right: 112px;\n      border-radius: 30px;\n      background: #85acb8;\n      opacity: 0.7;\n    }\n    /* \u6559\u5E08\u4ECB\u7ECD */\n    #teachers-wrap {\n      position: relative;\n      margin-left: 116px;\n      height: 300px;\n    }\n    #teachers-wrap .title{\n      position: absolute;\n      top: 10px;\n      left: -20px;\n      width: 46px;\n      height: 46px;\n      padding: 30px 32px;\n      line-height: 26px;\n      text-align: center;\n      background: url('./images/teacher-title.png');\n    }\n    #teachers-wrap .teachers {\n      position: absolute;\n      left: 54px;\n      bottom: 0;\n      width: 804px;\n      height: 214px;\n    }\n    #teachers-wrap .teacher-1 {\n      position: absolute;\n      bottom: 0;\n      left: -30px;\n      width: 134px;\n      height: 152px;\n      z-index: 1;\n    }\n      #teachers-wrap .teacher-2 {\n      position: absolute;\n      top: 60px;\n      left: 82px;\n      width: 126px;\n      height: 86px;\n      z-index: 1;\n    }\n    /* \u7559\u8A00 */\n    #comment {\n      width: 748px; /*808-30*2*/\n      height: 558px; /*618-30*2*/\n      margin: 30px auto;\n      padding: 10px;\n      border-radius: 50px;\n      background: #e0c5a4;\n      opacity: 0.7;\n    }\n    #comment .title {\n      width: 255px;\n      height: 168px;\n      background: url('./images/comment-title.png') no-repeat;\n      background-size: contain;\n      position: relative;\n    }\n    #comment .title span {\n      position: absolute;\n      top: 76px;\n      left: 22px;\n    }\n  "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
            ;
        }
    }
});
//# sourceMappingURL=home.component.js.map