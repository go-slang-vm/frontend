"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[45502],{77914:(i,a,t)=>{var e=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e(t(13585)),d={ordinalNumber:(0,e(t(96412)).default)({matchPattern:/^(\d+)(-?(\u0448\u0456|\u0448\u044b))?/i,parsePattern:/\d+/i,valueCallback:function(i){return parseInt(i,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^((\u0431 )?\u0437\.?\s?\u0434\.?)/i,abbreviated:/^((\u0431 )?\u0437\.?\s?\u0434\.?)/i,wide:/^(\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437\u0493\u0430 \u0434\u0435\u0439\u0456\u043d|\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437|\u0431\u0456\u0437\u0434\u0456\u04a3 \u0437\u0430\u043c\u0430\u043d\u044b\u043c\u044b\u0437\u0434\u0430\u043d)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0431/i,/^\u0437/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?\u0448\u0456)? \u0442\u043e\u049b.?/i,wide:/^[1234](-?\u0448\u0456)? \u0442\u043e\u049b\u0441\u0430\u043d/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(\u049b|\u0430|\u043d|\u0441|\u043c|\u043c\u0430\u0443|\u0448|\u0442|\u049b\u044b\u0440|\u049b\u0430\u0437|\u049b\u0430\u0440|\u0436)/i,abbreviated:/^(\u049b\u0430\u04a3|\u0430\u049b\u043f|\u043d\u0430\u0443|\u0441\u04d9\u0443|\u043c\u0430\u043c|\u043c\u0430\u0443|\u0448\u0456\u043b|\u0442\u0430\u043c|\u049b\u044b\u0440|\u049b\u0430\u0437|\u049b\u0430\u0440|\u0436\u0435\u043b)/i,wide:/^(\u049b\u0430\u04a3\u0442\u0430\u0440|\u0430\u049b\u043f\u0430\u043d|\u043d\u0430\u0443\u0440\u044b\u0437|\u0441\u04d9\u0443\u0456\u0440|\u043c\u0430\u043c\u044b\u0440|\u043c\u0430\u0443\u0441\u044b\u043c|\u0448\u0456\u043b\u0434\u0435|\u0442\u0430\u043c\u044b\u0437|\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a|\u049b\u0430\u0437\u0430\u043d|\u049b\u0430\u0440\u0430\u0448\u0430|\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u049b/i,/^\u0430/i,/^\u043d/i,/^\u0441/i,/^\u043c/i,/^\u043c/i,/^\u0448/i,/^\u0442/i,/^\u049b/i,/^\u049b/i,/^\u049b/i,/^\u0436/i],abbreviated:[/^\u049b\u0430\u04a3/i,/^\u0430\u049b\u043f/i,/^\u043d\u0430\u0443/i,/^\u0441\u04d9\u0443/i,/^\u043c\u0430\u043c/i,/^\u043c\u0430\u0443/i,/^\u0448\u0456\u043b/i,/^\u0442\u0430\u043c/i,/^\u049b\u044b\u0440/i,/^\u049b\u0430\u0437/i,/^\u049b\u0430\u0440/i,/^\u0436\u0435\u043b/i],any:[/^\u049b/i,/^\u0430/i,/^\u043d/i,/^\u0441/i,/^\u043c/i,/^\u043c/i,/^\u0448/i,/^\u0442/i,/^\u049b/i,/^\u049b/i,/^\u049b/i,/^\u0436/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^(\u0436|\u0434|\u0441|\u0441|\u0431|\u0436|\u0441)/i,short:/^(\u0436\u0441|\u0434\u0441|\u0441\u0441|\u0441\u0440|\u0431\u0441|\u0436\u043c|\u0441\u0431)/i,wide:/^(\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456|\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456|\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456|\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456|\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456|\u0436\u04b1\u043c\u0430|\u0441\u0435\u043d\u0431\u0456)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0436/i,/^\u0434/i,/^\u0441/i,/^\u0441/i,/^\u0431/i,/^\u0436/i,/^\u0441/i],short:[/^\u0436\u0441/i,/^\u0434\u0441/i,/^\u0441\u0441/i,/^\u0441\u0440/i,/^\u0431\u0441/i,/^\u0436\u043c/i,/^\u0441\u0431/i],any:[/^\u0436[\u0435\u043a]/i,/^\u0434[\u04af\u0439]/i,/^\u0441e[\u0439]/i,/^\u0441\u04d9[\u0440]/i,/^\u0431[\u0435\u0439]/i,/^\u0436[\u04b1\u043c]/i,/^\u0441\u0435[\u043d]/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^\u0422\.?\s?[\u0414\u041a]\.?|\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430|((\u0442\u04af\u0441\u0442\u0435|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u0434\u0430|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u043c\u0435\u043d|\u0442\u0430\u04a3|\u043a\u04af\u043d\u0434\u0456\u0437|\u043a\u04af\u043d|\u043a\u0435\u0448\u0442\u0435|\u043a\u0435\u0448|\u0442\u04af\u043d\u0434\u0435|\u0442\u04af\u043d)\.?)/i,wide:/^\u0422\.?\s?[\u0414\u041a]\.?|\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430|((\u0442\u04af\u0441\u0442\u0435|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u0434\u0430|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u043c\u0435\u043d|\u0442\u0430\u04a3|\u043a\u04af\u043d\u0434\u0456\u0437|\u043a\u04af\u043d|\u043a\u0435\u0448\u0442\u0435|\u043a\u0435\u0448|\u0442\u04af\u043d\u0434\u0435|\u0442\u04af\u043d)\.?)/i,any:/^\u0422\.?\s?[\u0414\u041a]\.?|\u0442\u04af\u043d \u043e\u0440\u0442\u0430\u0441\u044b\u043d\u0434\u0430|((\u0442\u04af\u0441\u0442\u0435|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u0434\u0430|\u0442\u0430\u04a3\u0435\u0440\u0442\u0435\u04a3|\u0442\u0430\u04a3\u043c\u0435\u043d|\u0442\u0430\u04a3|\u043a\u04af\u043d\u0434\u0456\u0437|\u043a\u04af\u043d|\u043a\u0435\u0448\u0442\u0435|\u043a\u0435\u0448|\u0442\u04af\u043d\u0434\u0435|\u0442\u04af\u043d)\.?)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^\u0422\u0414/i,pm:/^\u0422\u041a/i,midnight:/^\u0442\u04af\u043d \u043e\u0440\u0442\u0430/i,noon:/^\u043a\u04af\u043d\u0434\u0456\u0437/i,morning:/\u0442\u0430\u04a3/i,afternoon:/\u0442\u04af\u0441/i,evening:/\u043a\u0435\u0448/i,night:/\u0442\u04af\u043d/i}},defaultParseWidth:"any"})};a.default=d,i.exports=a.default}}]);