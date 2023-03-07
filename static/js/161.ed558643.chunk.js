(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var i=n(1523),r=n(6842),s=n(7892),a=n.n(s),o=n(184),u=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("/Personal-site").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},c=[{title:"Recovery of Missing Data in Sensor Networks using Graph Signal Processing (2022 EUSIPCO)",subtitle:"EUSIPCO",image:"/images/projects/project1.jpg",date:"2022-07-15",desc:"Inspired by the emerging field of graph signal processing, this paper performs a new study of a Sobolev reconstruction algorithm in wireless sensor networks"},{title:"Reinforced Swarm Optimization Algorithm (2021 EUROCON)",subtitle:"EUROCON",image:"/images/projects/project2.JPG",date:"2021-09-15",desc:"In this paper, we propose a novel feature selection algorithm named Reinforced Swarm Optimization (RSO) which embeds the widely used Bee Swarm Optimization (BSO) algorithm along with Reinforcement Learning (RL) to maximize the reward of a superior search agent and punish the inferior ones"},{title:"Moving Object Detection for Event-based Vision (2022 UPCON)",subtitle:"UPCON",image:"/images/projects/project3.JPG",date:"2021-12-15",desc:"Event-based cameras are bio-inspired cameras that work by mimicking the working of the human eye. In this paper we use k-Means clustering for detecting moving objects in event-based data"},{title:"Monocular Depth Estimation (2021 UPCON)",subtitle:"UPCON",image:"/images/projects/project4.JPG",date:"2021-03-15",desc:"In this paper, we propose a simple encoder-decoder based network that can predict high-quality depth images from single RGB images using transfer learning"},{title:"Logic and Reduction Operation based Hardware Trojans in Digital Design (2022 ISOCC)",subtitle:"ISOCC",image:"/images/projects/project4.JPG",date:"2022-10-19",desc:"In this paper, we will demonstrate Hardware Trojan Attacks on four different digital designs implemented on FPGA."}],h=function(){return(0,o.jsx)(r.Z,{title:"Projects",description:"Learn about Mayukhmali Das's publications.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(i.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"Some of my publications"})]})}),c.map((function(t){return(0,o.jsx)(u,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",u="week",c="month",h="quarter",d="year",l="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},M={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+$(i,2,"0")+":"+$(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,a=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:o,D:l,h:a,m:s,s:r,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",w={};w[v]=g;var y=function(t){return t instanceof j},S=function t(e,n,i){var r;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();w[s]&&(r=s),n&&(w[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;w[o]=e,r=o}return!i&&r&&(v=r),r||!i&&v},D=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new j(n)},O=M;O.l=S,O.i=y,O.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function g(t){this.$L=S(t.locale,null,!0),this.parse(t)}var $=g.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return O},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return D(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<D(t)},$.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,i=!!O.u(e)||e,h=O.p(t),f=function(t,e){var r=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},m=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,g=this.$M,$=this.$D,M="set"+(this.$u?"UTC":"");switch(h){case d:return i?f(1,0):f(31,11);case c:return i?f(1,g):f(0,g+1);case u:var v=this.$locale().weekStart||0,w=(p<v?p+7:p)-v;return f(i?$-w:$+(6-w),g);case o:case l:return m(M+"Hours",0);case a:return m(M+"Minutes",1);case s:return m(M+"Seconds",2);case r:return m(M+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,u=O.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[o]=h+"Date",n[l]=h+"Date",n[c]=h+"Month",n[d]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[r]=h+"Seconds",n[i]=h+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===d){var p=this.clone().set(l,1);p.$d[f](m),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[O.p(t)]()},$.add=function(i,h){var l,f=this;i=Number(i);var m=O.p(h),p=function(t){var e=D(f);return O.w(e.date(e.date()+Math.round(t*i)),f)};if(m===c)return this.set(c,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===o)return p(1);if(m===u)return p(7);var g=(l={},l[s]=e,l[a]=n,l[r]=t,l)[m]||1,$=this.$d.getTime()+i*g;return O.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,h=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},d=function(t){return O.s(s%12||12,t,"0")},l=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:O.s(o+1,2,"0"),MMM:h(n.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,u,2),ddd:h(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:O.s(s,2,"0"),h:d(1),hh:d(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return i.replace(p,(function(t,e){return e||m[t]||r.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(i,l,f){var m,p=O.p(l),g=D(i),$=(g.utcOffset()-this.utcOffset())*e,M=this-g,v=O.m(this,g);return v=(m={},m[d]=v/12,m[c]=v,m[h]=v/3,m[u]=(M-$)/6048e5,m[o]=(M-$)/864e5,m[a]=M/n,m[s]=M/e,m[r]=M/t,m)[p]||M,f?v:O.a(v)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return w[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=S(t,e,!0);return i&&(n.$L=i),n},$.clone=function(){return O.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},g}(),b=j.prototype;return D.prototype=b,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",c],["$y",d],["$D",l]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,j,D),t.$i=!0),D},D.locale=S,D.isDayjs=y,D.unix=function(t){return D(1e3*t)},D.en=w[v],D.Ls=w,D.p={},D}()}}]);
//# sourceMappingURL=161.ed558643.chunk.js.map