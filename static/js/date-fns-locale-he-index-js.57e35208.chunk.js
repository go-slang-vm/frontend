"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[66936,44388,70481,87860,17819,8314],{53881:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"\u05e4\u05d7\u05d5\u05ea \u05de\u05e9\u05e0\u05d9\u05d9\u05d4",two:"\u05e4\u05d7\u05d5\u05ea \u05de\u05e9\u05ea\u05d9 \u05e9\u05e0\u05d9\u05d5\u05ea",other:"\u05e4\u05d7\u05d5\u05ea \u05de\u05be{{count}} \u05e9\u05e0\u05d9\u05d5\u05ea"},xSeconds:{one:"\u05e9\u05e0\u05d9\u05d9\u05d4",two:"\u05e9\u05ea\u05d9 \u05e9\u05e0\u05d9\u05d5\u05ea",other:"{{count}} \u05e9\u05e0\u05d9\u05d5\u05ea"},halfAMinute:"\u05d7\u05e6\u05d9 \u05d3\u05e7\u05d4",lessThanXMinutes:{one:"\u05e4\u05d7\u05d5\u05ea \u05de\u05d3\u05e7\u05d4",two:"\u05e4\u05d7\u05d5\u05ea \u05de\u05e9\u05ea\u05d9 \u05d3\u05e7\u05d5\u05ea",other:"\u05e4\u05d7\u05d5\u05ea \u05de\u05be{{count}} \u05d3\u05e7\u05d5\u05ea"},xMinutes:{one:"\u05d3\u05e7\u05d4",two:"\u05e9\u05ea\u05d9 \u05d3\u05e7\u05d5\u05ea",other:"{{count}} \u05d3\u05e7\u05d5\u05ea"},aboutXHours:{one:"\u05db\u05e9\u05e2\u05d4",two:"\u05db\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd",other:"\u05db\u05be{{count}} \u05e9\u05e2\u05d5\u05ea"},xHours:{one:"\u05e9\u05e2\u05d4",two:"\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd",other:"{{count}} \u05e9\u05e2\u05d5\u05ea"},xDays:{one:"\u05d9\u05d5\u05dd",two:"\u05d9\u05d5\u05de\u05d9\u05d9\u05dd",other:"{{count}} \u05d9\u05de\u05d9\u05dd"},aboutXWeeks:{one:"\u05db\u05e9\u05d1\u05d5\u05e2",two:"\u05db\u05e9\u05d1\u05d5\u05e2\u05d9\u05d9\u05dd",other:"\u05db\u05be{{count}} \u05e9\u05d1\u05d5\u05e2\u05d5\u05ea"},xWeeks:{one:"\u05e9\u05d1\u05d5\u05e2",two:"\u05e9\u05d1\u05d5\u05e2\u05d9\u05d9\u05dd",other:"{{count}} \u05e9\u05d1\u05d5\u05e2\u05d5\u05ea"},aboutXMonths:{one:"\u05db\u05d7\u05d5\u05d3\u05e9",two:"\u05db\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd",other:"\u05db\u05be{{count}} \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"},xMonths:{one:"\u05d7\u05d5\u05d3\u05e9",two:"\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd",other:"{{count}} \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"},aboutXYears:{one:"\u05db\u05e9\u05e0\u05d4",two:"\u05db\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",other:"\u05db\u05be{{count}} \u05e9\u05e0\u05d9\u05dd"},xYears:{one:"\u05e9\u05e0\u05d4",two:"\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",other:"{{count}} \u05e9\u05e0\u05d9\u05dd"},overXYears:{one:"\u05d9\u05d5\u05ea\u05e8 \u05de\u05e9\u05e0\u05d4",two:"\u05d9\u05d5\u05ea\u05e8 \u05de\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",other:"\u05d9\u05d5\u05ea\u05e8 \u05de\u05be{{count}} \u05e9\u05e0\u05d9\u05dd"},almostXYears:{one:"\u05db\u05de\u05e2\u05d8 \u05e9\u05e0\u05d4",two:"\u05db\u05de\u05e2\u05d8 \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",other:"\u05db\u05de\u05e2\u05d8 {{count}} \u05e9\u05e0\u05d9\u05dd"}},i=function(e,t,i){if("xDays"===e&&null!==i&&void 0!==i&&i.addSuffix&&t<=2)return i.comparison&&i.comparison>0?1===t?"\u05de\u05d7\u05e8":"\u05de\u05d7\u05e8\u05ea\u05d9\u05d9\u05dd":1===t?"\u05d0\u05ea\u05de\u05d5\u05dc":"\u05e9\u05dc\u05e9\u05d5\u05dd";var n,o=a[e];return n="string"===typeof o?o:1===t?o.one:2===t?o.two:o.other.replace("{{count}}",String(t)),null!==i&&void 0!==i&&i.addSuffix?i.comparison&&i.comparison>0?"\u05d1\u05e2\u05d5\u05d3 "+n:"\u05dc\u05e4\u05e0\u05d9 "+n:n};t.default=i,e.exports=t.default},14928:(e,t,a)=>{var i=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(22210)),o={date:(0,n.default)({formats:{full:"EEEE, d \u05d1MMMM y",long:"d \u05d1MMMM y",medium:"d \u05d1MMM y",short:"d.M.y"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} '\u05d1\u05e9\u05e2\u05d4' {{time}}",long:"{{date}} '\u05d1\u05e9\u05e2\u05d4' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=o,e.exports=t.default},90786:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"eeee '\u05e9\u05e2\u05d1\u05e8 \u05d1\u05e9\u05e2\u05d4' p",yesterday:"'\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05e9\u05e2\u05d4' p",today:"'\u05d4\u05d9\u05d5\u05dd \u05d1\u05e9\u05e2\u05d4' p",tomorrow:"'\u05de\u05d7\u05e8 \u05d1\u05e9\u05e2\u05d4' p",nextWeek:"eeee '\u05d1\u05e9\u05e2\u05d4' p",other:"P"},i=function(e,t,i,n){return a[e]};t.default=i,e.exports=t.default},56881:(e,t,a)=>{var i=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(22197)),o={ordinalNumber:function(e,t){var a=Number(e);if(a<=0||a>10)return String(a);var i=String(null===t||void 0===t?void 0:t.unit),n=a-1;return["year","hour","minute","second"].indexOf(i)>=0?["\u05e8\u05d0\u05e9\u05d5\u05e0\u05d4","\u05e9\u05e0\u05d9\u05d9\u05d4","\u05e9\u05dc\u05d9\u05e9\u05d9\u05ea","\u05e8\u05d1\u05d9\u05e2\u05d9\u05ea","\u05d7\u05de\u05d9\u05e9\u05d9\u05ea","\u05e9\u05d9\u05e9\u05d9\u05ea","\u05e9\u05d1\u05d9\u05e2\u05d9\u05ea","\u05e9\u05de\u05d9\u05e0\u05d9\u05ea","\u05ea\u05e9\u05d9\u05e2\u05d9\u05ea","\u05e2\u05e9\u05d9\u05e8\u05d9\u05ea"][n]:["\u05e8\u05d0\u05e9\u05d5\u05df","\u05e9\u05e0\u05d9","\u05e9\u05dc\u05d9\u05e9\u05d9","\u05e8\u05d1\u05d9\u05e2\u05d9","\u05d7\u05de\u05d9\u05e9\u05d9","\u05e9\u05d9\u05e9\u05d9","\u05e9\u05d1\u05d9\u05e2\u05d9","\u05e9\u05de\u05d9\u05e0\u05d9","\u05ea\u05e9\u05d9\u05e2\u05d9","\u05e2\u05e9\u05d9\u05e8\u05d9"][n]},era:(0,n.default)({values:{narrow:["\u05dc\u05e4\u05e0\u05d4\u05f4\u05e1","\u05dc\u05e1\u05e4\u05d9\u05e8\u05d4"],abbreviated:["\u05dc\u05e4\u05e0\u05d4\u05f4\u05e1","\u05dc\u05e1\u05e4\u05d9\u05e8\u05d4"],wide:["\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e1\u05e4\u05d9\u05e8\u05d4","\u05dc\u05e1\u05e4\u05d9\u05e8\u05d4"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["\u05e8\u05d1\u05e2\u05d5\u05df 1","\u05e8\u05d1\u05e2\u05d5\u05df 2","\u05e8\u05d1\u05e2\u05d5\u05df 3","\u05e8\u05d1\u05e2\u05d5\u05df 4"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["\u05d9\u05e0\u05d5\u05f3","\u05e4\u05d1\u05e8\u05f3","\u05de\u05e8\u05e5","\u05d0\u05e4\u05e8\u05f3","\u05de\u05d0\u05d9","\u05d9\u05d5\u05e0\u05d9","\u05d9\u05d5\u05dc\u05d9","\u05d0\u05d5\u05d2\u05f3","\u05e1\u05e4\u05d8\u05f3","\u05d0\u05d5\u05e7\u05f3","\u05e0\u05d5\u05d1\u05f3","\u05d3\u05e6\u05de\u05f3"],wide:["\u05d9\u05e0\u05d5\u05d0\u05e8","\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8","\u05de\u05e8\u05e5","\u05d0\u05e4\u05e8\u05d9\u05dc","\u05de\u05d0\u05d9","\u05d9\u05d5\u05e0\u05d9","\u05d9\u05d5\u05dc\u05d9","\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8","\u05e1\u05e4\u05d8\u05de\u05d1\u05e8","\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8","\u05e0\u05d5\u05d1\u05de\u05d1\u05e8","\u05d3\u05e6\u05de\u05d1\u05e8"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["\u05d0\u05f3","\u05d1\u05f3","\u05d2\u05f3","\u05d3\u05f3","\u05d4\u05f3","\u05d5\u05f3","\u05e9\u05f3"],short:["\u05d0\u05f3","\u05d1\u05f3","\u05d2\u05f3","\u05d3\u05f3","\u05d4\u05f3","\u05d5\u05f3","\u05e9\u05f3"],abbreviated:["\u05d9\u05d5\u05dd \u05d0\u05f3","\u05d9\u05d5\u05dd \u05d1\u05f3","\u05d9\u05d5\u05dd \u05d2\u05f3","\u05d9\u05d5\u05dd \u05d3\u05f3","\u05d9\u05d5\u05dd \u05d4\u05f3","\u05d9\u05d5\u05dd \u05d5\u05f3","\u05e9\u05d1\u05ea"],wide:["\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df","\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9","\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9","\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9","\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9","\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9","\u05d9\u05d5\u05dd \u05e9\u05d1\u05ea"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6",pm:"\u05d0\u05d7\u05d4\u05f4\u05e6",midnight:"\u05d7\u05e6\u05d5\u05ea",noon:"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",morning:"\u05d1\u05d5\u05e7\u05e8",afternoon:"\u05d0\u05d7\u05e8 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",evening:"\u05e2\u05e8\u05d1",night:"\u05dc\u05d9\u05dc\u05d4"},abbreviated:{am:"\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6",pm:"\u05d0\u05d7\u05d4\u05f4\u05e6",midnight:"\u05d7\u05e6\u05d5\u05ea",noon:"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",morning:"\u05d1\u05d5\u05e7\u05e8",afternoon:"\u05d0\u05d7\u05e8 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",evening:"\u05e2\u05e8\u05d1",night:"\u05dc\u05d9\u05dc\u05d4"},wide:{am:"\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6",pm:"\u05d0\u05d7\u05d4\u05f4\u05e6",midnight:"\u05d7\u05e6\u05d5\u05ea",noon:"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",morning:"\u05d1\u05d5\u05e7\u05e8",afternoon:"\u05d0\u05d7\u05e8 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",evening:"\u05e2\u05e8\u05d1",night:"\u05dc\u05d9\u05dc\u05d4"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6",pm:"\u05d0\u05d7\u05d4\u05f4\u05e6",midnight:"\u05d7\u05e6\u05d5\u05ea",noon:"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",morning:"\u05d1\u05d1\u05d5\u05e7\u05e8",afternoon:"\u05d1\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",evening:"\u05d1\u05e2\u05e8\u05d1",night:"\u05d1\u05dc\u05d9\u05dc\u05d4"},abbreviated:{am:"\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6",pm:"\u05d0\u05d7\u05d4\u05f4\u05e6",midnight:"\u05d7\u05e6\u05d5\u05ea",noon:"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",morning:"\u05d1\u05d1\u05d5\u05e7\u05e8",afternoon:"\u05d0\u05d7\u05e8 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",evening:"\u05d1\u05e2\u05e8\u05d1",night:"\u05d1\u05dc\u05d9\u05dc\u05d4"},wide:{am:"\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6",pm:"\u05d0\u05d7\u05d4\u05f4\u05e6",midnight:"\u05d7\u05e6\u05d5\u05ea",noon:"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",morning:"\u05d1\u05d1\u05d5\u05e7\u05e8",afternoon:"\u05d0\u05d7\u05e8 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd",evening:"\u05d1\u05e2\u05e8\u05d1",night:"\u05d1\u05dc\u05d9\u05dc\u05d4"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default},92801:(e,t,a)=>{var i=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(13585)),o=i(a(96412)),r=["\u05e8\u05d0","\u05e9\u05e0","\u05e9\u05dc","\u05e8\u05d1","\u05d7","\u05e9\u05d9","\u05e9\u05d1","\u05e9\u05de","\u05ea","\u05e2"],d={ordinalNumber:(0,o.default)({matchPattern:/^(\d+|(\u05e8\u05d0\u05e9\u05d5\u05df|\u05e9\u05e0\u05d9|\u05e9\u05dc\u05d9\u05e9\u05d9|\u05e8\u05d1\u05d9\u05e2\u05d9|\u05d7\u05de\u05d9\u05e9\u05d9|\u05e9\u05d9\u05e9\u05d9|\u05e9\u05d1\u05d9\u05e2\u05d9|\u05e9\u05de\u05d9\u05e0\u05d9|\u05ea\u05e9\u05d9\u05e2\u05d9|\u05e2\u05e9\u05d9\u05e8\u05d9|\u05e8\u05d0\u05e9\u05d5\u05e0\u05d4|\u05e9\u05e0\u05d9\u05d9\u05d4|\u05e9\u05dc\u05d9\u05e9\u05d9\u05ea|\u05e8\u05d1\u05d9\u05e2\u05d9\u05ea|\u05d7\u05de\u05d9\u05e9\u05d9\u05ea|\u05e9\u05d9\u05e9\u05d9\u05ea|\u05e9\u05d1\u05d9\u05e2\u05d9\u05ea|\u05e9\u05de\u05d9\u05e0\u05d9\u05ea|\u05ea\u05e9\u05d9\u05e2\u05d9\u05ea|\u05e2\u05e9\u05d9\u05e8\u05d9\u05ea))/i,parsePattern:/^(\d+|\u05e8\u05d0|\u05e9\u05e0|\u05e9\u05dc|\u05e8\u05d1|\u05d7|\u05e9\u05d9|\u05e9\u05d1|\u05e9\u05de|\u05ea|\u05e2)/i,valueCallback:function(e){var t=parseInt(e,10);return isNaN(t)?r.indexOf(e)+1:t}}),era:(0,n.default)({matchPatterns:{narrow:/^\u05dc(\u05e1\u05e4\u05d9\u05e8\u05d4|\u05e4\u05e0\u05d4\u05f4\u05e1)/i,abbreviated:/^\u05dc(\u05e1\u05e4\u05d9\u05e8\u05d4|\u05e4\u05e0\u05d4\u05f4\u05e1)/i,wide:/^\u05dc(\u05e4\u05e0\u05d9 \u05d4)?\u05e1\u05e4\u05d9\u05e8\u05d4/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u05dc\u05e4/i,/^\u05dc\u05e1/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^\u05e8\u05d1\u05e2\u05d5\u05df [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^\d+/i,abbreviated:/^(\u05d9\u05e0\u05d5|\u05e4\u05d1\u05e8|\u05de\u05e8\u05e5|\u05d0\u05e4\u05e8|\u05de\u05d0\u05d9|\u05d9\u05d5\u05e0\u05d9|\u05d9\u05d5\u05dc\u05d9|\u05d0\u05d5\u05d2|\u05e1\u05e4\u05d8|\u05d0\u05d5\u05e7|\u05e0\u05d5\u05d1|\u05d3\u05e6\u05de)\u05f3?/i,wide:/^(\u05d9\u05e0\u05d5\u05d0\u05e8|\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8|\u05de\u05e8\u05e5|\u05d0\u05e4\u05e8\u05d9\u05dc|\u05de\u05d0\u05d9|\u05d9\u05d5\u05e0\u05d9|\u05d9\u05d5\u05dc\u05d9|\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8|\u05e1\u05e4\u05d8\u05de\u05d1\u05e8|\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8|\u05e0\u05d5\u05d1\u05de\u05d1\u05e8|\u05d3\u05e6\u05de\u05d1\u05e8)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^1$/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^7/i,/^8/i,/^9/i,/^10/i,/^11/i,/^12/i],any:[/^\u05d9\u05e0/i,/^\u05e4/i,/^\u05de\u05e8/i,/^\u05d0\u05e4/i,/^\u05de\u05d0/i,/^\u05d9\u05d5\u05e0/i,/^\u05d9\u05d5\u05dc/i,/^\u05d0\u05d5\u05d2/i,/^\u05e1/i,/^\u05d0\u05d5\u05e7/i,/^\u05e0/i,/^\u05d3/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[\u05d0\u05d1\u05d2\u05d3\u05d4\u05d5\u05e9]\u05f3/i,short:/^[\u05d0\u05d1\u05d2\u05d3\u05d4\u05d5\u05e9]\u05f3/i,abbreviated:/^(\u05e9\u05d1\u05ea|\u05d9\u05d5\u05dd (\u05d0|\u05d1|\u05d2|\u05d3|\u05d4|\u05d5)\u05f3)/i,wide:/^\u05d9\u05d5\u05dd (\u05e8\u05d0\u05e9\u05d5\u05df|\u05e9\u05e0\u05d9|\u05e9\u05dc\u05d9\u05e9\u05d9|\u05e8\u05d1\u05d9\u05e2\u05d9|\u05d7\u05de\u05d9\u05e9\u05d9|\u05e9\u05d9\u05e9\u05d9|\u05e9\u05d1\u05ea)/i},defaultMatchWidth:"wide",parsePatterns:{abbreviated:[/\u05d0\u05f3$/i,/\u05d1\u05f3$/i,/\u05d2\u05f3$/i,/\u05d3\u05f3$/i,/\u05d4\u05f3$/i,/\u05d5\u05f3$/i,/^\u05e9/i],wide:[/\u05df$/i,/\u05e0\u05d9$/i,/\u05dc\u05d9\u05e9\u05d9$/i,/\u05e2\u05d9$/i,/\u05de\u05d9\u05e9\u05d9$/i,/\u05e9\u05d9\u05e9\u05d9$/i,/\u05ea$/i],any:[/^\u05d0/i,/^\u05d1/i,/^\u05d2/i,/^\u05d3/i,/^\u05d4/i,/^\u05d5/i,/^\u05e9/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{any:/^(\u05d0\u05d7\u05e8 \u05d4|\u05d1)?(\u05d7\u05e6\u05d5\u05ea|\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05d5\u05e7\u05e8|\u05e2\u05e8\u05d1|\u05dc\u05d9\u05dc\u05d4|\u05d0\u05d7\u05d4\u05f4\u05e6|\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u05dc\u05e4/i,pm:/^\u05d0\u05d7\u05d4/i,midnight:/^\u05d7/i,noon:/^\u05e6/i,morning:/\u05d1\u05d5\u05e7\u05e8/i,afternoon:/\u05d1\u05e6|\u05d0\u05d7\u05e8/i,evening:/\u05e2\u05e8\u05d1/i,night:/\u05dc\u05d9\u05dc\u05d4/i}},defaultParseWidth:"any"})};t.default=d,e.exports=t.default},65113:(e,t,a)=>{var i=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(53881)),o=i(a(14928)),r=i(a(90786)),d=i(a(56881)),u=i(a(92801)),l={code:"he",formatDistance:n.default,formatLong:o.default,formatRelative:r.default,localize:d.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);