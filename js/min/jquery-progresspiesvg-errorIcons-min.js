/**
 * @license 
 * Copyright (c) 2016, Immo Schulz-Gerlach, www.isg-software.de 
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are 
 * permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT 
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, 
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED 
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; 
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
 * WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
!function($){function t(t,e,n){var r=e*t.iconSizeFactor;return n&&"none"!==t.lineCap&&(r-=t.strokeWidth/2),r}function e(t,e){var n=t.newSvgElement("polygon"),r=t.borderRadius;"number"!=typeof r&&(r=0);var i=e-r,o=i*Math.sin(Math.PI/3),s=i*Math.cos(Math.PI/3);return n.setAttribute("points","0,-"+i+" "+o+","+s+" -"+o+","+s),n.setAttribute("fill",t.backgroundColor),r>0&&(n.setAttribute("stroke-width",2*r),n.setAttribute("stroke",t.backgroundColor),n.setAttribute("stroke-linejoin","round")),s+r}function n(t,e,n){var r=t.newSvgElement("line"),i=t.strokeWidth<2?1:0,o=t.strokeWidth+i;"round"!==t.lineCap&&o++;var s=t.strokeWidth<2?2:.8*t.strokeWidth,a=e+n-o-s,u=a>o,l="none"===t.lineCap?0:t.strokeWidth/2,c=-e+l,g=n-(u?o+s:0)-l;r.setAttribute("x1",0),r.setAttribute("y1",c),r.setAttribute("x2",0),r.setAttribute("y2",g),r.setAttribute("style","stroke-width: "+t.strokeWidth+"; stroke-linecap: "+t.lineCap+"; stroke: "+t.iconColor+"; fill: none");var d;if(t.animate){d="string"==typeof t.animate?t.animate:"1s";var f=t.newSvgSubelement(r,"animate");f.setAttribute("attributeName","y2"),f.setAttribute("dur",d),f.setAttribute("repeatCount","1"),f.setAttribute("calcMode","spline"),f.setAttribute("values",c+"; "+g+"; "+g),f.setAttribute("keyTimes","0; 0.9; 1"),f.setAttribute("keySplines",".5 0 .3 1; 0 0 0 0")}if(u){var b;if(0===i){var k=o/2;if(b=t.newSvgElement("circle"),b.setAttribute("cx",0),b.setAttribute("cy",n-k),b.setAttribute("r",k),b.setAttribute("fill",t.iconColor),t.animate){var p=t.newSvgSubelement(b,"animate");p.setAttribute("attributeName","r"),p.setAttribute("dur",d),p.setAttribute("repeatCount",1),p.setAttribute("calcMode","spline"),p.setAttribute("values","0; 0; "+k),p.setAttribute("keyTimes","0; 0.4; 1"),p.setAttribute("keySplines","0 0 1 1; .75 0 .25 0")}}else b=t.newSvgElement("line"),b.setAttribute("x1",0),b.setAttribute("y1",n-l-i),b.setAttribute("x2",0),b.setAttribute("y2",n-l),b.setAttribute("style","stroke-width: "+t.strokeWidth+"; stroke-linecap: "+t.lineCap+"; stroke: "+t.iconColor+"; fill: none")}}$.fn.progressPie.contentPlugin.cross={draw:function(e){var n=$.extend({},$.fn.progressPie.contentPlugin.crossDefaults,e),r=n.getBackgroundRadius(!n.backgroundColor);n.addBackground(r);var i=t(n,r,!0),o=i/Math.sqrt(2),s="M-"+o+",-"+o+" ",a="L"+o+","+o+" ",u="M-"+o+","+o+" ",l="L"+o+",-"+o,c=e.newSvgElement("path");if(c.setAttribute("d",s+a+u+l),c.setAttribute("style","stroke-width: "+n.strokeWidth+"; stroke-linecap: "+n.lineCap+"; stroke: "+n.iconColor+"; fill: none"),n.animate){var g=e.newSvgSubelement(c,"animate");g.setAttribute("attributeName","d"),g.setAttribute("dur","string"==typeof n.animate?n.animate:"1s"),g.setAttribute("repeatCount","1"),g.setAttribute("values",s+"l0,0 m0,0 l0,0; "+s+a+"m0,0 l0,0; "+s+a+u+" l0,0; "+s+a+u+l),g.setAttribute("calcMode","spline"),g.setAttribute("keyTimes","0; .45; .55; 1"),g.setAttribute("keySplines",".5 0 .3 1; 1 0 0 1; .3 0 0 1")}},hidesChartIfFullSize:function(t){var e=$.extend({},$.fn.progressPie.contentPlugin.crossDefaults,t);return"string"==typeof e.backgroundColor&&"rgba"!==e.backgroundColor.substr(0,4)&&!e.margin&&!this.inBackground(t)},inBackground:function(t){var e=$.extend({},$.fn.progressPie.contentPlugin.crossDefaults,t);return e.inBackground}},$.fn.progressPie.contentPlugin.exclamationMark={draw:function(e){var r=$.extend({},$.fn.progressPie.contentPlugin.exclamationMarkDefaults,e),i=r.getBackgroundRadius(!r.backgroundColor);r.addBackground(i);var o=t(r,i,!1);n(r,o,o)},hidesChartIfFullSize:function(t){var e=$.extend({},$.fn.progressPie.contentPlugin.exclamationMarkDefaults,t);return"string"==typeof e.backgroundColor&&"rgba"!==e.backgroundColor.substr(0,4)&&!e.margin&&!this.inBackground(t)},inBackground:function(t){var e=$.extend({},$.fn.progressPie.contentPlugin.exclamationMarkDefaults,t);return e.inBackground}},$.fn.progressPie.contentPlugin.warning={draw:function(r){var i=$.extend({},$.fn.progressPie.contentPlugin.warningDefaults,r),o=i.getBackgroundRadius(),s=t(i,o,!1),a=e(i,o)-.2*o;n(i,s,a)},hidesChartIfFullSize:function(t){var e=$.extend({},$.fn.progressPie.contentPlugin.warningDefaults,t);return e.hideChart},inBackground:function(t){var e=$.extend({},$.fn.progressPie.contentPlugin.warningDefaults,t);return e.inBackground}},$.fn.progressPie.contentPlugin.errorIconsCommonDefaults={iconColor:"white",strokeWidth:2,lineCap:"round",fullSize:!1,inBackground:!1,iconSizeFactor:.6},$.fn.progressPie.contentPlugin.crossDefaults=$.extend({},$.fn.progressPie.contentPlugin.errorIconsCommonDefaults,{backgroundColor:"red"}),$.fn.progressPie.contentPlugin.exclamationMarkDefaults=$.extend({},$.fn.progressPie.contentPlugin.errorIconsCommonDefaults,{backgroundColor:"#ea0"}),$.fn.progressPie.contentPlugin.warningDefaults=$.extend({},$.fn.progressPie.contentPlugin.exclamationMarkDefaults,{borderRadius:0,hideChart:!1})}(jQuery);