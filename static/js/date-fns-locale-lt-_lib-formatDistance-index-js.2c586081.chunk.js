"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[46100],{54805:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={xseconds_other:"sekund\u0117_sekund\u017ei\u0173_sekundes",xminutes_one:"minut\u0117_minut\u0117s_minut\u0119",xminutes_other:"minut\u0117s_minu\u010di\u0173_minutes",xhours_one:"valanda_valandos_valand\u0105",xhours_other:"valandos_valand\u0173_valandas",xdays_one:"diena_dienos_dien\u0105",xdays_other:"dienos_dien\u0173_dienas",xweeks_one:"savait\u0117_savait\u0117s_savait\u0119",xweeks_other:"savait\u0117s_savai\u010di\u0173_savaites",xmonths_one:"m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",xmonths_other:"m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",xyears_one:"metai_met\u0173_metus",xyears_other:"metai_met\u0173_metus",about:"apie",over:"daugiau nei",almost:"beveik",lessthan:"ma\u017eiau nei"},s=function(e,o,n,s){return o?s?"keli\u0173 sekund\u017ei\u0173":"kelias sekundes":"kelios sekund\u0117s"},t=function(e,o,n,s){return o?s?r(n)[1]:r(n)[2]:r(n)[0]},a=function(e,o,n,s){var a=e+" ";return 1===e?a+t(0,o,n,s):o?s?a+r(n)[1]:a+(i(e)?r(n)[1]:r(n)[2]):a+(i(e)?r(n)[1]:r(n)[0])};function i(e){return e%10===0||e>10&&e<20}function r(e){return n[e].split("_")}var u={lessThanXSeconds:{one:s,other:a},xSeconds:{one:s,other:a},halfAMinute:"pus\u0117 minut\u0117s",lessThanXMinutes:{one:t,other:a},xMinutes:{one:t,other:a},aboutXHours:{one:t,other:a},xHours:{one:t,other:a},xDays:{one:t,other:a},aboutXWeeks:{one:t,other:a},xWeeks:{one:t,other:a},aboutXMonths:{one:t,other:a},xMonths:{one:t,other:a},aboutXYears:{one:t,other:a},xYears:{one:t,other:a},overXYears:{one:t,other:a},almostXYears:{one:t,other:a}},d=function(e,o,s){var t,a=e.match(/about|over|almost|lessthan/i),i=a?e.replace(a[0],""):e,r=void 0!==(null===s||void 0===s?void 0:s.comparison)&&s.comparison>0,d=u[e];if(t="string"===typeof d?d:1===o?d.one(o,!0===(null===s||void 0===s?void 0:s.addSuffix),i.toLowerCase()+"_one",r):d.other(o,!0===(null===s||void 0===s?void 0:s.addSuffix),i.toLowerCase()+"_other",r),a){var _=a[0].toLowerCase();t=n[_]+" "+t}return null!==s&&void 0!==s&&s.addSuffix?s.comparison&&s.comparison>0?"po "+t:"prie\u0161 "+t:t};o.default=d,e.exports=o.default}}]);