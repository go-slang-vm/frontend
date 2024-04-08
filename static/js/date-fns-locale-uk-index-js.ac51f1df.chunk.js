"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[20671,60889,7700,68977,55248,36013],{58940:(e,t)=>{function i(e,t){if(void 0!==e.one&&1===t)return e.one;var i=t%10,n=t%100;return 1===i&&11!==n?e.singularNominative.replace("{{count}}",String(t)):i>=2&&i<=4&&(n<10||n>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function n(e){return function(t,n){return n&&n.addSuffix?n.comparison&&n.comparison>0?e.future?i(e.future,t):"\u0437\u0430 "+i(e.regular,t):e.past?i(e.past,t):i(e.regular,t)+" \u0442\u043e\u043c\u0443":i(e.regular,t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:n({regular:{one:"\u043c\u0435\u043d\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434\u0438",singularNominative:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438",singularGenitive:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434",pluralGenitive:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},future:{one:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularNominative:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438",pluralGenitive:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),xSeconds:n({regular:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0430",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},past:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0442\u043e\u043c\u0443",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438 \u0442\u043e\u043c\u0443",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u0442\u043e\u043c\u0443"},future:{singularNominative:"\u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0438",pluralGenitive:"\u0437\u0430 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),halfAMinute:function(e,t){return t&&t.addSuffix?t.comparison&&t.comparison>0?"\u0437\u0430 \u043f\u0456\u0432\u0445\u0432\u0438\u043b\u0438\u043d\u0438":"\u043f\u0456\u0432\u0445\u0432\u0438\u043b\u0438\u043d\u0438 \u0442\u043e\u043c\u0443":"\u043f\u0456\u0432\u0445\u0432\u0438\u043b\u0438\u043d\u0438"},lessThanXMinutes:n({regular:{one:"\u043c\u0435\u043d\u0448\u0435 \u0445\u0432\u0438\u043b\u0438\u043d\u0438",singularNominative:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438",singularGenitive:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d",pluralGenitive:"\u043c\u0435\u043d\u0448\u0435 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d"},future:{one:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 \u0445\u0432\u0438\u043b\u0438\u043d\u0443",singularNominative:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0443",singularGenitive:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438",pluralGenitive:"\u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d"}}),xMinutes:n({regular:{singularNominative:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0430",singularGenitive:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438",pluralGenitive:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d"},past:{singularNominative:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0443 \u0442\u043e\u043c\u0443",singularGenitive:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438 \u0442\u043e\u043c\u0443",pluralGenitive:"{{count}} \u0445\u0432\u0438\u043b\u0438\u043d \u0442\u043e\u043c\u0443"},future:{singularNominative:"\u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0443",singularGenitive:"\u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d\u0438",pluralGenitive:"\u0437\u0430 {{count}} \u0445\u0432\u0438\u043b\u0438\u043d"}}),aboutXHours:n({regular:{singularNominative:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d\u0438",singularGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d",pluralGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0433\u043e\u0434\u0438\u043d"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0433\u043e\u0434\u0438\u043d\u0443",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0433\u043e\u0434\u0438\u043d\u0438",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0433\u043e\u0434\u0438\u043d"}}),xHours:n({regular:{singularNominative:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0443",singularGenitive:"{{count}} \u0433\u043e\u0434\u0438\u043d\u0438",pluralGenitive:"{{count}} \u0433\u043e\u0434\u0438\u043d"}}),xDays:n({regular:{singularNominative:"{{count}} \u0434\u0435\u043d\u044c",singularGenitive:"{{count}} \u0434\u043di",pluralGenitive:"{{count}} \u0434\u043d\u0456\u0432"}}),aboutXWeeks:n({regular:{singularNominative:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0442\u0438\u0436\u043d\u044f",singularGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0442\u0438\u0436\u043d\u0456\u0432",pluralGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0442\u0438\u0436\u043d\u0456\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0442\u0438\u0436\u0434\u0435\u043d\u044c",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0442\u0438\u0436\u043d\u0456",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0442\u0438\u0436\u043d\u0456\u0432"}}),xWeeks:n({regular:{singularNominative:"{{count}} \u0442\u0438\u0436\u0434\u0435\u043d\u044c",singularGenitive:"{{count}} \u0442\u0438\u0436\u043d\u0456",pluralGenitive:"{{count}} \u0442\u0438\u0436\u043d\u0456\u0432"}}),aboutXMonths:n({regular:{singularNominative:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u043c\u0456\u0441\u044f\u0446\u044f",singularGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u043c\u0456\u0441\u044f\u0446\u0456\u0432",pluralGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u043c\u0456\u0441\u044f\u0446\u0456\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u043c\u0456\u0441\u044f\u0446\u044c",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u043c\u0456\u0441\u044f\u0446\u0456",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u043c\u0456\u0441\u044f\u0446\u0456\u0432"}}),xMonths:n({regular:{singularNominative:"{{count}} \u043c\u0456\u0441\u044f\u0446\u044c",singularGenitive:"{{count}} \u043c\u0456\u0441\u044f\u0446\u0456",pluralGenitive:"{{count}} \u043c\u0456\u0441\u044f\u0446\u0456\u0432"}}),aboutXYears:n({regular:{singularNominative:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0440\u043e\u043a\u0443",singularGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0440\u043e\u043a\u0456\u0432",pluralGenitive:"\u0431\u043b\u0438\u0437\u044c\u043a\u043e {{count}} \u0440\u043e\u043a\u0456\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0440\u0456\u043a",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437\u0430 {{count}} \u0440\u043e\u043a\u0456\u0432"}}),xYears:n({regular:{singularNominative:"{{count}} \u0440\u0456\u043a",singularGenitive:"{{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"{{count}} \u0440\u043e\u043a\u0456\u0432"}}),overXYears:n({regular:{singularNominative:"\u0431\u0456\u043b\u044c\u0448\u0435 {{count}} \u0440\u043e\u043a\u0443",singularGenitive:"\u0431\u0456\u043b\u044c\u0448\u0435 {{count}} \u0440\u043e\u043a\u0456\u0432",pluralGenitive:"\u0431\u0456\u043b\u044c\u0448\u0435 {{count}} \u0440\u043e\u043a\u0456\u0432"},future:{singularNominative:"\u0431\u0456\u043b\u044c\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0440\u0456\u043a",singularGenitive:"\u0431\u0456\u043b\u044c\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"\u0431\u0456\u043b\u044c\u0448\u0435, \u043d\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043e\u043a\u0456\u0432"}}),almostXYears:n({regular:{singularNominative:"\u043c\u0430\u0439\u0436\u0435 {{count}} \u0440\u0456\u043a",singularGenitive:"\u043c\u0430\u0439\u0436\u0435 {{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"\u043c\u0430\u0439\u0436\u0435 {{count}} \u0440\u043e\u043a\u0456\u0432"},future:{singularNominative:"\u043c\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u0456\u043a",singularGenitive:"\u043c\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043e\u043a\u0438",pluralGenitive:"\u043c\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043e\u043a\u0456\u0432"}})},u=function(e,t,i){return i=i||{},a[e](t,i)};t.default=u,e.exports=t.default},78467:(e,t,i)=>{var n=i(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(22210)),u={date:(0,a.default)({formats:{full:"EEEE, do MMMM y '\u0440.'",long:"do MMMM y '\u0440.'",medium:"d MMM y '\u0440.'",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{full:"{{date}} '\u043e' {{time}}",long:"{{date}} '\u043e' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=u,e.exports=t.default},95726:(e,t,i)=>{var n=i(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(33160),u=n(i(88688)),r=["\u043d\u0435\u0434\u0456\u043b\u044e","\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a","\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a","\u0441\u0435\u0440\u0435\u0434\u0443","\u0447\u0435\u0442\u0432\u0435\u0440","\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e","\u0441\u0443\u0431\u043e\u0442\u0443"];function o(e){return"'\u0443 "+r[e]+" \u043e' p"}var l={lastWeek:function(e,t,i){var n=(0,a.toDate)(e),l=n.getUTCDay();return(0,u.default)(n,t,i)?o(l):function(e){var t=r[e];switch(e){case 0:case 3:case 5:case 6:return"'\u0443 \u043c\u0438\u043d\u0443\u043b\u0443 "+t+" \u043e' p";case 1:case 2:case 4:return"'\u0443 \u043c\u0438\u043d\u0443\u043b\u0438\u0439 "+t+" \u043e' p"}}(l)},yesterday:"'\u0432\u0447\u043e\u0440\u0430 \u043e' p",today:"'\u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456 \u043e' p",tomorrow:"'\u0437\u0430\u0432\u0442\u0440\u0430 \u043e' p",nextWeek:function(e,t,i){var n=(0,a.toDate)(e),l=n.getUTCDay();return(0,u.default)(n,t,i)?o(l):function(e){var t=r[e];switch(e){case 0:case 3:case 5:case 6:return"'\u0443 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443 "+t+" \u043e' p";case 1:case 2:case 4:return"'\u0443 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 "+t+" \u043e' p"}}(l)},other:"P"},d=function(e,t,i,n){var a=l[e];return"function"===typeof a?a(t,i,n):a};t.default=d,e.exports=t.default},18500:(e,t,i)=>{var n=i(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(22197)),u={ordinalNumber:function(e,t){var i=String(null===t||void 0===t?void 0:t.unit),n=Number(e);return n+("date"===i?3===n||23===n?"-\u0454":"-\u0435":"minute"===i||"second"===i||"hour"===i?"-\u0430":"-\u0439")},era:(0,a.default)({values:{narrow:["\u0434\u043e \u043d.\u0435.","\u043d.\u0435."],abbreviated:["\u0434\u043e \u043d. \u0435.","\u043d. \u0435."],wide:["\u0434\u043e \u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438","\u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u0439 \u043a\u0432.","2-\u0439 \u043a\u0432.","3-\u0439 \u043a\u0432.","4-\u0439 \u043a\u0432."],wide:["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,a.default)({values:{narrow:["\u0421","\u041b","\u0411","\u041a","\u0422","\u0427","\u041b","\u0421","\u0412","\u0416","\u041b","\u0413"],abbreviated:["\u0441\u0456\u0447.","\u043b\u044e\u0442.","\u0431\u0435\u0440\u0435\u0437.","\u043a\u0432\u0456\u0442.","\u0442\u0440\u0430\u0432.","\u0447\u0435\u0440\u0432.","\u043b\u0438\u043f.","\u0441\u0435\u0440\u043f.","\u0432\u0435\u0440\u0435\u0441.","\u0436\u043e\u0432\u0442.","\u043b\u0438\u0441\u0442\u043e\u043f.","\u0433\u0440\u0443\u0434."],wide:["\u0441\u0456\u0447\u0435\u043d\u044c","\u043b\u044e\u0442\u0438\u0439","\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c","\u043a\u0432\u0456\u0442\u0435\u043d\u044c","\u0442\u0440\u0430\u0432\u0435\u043d\u044c","\u0447\u0435\u0440\u0432\u0435\u043d\u044c","\u043b\u0438\u043f\u0435\u043d\u044c","\u0441\u0435\u0440\u043f\u0435\u043d\u044c","\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c","\u0436\u043e\u0432\u0442\u0435\u043d\u044c","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434","\u0433\u0440\u0443\u0434\u0435\u043d\u044c"]},defaultWidth:"wide",formattingValues:{narrow:["\u0421","\u041b","\u0411","\u041a","\u0422","\u0427","\u041b","\u0421","\u0412","\u0416","\u041b","\u0413"],abbreviated:["\u0441\u0456\u0447.","\u043b\u044e\u0442.","\u0431\u0435\u0440\u0435\u0437.","\u043a\u0432\u0456\u0442.","\u0442\u0440\u0430\u0432.","\u0447\u0435\u0440\u0432.","\u043b\u0438\u043f.","\u0441\u0435\u0440\u043f.","\u0432\u0435\u0440\u0435\u0441.","\u0436\u043e\u0432\u0442.","\u043b\u0438\u0441\u0442\u043e\u043f.","\u0433\u0440\u0443\u0434."],wide:["\u0441\u0456\u0447\u043d\u044f","\u043b\u044e\u0442\u043e\u0433\u043e","\u0431\u0435\u0440\u0435\u0437\u043d\u044f","\u043a\u0432\u0456\u0442\u043d\u044f","\u0442\u0440\u0430\u0432\u043d\u044f","\u0447\u0435\u0440\u0432\u043d\u044f","\u043b\u0438\u043f\u043d\u044f","\u0441\u0435\u0440\u043f\u043d\u044f","\u0432\u0435\u0440\u0435\u0441\u043d\u044f","\u0436\u043e\u0432\u0442\u043d\u044f","\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430","\u0433\u0440\u0443\u0434\u043d\u044f"]},defaultFormattingWidth:"wide"}),day:(0,a.default)({values:{narrow:["\u041d","\u041f","\u0412","\u0421","\u0427","\u041f","\u0421"],short:["\u043d\u0434","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"],abbreviated:["\u043d\u0435\u0434","\u043f\u043e\u043d","\u0432\u0456\u0432","\u0441\u0435\u0440","\u0447\u0442\u0432","\u043f\u0442\u043d","\u0441\u0443\u0431"],wide:["\u043d\u0435\u0434\u0456\u043b\u044f","\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a","\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a","\u0441\u0435\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440","\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f","\u0441\u0443\u0431\u043e\u0442\u0430"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u0456\u0432\u043d.",noon:"\u043f\u043e\u043b.",morning:"\u0440\u0430\u043d\u043e\u043a",afternoon:"\u0434\u0435\u043d\u044c",evening:"\u0432\u0435\u0447.",night:"\u043d\u0456\u0447"},abbreviated:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u0456\u0432\u043d.",noon:"\u043f\u043e\u043b.",morning:"\u0440\u0430\u043d\u043e\u043a",afternoon:"\u0434\u0435\u043d\u044c",evening:"\u0432\u0435\u0447.",night:"\u043d\u0456\u0447"},wide:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u0456\u0432\u043d\u0456\u0447",noon:"\u043f\u043e\u043b\u0443\u0434\u0435\u043d\u044c",morning:"\u0440\u0430\u043d\u043e\u043a",afternoon:"\u0434\u0435\u043d\u044c",evening:"\u0432\u0435\u0447\u0456\u0440",night:"\u043d\u0456\u0447"}},defaultWidth:"any",formattingValues:{narrow:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u0456\u0432\u043d.",noon:"\u043f\u043e\u043b.",morning:"\u0440\u0430\u043d\u043a\u0443",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u0456"},abbreviated:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u0456\u0432\u043d.",noon:"\u043f\u043e\u043b.",morning:"\u0440\u0430\u043d\u043a\u0443",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u0456"},wide:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u0456\u0432\u043d\u0456\u0447",noon:"\u043f\u043e\u043b\u0443\u0434\u0435\u043d\u044c",morning:"\u0440\u0430\u043d\u043a\u0443",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u0456"}},defaultFormattingWidth:"wide"})};t.default=u,e.exports=t.default},50533:(e,t,i)=>{var n=i(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(13585)),u={ordinalNumber:(0,n(i(96412)).default)({matchPattern:/^(\d+)(-?(\u0435|\u0439|\u0454|\u0430|\u044f))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,a.default)({matchPatterns:{narrow:/^((\u0434\u043e )?\u043d\.?\s?\u0435\.?)/i,abbreviated:/^((\u0434\u043e )?\u043d\.?\s?\u0435\.?)/i,wide:/^(\u0434\u043e \u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438|\u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438|\u043d\u0430\u0448\u0430 \u0435\u0440\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0434/i,/^\u043d/i]},defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[\u0438\u0456]?\u0439?)? \u043a\u0432.?/i,wide:/^[1234](-?[\u0438\u0456]?\u0439?)? \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,a.default)({matchPatterns:{narrow:/^[\u0441\u043b\u0431\u043a\u0442\u0447\u0432\u0436\u0433]/i,abbreviated:/^(\u0441\u0456\u0447|\u043b\u044e\u0442|\u0431\u0435\u0440(\u0435\u0437)?|\u043a\u0432\u0456\u0442|\u0442\u0440\u0430\u0432|\u0447\u0435\u0440\u0432|\u043b\u0438\u043f|\u0441\u0435\u0440\u043f|\u0432\u0435\u0440(\u0435\u0441)?|\u0436\u043e\u0432\u0442|\u043b\u0438\u0441(\u0442\u043e\u043f)?|\u0433\u0440\u0443\u0434)\.?/i,wide:/^(\u0441\u0456\u0447\u0435\u043d\u044c|\u0441\u0456\u0447\u043d\u044f|\u043b\u044e\u0442\u0438\u0439|\u043b\u044e\u0442\u043e\u0433\u043e|\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c|\u0431\u0435\u0440\u0435\u0437\u043d\u044f|\u043a\u0432\u0456\u0442\u0435\u043d\u044c|\u043a\u0432\u0456\u0442\u043d\u044f|\u0442\u0440\u0430\u0432\u0435\u043d\u044c|\u0442\u0440\u0430\u0432\u043d\u044f|\u0447\u0435\u0440\u0432\u043d\u044f|\u0447\u0435\u0440\u0432\u0435\u043d\u044c|\u043b\u0438\u043f\u0435\u043d\u044c|\u043b\u0438\u043f\u043d\u044f|\u0441\u0435\u0440\u043f\u0435\u043d\u044c|\u0441\u0435\u0440\u043f\u043d\u044f|\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c|\u0432\u0435\u0440\u0435\u0441\u043d\u044f|\u0436\u043e\u0432\u0442\u0435\u043d\u044c|\u0436\u043e\u0432\u0442\u043d\u044f|\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434[\u0430]?|\u0433\u0440\u0443\u0434\u0435\u043d\u044c|\u0433\u0440\u0443\u0434\u043d\u044f)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0441/i,/^\u043b/i,/^\u0431/i,/^\u043a/i,/^\u0442/i,/^\u0447/i,/^\u043b/i,/^\u0441/i,/^\u0432/i,/^\u0436/i,/^\u043b/i,/^\u0433/i],any:[/^\u0441\u0456/i,/^\u043b\u044e/i,/^\u0431/i,/^\u043a/i,/^\u0442/i,/^\u0447/i,/^\u043b\u0438\u043f/i,/^\u0441\u0435/i,/^\u0432/i,/^\u0436/i,/^\u043b\u0438\u0441/i,/^\u0433/i]},defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:{narrow:/^[\u043d\u043f\u0432\u0441\u0447]/i,short:/^(\u043d\u0434|\u043f\u043d|\u0432\u0442|\u0441\u0440|\u0447\u0442|\u043f\u0442|\u0441\u0431)\.?/i,abbreviated:/^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0432\u0456\u0432|\u0441\u0435\u0440|\u0447\u0435?\u0442\u0432|\u043f\u0442\u043d?|\u0441\u0443\u0431)\.?/i,wide:/^(\u043d\u0435\u0434\u0456\u043b[\u044f\u0456]|\u043f\u043e\u043d\u0435\u0434\u0456\u043b[\u043e\u043a][\u043a\u0430]|\u0432\u0456\u0432\u0442\u043e\u0440[\u043e\u043a][\u043a\u0430]|\u0441\u0435\u0440\u0435\u0434[\u0430\u0438]|\u0447\u0435\u0442\u0432\u0435\u0440(\u0433\u0430)?|\u043f\W*?\u044f\u0442\u043d\u0438\u0446[\u044f\u0456]|\u0441\u0443\u0431\u043e\u0442[\u0430\u0438])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u043d/i,/^\u043f/i,/^\u0432/i,/^\u0441/i,/^\u0447/i,/^\u043f/i,/^\u0441/i],any:[/^\u043d/i,/^\u043f[\u043e\u043d]/i,/^\u0432/i,/^\u0441[\u0435\u0440]/i,/^\u0447/i,/^\u043f\W*?[\u044f\u0442]/i,/^\u0441[\u0443\u0431]/i]},defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:{narrow:/^([\u0434\u043f]\u043f|\u043f\u0456\u0432\u043d\.?|\u043f\u043e\u043b\.?|\u0440\u0430\u043d\u043e\u043a|\u0440\u0430\u043d\u043a\u0443|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u0456\u0447|\u043d\u043e\u0447\u0456)/i,abbreviated:/^([\u0434\u043f]\u043f|\u043f\u0456\u0432\u043d\.?|\u043f\u043e\u043b\.?|\u0440\u0430\u043d\u043e\u043a|\u0440\u0430\u043d\u043a\u0443|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u0456\u0447|\u043d\u043e\u0447\u0456)/i,wide:/^([\u0434\u043f]\u043f|\u043f\u0456\u0432\u043d\u0456\u0447|\u043f\u043e\u043b\u0443\u0434\u0435\u043d\u044c|\u0440\u0430\u043d\u043e\u043a|\u0440\u0430\u043d\u043a\u0443|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\u0456\u0440|\u0432\u0435\u0447\u043e\u0440\u0430|\u043d\u0456\u0447|\u043d\u043e\u0447\u0456)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^\u0434\u043f/i,pm:/^\u043f\u043f/i,midnight:/^\u043f\u0456\u0432\u043d/i,noon:/^\u043f\u043e\u043b/i,morning:/^\u0440/i,afternoon:/^\u0434[\u0435\u043d]/i,evening:/^\u0432/i,night:/^\u043d/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},52061:(e,t,i)=>{var n=i(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(58940)),u=n(i(78467)),r=n(i(95726)),o=n(i(18500)),l=n(i(50533)),d={code:"uk",formatDistance:a.default,formatLong:u.default,formatRelative:r.default,localize:o.default,match:l.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=d,e.exports=t.default}}]);