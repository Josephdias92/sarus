angular.module("sarusApp").run(["$templateCache", function($templateCache) {$templateCache.put("app/controller/get-view.tpl.html","<div class=row><div class=col-8>{{item.body[0].value}}</div><div class=col-4><div ads ad-size=[300,250]></div></div></div>");
$templateCache.put("app/controller/get.html","<style>*{\n      box-sizing: border-box;\n    }\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n  font-size: 100%;\n}\n\n/* ROOT FONT STYLES */\n\n* {\n  color: #333447;\n  line-height: 1.5;\n}\n\n/* TYPOGRAPHY */\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.375rem;\n}\n\nh4 {\n  font-size: 1.125rem;\n}\n\nh5 {\n  font-size: 1rem;\n}\n\nh6 {\n  font-size: 0.875rem;\n}\n\np {\n  font-size: 1.125rem;\n  font-weight: 200;\n  line-height: 1.8;\n}\n\n.font-light {\n  font-weight: 300;\n}\n\n.font-regular {\n  font-weight: 400;\n}\n\n.font-heavy {\n  font-weight: 700;\n}\n\n/* POSITIONING */\n\n.left {\n  text-align: left;\n}\n\n.right {\n  text-align: right;\n}\n\n.center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.justify {\n  text-align: justify;\n}\n\n/* ==== GRID SYSTEM ==== */\n\n.container {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.row {\n  position: relative;\n  width: 100%;\n}\n\n.row [class^=\"col\"] {\n  float: left;\n  margin: 0.5rem 2%;\n  min-height: 0.125rem;\n}\n\n.col-1,\n.col-2,\n.col-3,\n.col-4,\n.col-5,\n.col-6,\n.col-7,\n.col-8,\n.col-9,\n.col-10,\n.col-11,\n.col-12 {\n  width: 96%;\n}\n\n.col-1-sm {\n  width: 4.33%;\n}\n\n.col-2-sm {\n  width: 12.66%;\n}\n\n.col-3-sm {\n  width: 21%;\n}\n\n.col-4-sm {\n  width: 29.33%;\n}\n\n.col-5-sm {\n  width: 37.66%;\n}\n\n.col-6-sm {\n  width: 46%;\n}\n\n.col-7-sm {\n  width: 54.33%;\n}\n\n.col-8-sm {\n  width: 62.66%;\n}\n\n.col-9-sm {\n  width: 71%;\n}\n\n.col-10-sm {\n  width: 79.33%;\n}\n\n.col-11-sm {\n  width: 87.66%;\n}\n\n.col-12-sm {\n  width: 96%;\n}\n\n.row::after {\n	content: \"\";\n	display: table;\n	clear: both;\n}\n\n.hidden-sm {\n  display: none;\n}\n\n@media only screen and (min-width: 33.75em) {  /* 540px */\n  .container {\n    width: 80%;\n  }\n}\n\n@media only screen and (min-width: 45em) {  /* 720px */\n  .col-1 {\n    width: 4.33%;\n  }\n\n  .col-2 {\n    width: 12.66%;\n  }\n\n  .col-3 {\n    width: 21%;\n  }\n\n  .col-4 {\n    width: 29.33%;\n  }\n\n  .col-5 {\n    width: 37.66%;\n  }\n\n  .col-6 {\n    width: 46%;\n  }\n\n  .col-7 {\n    width: 54.33%;\n  }\n\n  .col-8 {\n    width: 62.66%;\n  }\n\n  .col-9 {\n    width: 71%;\n  }\n\n  .col-10 {\n    width: 79.33%;\n  }\n\n  .col-11 {\n    width: 87.66%;\n  }\n\n  .col-12 {\n    width: 96%;\n  }\n\n  .hidden-sm {\n    display: block;\n  }\n}\n\n@media only screen and (min-width: 60em) { /* 960px */\n  .container {\n    width: 75%;\n    max-width: 60rem;\n  }\n}\n    .item {\n      min-height:1000px;\n      background-color:#eee;\n      list-style-type: none;\n      border: 0 dotted #ddd;\n      border-bottom-width: 1px;\n      margin:10 auto;\n    }</style><div class=container infinite-scroll-distance=50 infinite-scroll-disabled=vm.sarus.busy infinite-scroll=vm.sarus.nextPage(vm.nids[vm.sarus.index].nid)><div><div class=item update-url=url-{{$index}} ng-repeat=\"item in vm.sarus.items track by $index\"><sarus-item sarus-template=app/controller/get-view.tpl.html item=item></sarus-item></div></div></div>");
$templateCache.put("app/directive/ads.tpl.html","<div></div>");
$templateCache.put("app/directive/sarus-item.tpl.html","<div ng-include src=sarusTemplate></div>");}]);