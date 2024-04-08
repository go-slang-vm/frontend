"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[24152,59778,46717,97722,798,55675],{43427:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"1\ucd08 \ubbf8\ub9cc",other:"{{count}}\ucd08 \ubbf8\ub9cc"},xSeconds:{one:"1\ucd08",other:"{{count}}\ucd08"},halfAMinute:"30\ucd08",lessThanXMinutes:{one:"1\ubd84 \ubbf8\ub9cc",other:"{{count}}\ubd84 \ubbf8\ub9cc"},xMinutes:{one:"1\ubd84",other:"{{count}}\ubd84"},aboutXHours:{one:"\uc57d 1\uc2dc\uac04",other:"\uc57d {{count}}\uc2dc\uac04"},xHours:{one:"1\uc2dc\uac04",other:"{{count}}\uc2dc\uac04"},xDays:{one:"1\uc77c",other:"{{count}}\uc77c"},aboutXWeeks:{one:"\uc57d 1\uc8fc",other:"\uc57d {{count}}\uc8fc"},xWeeks:{one:"1\uc8fc",other:"{{count}}\uc8fc"},aboutXMonths:{one:"\uc57d 1\uac1c\uc6d4",other:"\uc57d {{count}}\uac1c\uc6d4"},xMonths:{one:"1\uac1c\uc6d4",other:"{{count}}\uac1c\uc6d4"},aboutXYears:{one:"\uc57d 1\ub144",other:"\uc57d {{count}}\ub144"},xYears:{one:"1\ub144",other:"{{count}}\ub144"},overXYears:{one:"1\ub144 \uc774\uc0c1",other:"{{count}}\ub144 \uc774\uc0c1"},almostXYears:{one:"\uac70\uc758 1\ub144",other:"\uac70\uc758 {{count}}\ub144"}},n=function(e,t,n){var o,r=a[e];return o="string"===typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?o+" \ud6c4":o+" \uc804":o};t.default=n,e.exports=t.default},52504:(e,t,a)=>{var n=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(22210)),r={date:(0,o.default)({formats:{full:"y\ub144 M\uc6d4 d\uc77c EEEE",long:"y\ub144 M\uc6d4 d\uc77c",medium:"y.MM.dd",short:"y.MM.dd"},defaultWidth:"full"}),time:(0,o.default)({formats:{full:"a H\uc2dc mm\ubd84 ss\ucd08 zzzz",long:"a H:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,o.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},39822:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"'\uc9c0\ub09c' eeee p",yesterday:"'\uc5b4\uc81c' p",today:"'\uc624\ub298' p",tomorrow:"'\ub0b4\uc77c' p",nextWeek:"'\ub2e4\uc74c' eeee p",other:"P"},n=function(e,t,n,o){return a[e]};t.default=n,e.exports=t.default},48960:(e,t,a)=>{var n=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(22197)),r={ordinalNumber:function(e,t){var a=Number(e);switch(String(null===t||void 0===t?void 0:t.unit)){case"minute":case"second":return String(a);case"date":return a+"\uc77c";default:return a+"\ubc88\uc9f8"}},era:(0,o.default)({values:{narrow:["BC","AD"],abbreviated:["BC","AD"],wide:["\uae30\uc6d0\uc804","\uc11c\uae30"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1\ubd84\uae30","2\ubd84\uae30","3\ubd84\uae30","4\ubd84\uae30"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,o.default)({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1\uc6d4","2\uc6d4","3\uc6d4","4\uc6d4","5\uc6d4","6\uc6d4","7\uc6d4","8\uc6d4","9\uc6d4","10\uc6d4","11\uc6d4","12\uc6d4"],wide:["1\uc6d4","2\uc6d4","3\uc6d4","4\uc6d4","5\uc6d4","6\uc6d4","7\uc6d4","8\uc6d4","9\uc6d4","10\uc6d4","11\uc6d4","12\uc6d4"]},defaultWidth:"wide"}),day:(0,o.default)({values:{narrow:["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"],short:["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"],abbreviated:["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"],wide:["\uc77c\uc694\uc77c","\uc6d4\uc694\uc77c","\ud654\uc694\uc77c","\uc218\uc694\uc77c","\ubaa9\uc694\uc77c","\uae08\uc694\uc77c","\ud1a0\uc694\uc77c"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"\uc624\uc804",pm:"\uc624\ud6c4",midnight:"\uc790\uc815",noon:"\uc815\uc624",morning:"\uc544\uce68",afternoon:"\uc624\ud6c4",evening:"\uc800\ub141",night:"\ubc24"},abbreviated:{am:"\uc624\uc804",pm:"\uc624\ud6c4",midnight:"\uc790\uc815",noon:"\uc815\uc624",morning:"\uc544\uce68",afternoon:"\uc624\ud6c4",evening:"\uc800\ub141",night:"\ubc24"},wide:{am:"\uc624\uc804",pm:"\uc624\ud6c4",midnight:"\uc790\uc815",noon:"\uc815\uc624",morning:"\uc544\uce68",afternoon:"\uc624\ud6c4",evening:"\uc800\ub141",night:"\ubc24"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\uc624\uc804",pm:"\uc624\ud6c4",midnight:"\uc790\uc815",noon:"\uc815\uc624",morning:"\uc544\uce68",afternoon:"\uc624\ud6c4",evening:"\uc800\ub141",night:"\ubc24"},abbreviated:{am:"\uc624\uc804",pm:"\uc624\ud6c4",midnight:"\uc790\uc815",noon:"\uc815\uc624",morning:"\uc544\uce68",afternoon:"\uc624\ud6c4",evening:"\uc800\ub141",night:"\ubc24"},wide:{am:"\uc624\uc804",pm:"\uc624\ud6c4",midnight:"\uc790\uc815",noon:"\uc815\uc624",morning:"\uc544\uce68",afternoon:"\uc624\ud6c4",evening:"\uc800\ub141",night:"\ubc24"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},34549:(e,t,a)=>{var n=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(13585)),r={ordinalNumber:(0,n(a(96412)).default)({matchPattern:/^(\d+)(\uc77c|\ubc88\uc9f8)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,o.default)({matchPatterns:{narrow:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(\uae30\uc6d0\uc804|\uc11c\uae30)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(bc|\uae30\uc6d0\uc804)/i,/^(ad|\uc11c\uae30)/i]},defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\uc0ac?\ubd84\uae30/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,o.default)({matchPatterns:{narrow:/^(1[012]|[123456789])/,abbreviated:/^(1[012]|[123456789])\uc6d4/i,wide:/^(1[012]|[123456789])\uc6d4/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^1\uc6d4?$/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},defaultParseWidth:"any"}),day:(0,o.default)({matchPatterns:{narrow:/^[\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0]/,short:/^[\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0]/,abbreviated:/^[\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0]/,wide:/^[\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0]\uc694\uc77c/},defaultMatchWidth:"wide",parsePatterns:{any:[/^\uc77c/,/^\uc6d4/,/^\ud654/,/^\uc218/,/^\ubaa9/,/^\uae08/,/^\ud1a0/]},defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:{any:/^(am|pm|\uc624\uc804|\uc624\ud6c4|\uc790\uc815|\uc815\uc624|\uc544\uce68|\uc800\ub141|\ubc24)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^(am|\uc624\uc804)/i,pm:/^(pm|\uc624\ud6c4)/i,midnight:/^\uc790\uc815/i,noon:/^\uc815\uc624/i,morning:/^\uc544\uce68/i,afternoon:/^\uc624\ud6c4/i,evening:/^\uc800\ub141/i,night:/^\ubc24/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},57549:(e,t,a)=>{var n=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43427)),r=n(a(52504)),d=n(a(39822)),i=n(a(48960)),u=n(a(34549)),l={code:"ko",formatDistance:o.default,formatLong:r.default,formatRelative:d.default,localize:i.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);