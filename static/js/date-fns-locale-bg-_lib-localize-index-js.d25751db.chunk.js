"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[71431],{44725:(e,r,a)=>{var t=a(64836).default;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var u=t(a(22197));function n(e,r,a,t,u){var n=function(e){return"quarter"===e}(r)?u:function(e){return"year"===e||"week"===e||"minute"===e||"second"===e}(r)?t:a;return e+"-"+n}var d={ordinalNumber:function(e,r){var a=Number(e),t=null===r||void 0===r?void 0:r.unit;if(0===a)return n(0,t,"\u0435\u0432","\u0435\u0432\u0430","\u0435\u0432\u043e");if(a%1e3===0)return n(a,t,"\u0435\u043d","\u043d\u0430","\u043d\u043e");if(a%100===0)return n(a,t,"\u0442\u0435\u043d","\u0442\u043d\u0430","\u0442\u043d\u043e");var u=a%100;if(u>20||u<10)switch(u%10){case 1:return n(a,t,"\u0432\u0438","\u0432\u0430","\u0432\u043e");case 2:return n(a,t,"\u0440\u0438","\u0440\u0430","\u0440\u043e");case 7:case 8:return n(a,t,"\u043c\u0438","\u043c\u0430","\u043c\u043e")}return n(a,t,"\u0442\u0438","\u0442\u0430","\u0442\u043e")},era:(0,u.default)({values:{narrow:["\u043f\u0440.\u043d.\u0435.","\u043d.\u0435."],abbreviated:["\u043f\u0440\u0435\u0434\u0438 \u043d. \u0435.","\u043d. \u0435."],wide:["\u043f\u0440\u0435\u0434\u0438 \u043d\u043e\u0432\u0430\u0442\u0430 \u0435\u0440\u0430","\u043d\u043e\u0432\u0430\u0442\u0430 \u0435\u0440\u0430"]},defaultWidth:"wide"}),quarter:(0,u.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u0432\u043e \u0442\u0440\u0438\u043c\u0435\u0441.","2-\u0440\u043e \u0442\u0440\u0438\u043c\u0435\u0441.","3-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441.","4-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441."],wide:["1-\u0432\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435","2-\u0440\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435","3-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435","4-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,u.default)({values:{abbreviated:["\u044f\u043d\u0443","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u044e\u043d\u0438","\u044e\u043b\u0438","\u0430\u0432\u0433","\u0441\u0435\u043f","\u043e\u043a\u0442","\u043d\u043e\u0435","\u0434\u0435\u043a"],wide:["\u044f\u043d\u0443\u0430\u0440\u0438","\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0438\u043b","\u043c\u0430\u0439","\u044e\u043d\u0438","\u044e\u043b\u0438","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438","\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438","\u043d\u043e\u0435\u043c\u0432\u0440\u0438","\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438"]},defaultWidth:"wide"}),day:(0,u.default)({values:{narrow:["\u041d","\u041f","\u0412","\u0421","\u0427","\u041f","\u0421"],short:["\u043d\u0434","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"],abbreviated:["\u043d\u0435\u0434","\u043f\u043e\u043d","\u0432\u0442\u043e","\u0441\u0440\u044f","\u0447\u0435\u0442","\u043f\u0435\u0442","\u0441\u044a\u0431"],wide:["\u043d\u0435\u0434\u0435\u043b\u044f","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u044f\u0434\u0430","\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a","\u043f\u0435\u0442\u044a\u043a","\u0441\u044a\u0431\u043e\u0442\u0430"]},defaultWidth:"wide"}),dayPeriod:(0,u.default)({values:{wide:{am:"\u043f\u0440\u0435\u0434\u0438 \u043e\u0431\u044f\u0434",pm:"\u0441\u043b\u0435\u0434 \u043e\u0431\u044f\u0434",midnight:"\u0432 \u043f\u043e\u043b\u0443\u043d\u043e\u0449",noon:"\u043d\u0430 \u043e\u0431\u044f\u0434",morning:"\u0441\u0443\u0442\u0440\u0438\u043d\u0442\u0430",afternoon:"\u0441\u043b\u0435\u0434\u043e\u0431\u0435\u0434",evening:"\u0432\u0435\u0447\u0435\u0440\u0442\u0430",night:"\u043f\u0440\u0435\u0437 \u043d\u043e\u0449\u0442\u0430"}},defaultWidth:"wide"})};r.default=d,e.exports=r.default}}]);