"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[1120,5489],{4249:(t,e,s)=>{s.d(e,{E:()=>o,t:()=>n});var i=s(8080),a=s(8327);function n(t,e=3e3){const s=(0,i.n)();return setTimeout((()=>{const e=t();e&&s.reject(e)}),e),s}class o{constructor(t){this.db=t,this.cb=(0,i.f)(""),this.referrerPolicy=null,t.setAttribute("frameBorder","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("allow","autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; gyroscope"),null!==this.referrerPolicy&&t.setAttribute("referrerpolicy",this.referrerPolicy)}get iframe(){return this.db}setup(){(0,i.l)(window,"message",this.Lg.bind(this)),(0,i.l)(this.db,"load",this.lc.bind(this)),(0,i.g)(this.fd.bind(this))}fd(){const t=this.cb();if(!t.length)return void this.db.setAttribute("src","");const e=(0,i.p)((()=>this.Te()));this.db.setAttribute("src",(0,a.a)(t,e))}gd(t,e){this.db.contentWindow?.postMessage(JSON.stringify(t),e??"*")}Lg(t){const e=this.eb();if(!(null!==t.source&&t.source!==this.db?.contentWindow||(0,i.i)(e)&&e!==t.origin)){try{const e=JSON.parse(t.data);return void(e&&this.hd(e,t))}catch(t){}t.data&&this.hd(t.data,t)}}}},5489:(t,e,s)=>{s.d(e,{findYouTubePoster:()=>r,resolveYouTubeVideoId:()=>o});const i=/(?:youtu\.be|youtube|youtube\.com|youtube-nocookie\.com)\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|)((?:\w|-){11})/,a=new Map,n=new Map;function o(t){return t.match(i)?.[1]}async function r(t,e){if(a.has(t))return a.get(t);if(n.has(t))return n.get(t);const s=new Promise((async s=>{const i=["maxresdefault","sddefault","hqdefault"];for(const n of i)for(const i of[!0,!1]){const o=h(t,n,i);if((await fetch(o,{mode:"no-cors",signal:e.signal})).status<400)return a.set(t,o),void s(o)}})).catch((()=>"")).finally((()=>n.delete(t)));return n.set(t,s),s}function h(t,e,s){return`https://i.ytimg.com/${s?"vi_webp":"vi"}/${t}/${e}.${s?"webp":"jpg"}`}},1120:(t,e,s)=>{s.r(e),s.d(e,{YouTubeProvider:()=>h});var i=s(8080),a=s(7927),n=s(8327),o=s(4249),r=s(5489);class h extends o.E{constructor(t,e){super(t),this.b=e,this.$$PROVIDER_TYPE="YOUTUBE",this.scope=(0,i.r)(),this.N=(0,i.f)(""),this.mc=-1,this.nc=-1,this.Jk=!1,this.Fa=0,this.Ga=new a.T(0,0),this.V=null,this.E=null,this.G=null,this.language="en",this.color="red",this.cookies=!1}get c(){return this.b.delegate.c}get currentSrc(){return this.V}get type(){return"youtube"}get videoId(){return this.N()}preconnect(){(0,n.p)(this.eb())}setup(){super.setup(),(0,i.g)(this.kd.bind(this)),this.c("provider-setup",this)}async play(){const{paused:t}=this.b.$state;return this.E||(this.E=(0,o.t)((()=>{if(this.E=null,t())return"Timed out."})),this.q("playVideo")),this.E.promise}async pause(){const{paused:t}=this.b.$state;return this.G||(this.G=(0,o.t)((()=>{this.G=null,t()})),this.q("pauseVideo")),this.G.promise}setMuted(t){t?this.q("mute"):this.q("unMute")}setCurrentTime(t){this.Jk=this.b.$state.paused(),this.q("seekTo",t),this.c("seeking",t)}setVolume(t){this.q("setVolume",100*t)}setPlaybackRate(t){this.q("setPlaybackRate",t)}async loadSource(t){if(!(0,i.i)(t.src))return this.V=null,void this.N.set("");const e=(0,r.resolveYouTubeVideoId)(t.src);this.N.set(e??""),this.V=t}eb(){return this.cookies?"https://www.youtube.com":"https://www.youtube-nocookie.com"}kd(){this.H();const t=this.N();t?(this.cb.set(`${this.eb()}/embed/${t}`),this.c("load-start")):this.cb.set("")}Te(){const{keyDisabled:t}=this.b.$props,{$iosControls:e}=this.b,{controls:s,muted:i,playsInline:a}=this.b.$state,n=s()||e();return{autoplay:0,cc_lang_pref:this.language,cc_load_policy:n?1:void 0,color:this.color,controls:n?1:0,disablekb:!n||t()?1:0,enablejsapi:1,fs:1,hl:this.language,iv_load_policy:n?1:3,mute:i()?1:0,playsinline:a()?1:0}}q(t,e){this.gd({event:"command",func:t,args:e?[e]:void 0})}lc(){window.setTimeout((()=>this.gd({event:"listening"})),100)}md(t){this.c("loaded-metadata"),this.c("loaded-data"),this.b.delegate.jc(void 0,t)}Aa(t){this.G?.resolve(),this.G=null,this.c("pause",void 0,t)}Eb(t,e){const{duration:s,realCurrentTime:i}=this.b.$state,a=0===this.mc,n=a?s():t,o={currentTime:n,played:this.cm(n)};this.c("time-update",o,e),!a&&Math.abs(n-i())>1&&this.c("seeking",n,e)}cm(t){return this.Fa>=t?this.Ga:this.Ga=new a.T(0,this.Fa=t)}ic(t,e,s){const i={buffered:new a.T(0,t),seekable:e};this.c("progress",i,s);const{seeking:n,realCurrentTime:o}=this.b.$state;n()&&t>o()&&this.bb(s)}bb(t){const{paused:e,realCurrentTime:s}=this.b.$state;window.clearTimeout(this.nc),this.nc=window.setTimeout((()=>{this.c("seeked",s(),t),this.nc=-1}),e()?100:0),this.Jk=!1}Db(t){const{seeking:e}=this.b.$state;e()&&this.bb(t),this.c("pause",void 0,t),this.c("end",void 0,t)}Rg(t,e){const{started:s,paused:i,seeking:a}=this.b.$state,n=1===t,o=3===t,r=(i()||this.E)&&(o||n);if(o&&this.c("waiting",void 0,e),a()&&n&&this.bb(e),!s()&&r&&this.Jk)return this.E?.reject("invalid internal play operation"),this.E=null,void(n&&(this.pause(),this.Jk=!1));switch(r&&(this.E?.resolve(),this.E=null,this.c("play",void 0,e)),t){case 5:this.md(e);break;case 1:this.c("playing",void 0,e);break;case 2:this.Aa(e);break;case 0:this.Db(e)}this.mc=t}hd({info:t},e){if(!t)return;const{title:s,intrinsicDuration:n,playbackRate:o}=this.b.$state;if((0,i.t)(t.videoData)&&t.videoData.title!==s()&&this.c("title-change",t.videoData.title,e),(0,i.j)(t.duration)&&t.duration!==n()){if((0,i.j)(t.videoLoadedFraction)){const s=t.progressState?.loaded??t.videoLoadedFraction*t.duration,i=new a.T(0,t.duration);this.ic(s,i,e)}this.c("duration-change",t.duration,e)}if((0,i.j)(t.playbackRate)&&t.playbackRate!==o()&&this.c("rate-change",t.playbackRate,e),t.progressState){const{current:s,seekableStart:i,seekableEnd:o,loaded:r,duration:h}=t.progressState;this.Eb(s,e),this.ic(r,new a.T(i,o),e),h!==n()&&this.c("duration-change",h,e)}if((0,i.j)(t.volume)&&(0,i.b)(t.muted)){const s={muted:t.muted,volume:t.volume/100};this.c("volume-change",s,e)}(0,i.j)(t.playerState)&&t.playerState!==this.mc&&this.Rg(t.playerState,e)}H(){this.mc=-1,this.nc=-1,this.Fa=0,this.Ga=new a.T(0,0),this.E=null,this.G=null,this.Jk=!1}}}}]);