"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[14181],{46197:(e,n)=>{function t(e){return function(n,t){if(1===n)return null!==t&&void 0!==t&&t.addSuffix?e.one[0].replace("{{time}}",e.one[2]):e.one[0].replace("{{time}}",e.one[1]);var a=n%10===1&&n%100!==11;return null!==t&&void 0!==t&&t.addSuffix?e.other[0].replace("{{time}}",a?e.other[3]:e.other[4]).replace("{{count}}",String(n)):e.other[0].replace("{{time}}",a?e.other[1]:e.other[2]).replace("{{count}}",String(n))}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={lessThanXSeconds:t({one:["maz\u0101k par {{time}}","sekundi","sekundi"],other:["maz\u0101k nek\u0101 {{count}} {{time}}","sekunde","sekundes","sekundes","sekund\u0113m"]}),xSeconds:t({one:["1 {{time}}","sekunde","sekundes"],other:["{{count}} {{time}}","sekunde","sekundes","sekundes","sekund\u0113m"]}),halfAMinute:function(e,n){return null!==n&&void 0!==n&&n.addSuffix?"pusmin\u016btes":"pusmin\u016bte"},lessThanXMinutes:t({one:["maz\u0101k par {{time}}","min\u016bti","min\u016bti"],other:["maz\u0101k nek\u0101 {{count}} {{time}}","min\u016bte","min\u016btes","min\u016btes","min\u016bt\u0113m"]}),xMinutes:t({one:["1 {{time}}","min\u016bte","min\u016btes"],other:["{{count}} {{time}}","min\u016bte","min\u016btes","min\u016btes","min\u016bt\u0113m"]}),aboutXHours:t({one:["apm\u0113ram 1 {{time}}","stunda","stundas"],other:["apm\u0113ram {{count}} {{time}}","stunda","stundas","stundas","stund\u0101m"]}),xHours:t({one:["1 {{time}}","stunda","stundas"],other:["{{count}} {{time}}","stunda","stundas","stundas","stund\u0101m"]}),xDays:t({one:["1 {{time}}","diena","dienas"],other:["{{count}} {{time}}","diena","dienas","dienas","dien\u0101m"]}),aboutXWeeks:t({one:["apm\u0113ram 1 {{time}}","ned\u0113\u013ca","ned\u0113\u013cas"],other:["apm\u0113ram {{count}} {{time}}","ned\u0113\u013ca","ned\u0113\u013cu","ned\u0113\u013cas","ned\u0113\u013c\u0101m"]}),xWeeks:t({one:["1 {{time}}","ned\u0113\u013ca","ned\u0113\u013cas"],other:["{{count}} {{time}}","ned\u0113\u013ca","ned\u0113\u013cu","ned\u0113\u013cas","ned\u0113\u013c\u0101m"]}),aboutXMonths:t({one:["apm\u0113ram 1 {{time}}","m\u0113nesis","m\u0113ne\u0161a"],other:["apm\u0113ram {{count}} {{time}}","m\u0113nesis","m\u0113ne\u0161i","m\u0113ne\u0161a","m\u0113ne\u0161iem"]}),xMonths:t({one:["1 {{time}}","m\u0113nesis","m\u0113ne\u0161a"],other:["{{count}} {{time}}","m\u0113nesis","m\u0113ne\u0161i","m\u0113ne\u0161a","m\u0113ne\u0161iem"]}),aboutXYears:t({one:["apm\u0113ram 1 {{time}}","gads","gada"],other:["apm\u0113ram {{count}} {{time}}","gads","gadi","gada","gadiem"]}),xYears:t({one:["1 {{time}}","gads","gada"],other:["{{count}} {{time}}","gads","gadi","gada","gadiem"]}),overXYears:t({one:["ilg\u0101k par 1 {{time}}","gadu","gadu"],other:["vair\u0101k nek\u0101 {{count}} {{time}}","gads","gadi","gada","gadiem"]}),almostXYears:t({one:["gandr\u012bz 1 {{time}}","gads","gada"],other:["vair\u0101k nek\u0101 {{count}} {{time}}","gads","gadi","gada","gadiem"]})},i=function(e,n,t){var i=a[e](n,t);return null!==t&&void 0!==t&&t.addSuffix?t.comparison&&t.comparison>0?"p\u0113c "+i:"pirms "+i:i};n.default=i,e.exports=n.default}}]);