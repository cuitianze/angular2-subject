System.register(['angular2/core', 'angular2/router', './home.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <div id=\"header\">\n      <h1>\u9CC4\u9C7C\u7684\u65E5\u8BED\u6559\u5BA4</h1>\n      <div class=\"apply\">\n        <img class=\"title-pig\" src=\"./images/title-pig.png\">\n        <img class=\"title-shine\" src=\"./images/title-shine.png\">\n      </div>\n      <img class=\"title-girl\" src=\"./images/title-girl.png\">\n      <div class=\"board\">\n        \n      </div>\n    </div>\n    <div id=\"menu-wrap\">\n      <ul id=\"menu\">\n        <li>\u9996\u9875<img src=\"./images/menu-1.png\"></li>\n        <li>\u89C6\u9891<img src=\"./images/menu-2.png\"></li>\n        <li>\u8BFE\u7A0B<img src=\"./images/menu-3.png\"></li>\n        <li>\u7559\u5B66<img src=\"./images/menu-4.png\"></li>\n      </ul>\n    </div>\n    <router-outlet></router-outlet>\n  ",
                        styles: ["\n    #header {\n      position: relative;  \n    }\n    #header h1 {\n      width: 718px;\n      height: 118px;\n      margin: 42px auto 16px;\n      text-indent: -999px;\n      background: url('./images/title.png') no-repeat;\n      background-size: contain;\n    }\n    /* \u53F3\u4FA7\u5757 */\n    #header .board {\n      width: 106px;\n      height: 126px;\n      position: absolute;\n      top: -40px;\n      right: 18px;\n      background: url('./images/board.png') no-repeat;\n      background-size: contain;\n    }\n    #header .title-girl {\n      width: 90px;\n      height: 80px;\n      position: absolute;\n      top: 32px;\n      right: 196px;\n    }\n    /* \u5DE6\u4FA7\u5757 */\n    #header .apply {\n      width: 254px;\n      height: 156px;\n      position: absolute;\n      top: 0;\n      left: 0;\n    }\n    #header .apply .title-shine {\n      width: 196px;\n      height: 86px;\n      position: absolute;\n      top: 0;\n      right: 0;\n      z-index: -1;\n    }\n    #header .apply .title-pig {\n      width: 80px;\n      height: 114px;\n      position: absolute;\n      top: 20px;\n      right: 50px;\n    }\n    /* \u83DC\u5355 */\n    #menu-wrap {\n      text-align: center;\n    }\n    #menu {\n      display: inline-block;\n      height: 66px;\n      margin: 0 auto;\n    }\n    #menu li {\n      float: left;\n      width: 132px;\n      height: 65px;\n      margin-right: 38px;\n      position: relative;\n      line-height: 65px;\n      text-align: center;\n      background: url('./images/menu.png');\n    }\n    #menu li img {\n      width: 38px;\n      height: 38px;\n      position: absolute;\n      right: -20px;\n      bottom: 0;\n    }\n  "],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map