(self.webpackChunkgame_score_sdk=self.webpackChunkgame_score_sdk||[]).push([[9084],{280:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var n=i(2616),r=i.n(n)()((function(t){return t[1]}));r.push([t.id,".gp-gamedistribution-sticky{display:flex;justify-content:center;position:fixed;left:50%;transform:translateX(-50%);z-index:100;max-height:90px;max-width:728px;overflow:hidden}.gp-gamedistribution-sticky__creative{position:relative;height:90px;width:728px;max-width:100vw}.gp-gamedistribution-sticky_top{top:0}.gp-gamedistribution-sticky_bottom{bottom:0}",""]);const o=r},4340:(t,e,i)=>{"use strict";i.d(e,{D:()=>n});const n=()=>Promise.resolve({success:!1,rating:0,error:""})},9:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var n=i(4340),r=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class o{constructor(){this.canAddShortcut=!1,this.canRequestReview=!1,this.isAlreadyReviewed=!1}addShortcut(){return r(this,void 0,void 0,(function*(){return!1}))}requestReview(){return(0,n.D)()}requestGameUrl(){return r(this,void 0,void 0,(function*(){}))}}},5572:(t,e,i)=>{"use strict";i.d(e,{VK:()=>n,yl:()=>r});const n={success:!0,payload:{}},r={success:!1,payload:{}}},5351:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var n=i(9789),r=i(3379),o=i.n(r),s=i(280);o()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;const a="gp-gamedistribution-sticky";function d(){const t=document.createElement("div");t.id="gs-gamedistribution",document.body.appendChild(t);const e={sticky:null};return window.addEventListener("resize",(()=>(0,n.sO)(e))),{banners:e,createSticky(i){e.sticky||(e.sticky=function(e){const i=document.createElement("div");i.className=`${a} ${a}_${e.position||"bottom"}`;const n=document.createElement("div");n.id="responsive-banner-container",n.className=`${a}__creative`;const r={$wrapper:i,$el:n,options:e};return i.appendChild(n),t.appendChild(i),r}(i))},closeSticky(){e.sticky&&(e.sticky.$wrapper.remove(),e.sticky.$wrapper.innerHTML="",e.sticky=null)}}}},9789:(t,e,i)=>{"use strict";i.d(e,{px:()=>r,bH:()=>s,sO:()=>a,pm:()=>d,Go:()=>u,Bi:()=>c});var n=i(1642);function r(t){return`${t}px`}const o={PX:"px",PERCENT:"%"};function s(t){return o[t]}function a(t){d(t.sticky)}function d(t){t&&(t.$el.style.width=`${function(t){let e=window.innerWidth;if("PX"===t.options.maxWidthDimension&&t.options.maxWidth>0&&window.innerWidth>t.options.maxWidth)e=t.options.maxWidth;else if("PERCENT"===t.options.maxWidthDimension&&t.options.maxWidth>0){const i=t.options.maxWidth/100*window.innerWidth;window.innerWidth>t.options.maxWidth&&(e=i)}const i=t.options.fitCanvas&&h()||e;return Math.round(i)}(t)}px`)}function u(t,e){const i=e?{value:t.options.maxWidth,dimension:t.options.maxWidthDimension}:t.options.desktopMaxWidth&&t.options.desktopMaxWidthDimension?{value:t.options.desktopMaxWidth,dimension:t.options.desktopMaxWidthDimension}:{value:t.options.maxWidth,dimension:t.options.maxWidthDimension},n="PERCENT"===i.dimension?.01*i.value*window.innerWidth:i.value;return Math.min(Math.round(t.options.fitCanvas&&h()||n),window.innerWidth)||window.innerWidth}function c(t,e,i){const n=e?{value:t.options.maxHeight,dimension:t.options.maxHeightDimension}:t.options.desktopMaxHeight&&t.options.desktopMaxHeightDimension?{value:t.options.desktopMaxHeight,dimension:t.options.desktopMaxHeightDimension}:{value:t.options.maxHeight,dimension:t.options.maxHeightDimension},r="PERCENT"===n.dimension?.01*n.value*window.innerHeight:n.value;return Math.min(Math.round(r),window.innerHeight)||i}function h(){var t;return window.innerWidth>=640&&(null===(t=(0,n.Z)())||void 0===t?void 0:t.offsetWidth)||0}},2712:(t,e,i)=>{"use strict";i.d(e,{aD:()=>l,FU:()=>p,hc:()=>v});const n=(t,e)=>({type:t,getLink:e}),r=n("facebook",(t=>`//www.facebook.com/sharer/sharer.php?u=${t.url}`)),o=n("whatsapp",(t=>`//api.whatsapp.com/send?text=${t.text}%20${t.url}`)),s=n("telegram",(t=>`//t.me/share/url?url=${t.url}&text=${t.text}`)),a=n("vkontakte",(t=>`//vk.com/share.php?url=${t.url}&title=${t.text}&image=${t.image}`)),d=n("twitter",(t=>`//twitter.com/share?text=${t.text}&url=${t.url}`)),u=n("odnoklassniki",(t=>`//connect.ok.ru/offer?url=${t.url}&title=${t.text}&imageUrl=${t.image}`)),c=n("viber",(t=>`viber://forward?text=${t.text}%20${t.url}`)),h=n("moymir",(t=>`//connect.mail.ru/share?url=${t.url}&title=${t.text}&image_url=${t.image}`)),l=[o,s,a,u,c,h],p=[r,d,s,o,c],v=[r,d,s,o,c,a,u,h]},6390:(t,e,i)=>{"use strict";function n(){try{return window.top.location.href||location.href}catch(t){return location.href}}i.d(e,{T:()=>n})},1642:(t,e,i)=>{"use strict";function n(){return document.querySelector("canvas")}i.d(e,{Z:()=>n})},2447:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>A});var n=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class r{constructor(t){this.sdk=t,this.isFullscreenAvailable=!0,this.stickyBannerConfig={isOverlapping:!1,height:0},this.isPreloaderAvailable=!1,this.isStickyAvailable=!1,this.needToLeaveFullscreenBeforeAds=!1,this.canShowFullscreenBeforeGamePlay=!0}get isRewardedAvailable(){return this.sdk.isRewardedReady}showPreloader(){return n(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showPreloader().catch((()=>!1))}))}showFullscreen(){return n(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showFullscreen().catch((()=>!1))}))}showRewardedVideo(){return n(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showRewardedVideo().catch((()=>!1))}))}showSticky(t){return n(this,void 0,void 0,(function*(){return!1}))}refreshSticky(t){return n(this,void 0,void 0,(function*(){return!1}))}closeSticky(){return n(this,void 0,void 0,(function*(){}))}}var o=i(8293),s=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class a{constructor(t){this.sdk=t,this.hasCredetials=!1,this.userId="",this.isAuthorizedAtPlatform=!1}getPlayerAuthInfo(){return s(this,void 0,void 0,(function*(){const t=(0,o._)();return t.done({}),t.ready}))}getPlayerContext(){return s(this,void 0,void 0,(function*(){return{platformData:yield this.getPlayerAuthInfo(),key:""}}))}loginPlayer(){return s(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}logoutPlayer(){return s(this,void 0,void 0,(function*(){return!1}))}getPlayer(){return s(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}publishRecord(t){}isPlatformAvatar(){return!1}setCredentials(t){}}var d=i(2712),u=i(5942),c=i(5572),h=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class l{constructor(t){this.sdk=t,this.hasIntegratedAuth=!1,this.isExternalLinksAllowed=!1,this.isSecretCodeAuthAvailable=!0,this._hasAuthModal=!1,this.isLogoutAvailable=!1,this.type=u.z.WG_PLAYGROUND,this.socialNetworks=d.FU,this.isSupportsImageUploading=!1,this.hasAccountLinkingFeature=!1,this.isSupportsRemoteVariables=!1,this.isSupportsCloudSaves=!1}getSDK(){return this.sdk}getNativeSDK(){return this.sdk.sdk}requestPermissions(){return h(this,void 0,void 0,(function*(){return c.VK}))}uploadImage(){return null}getVariables(){return h(this,void 0,void 0,(function*(){return{}}))}}class p{constructor(t){this.sdk=t,this.isSupportsShare=!1,this.isSupportsNativeShare=!1,this.isSupportsNativePosts=!1,this.isSupportsNativeInvite=!1,this.isSupportsNativeCommunityJoin=!1,this.canJoinCommunity=!1,this.isSupportShareParams=!1}get shareParams(){return{}}share(t){return Promise.resolve(!1)}post(t){return Promise.resolve(!1)}invite(t){return Promise.resolve(!1)}getCommunityLink(t){return t}joinCommunity(){return Promise.resolve(!1)}addShareParamsToUrl(t,e){return t}makeShareUrl(t){return""}getShareParam(t){return""}}var v=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class m{constructor(t){this.sdk=t,this.isSupportsSubscriptions=!1,this.isOneTimeSubscription=!0,this.isSupportsPayments=!1,this.isServerValidation=!1,this.isNeedAuthorizeBeforePurchase=!1}mapProducts(t,e){return v(this,void 0,void 0,(function*(){return e}))}consumeAllExpired(t,e,i){return v(this,void 0,void 0,(function*(){}))}fetchPurchases(){return v(this,void 0,void 0,(function*(){return{payload:{},purchases:[]}}))}purchase(t){return v(this,void 0,void 0,(function*(){return{}}))}consume(t){return v(this,void 0,void 0,(function*(){return{}}))}subscribe(t,e){return v(this,void 0,void 0,(function*(){return{}}))}unsubscribe(t,e){return v(this,void 0,void 0,(function*(){return{}}))}}var f=i(9),w=i(6390),y=i(4917),g=i(6558),k=i(5351),x=i(8866),P=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class b{constructor(t,e){this.config=t,this.gp=e,this.app=(0,k.Z)(),this.readyRewardedAd=(0,o._)(),this.isRewardedReady=!0}get appUrl(){return(0,w.T)()}init(){var t,e,i,n;return P(this,void 0,void 0,(function*(){const r=(0,o._)();this.ready=r.ready;const s=window;return yield Promise.all([(0,y.Z)({src:`https://universal.wgplayer.com/tag/?lh=${window.location.hostname}&wp=${window.location.pathname}&ws=${window.location.search}`}).catch((t=>g.kg.error(t))),(0,y.Z)({src:"https://afg.wgplayer.com/wgplayer.com/wgAds.iframe.conf.js",check:t=>{var e,i;return!!(null===(i=null===(e=t.preroll)||void 0===e?void 0:e.config)||void 0===i?void 0:i.loaderObjectName)}}).catch((t=>g.kg.error(t))),(0,y.Z)({src:"https://afg.wgplayer.com/wgplayer.com/js/RkQDh8KWt62VoH09FPNYqA/2357995679/wgAds.js"}).catch((t=>g.kg.error(t)))]),this.sdk=s[null===(e=null===(t=s.preroll)||void 0===t?void 0:t.config)||void 0===e?void 0:e.loaderObjectName],null===(i=this.sdk)||void 0===i||i.registerRewardCallbacks({onReady:()=>{this.isRewardedReady=!0},onSuccess:()=>{this.readyRewardedAd.done(!0)},onFail:()=>{this.readyRewardedAd.done(!1)}}),null===(n=this.sdk)||void 0===n||n.registerGameControls({pause:()=>this.gp.pause(),resume:()=>this.gp.resume(),context:this}),setTimeout((()=>r.done(this)),1e4),r.ready}))}getPlayer(){return P(this,void 0,void 0,(function*(){const t=(0,o._)();return t.done({id:0,name:"",photoSmall:"",photoMedium:"",photoLarge:""}),t.ready}))}showMidroll(){const t=(0,o._)();try{!1===this.sdk.refetchAd((()=>(0,x.Z)(0).then((()=>t.done(!0)))))&&t.done(!1)}catch(e){t.abort(e)}return t.ready}showFullscreen(){return this.showMidroll()}showPreloader(){return this.showMidroll()}showRewardedVideo(){this.readyRewardedAd=(0,o._)();try{this.sdk.showRewardAd()}catch(t){this.readyRewardedAd.abort(t)}return this.readyRewardedAd.ready}}function A(t){return e=this,i=void 0,o=function*(){const[,e]=yield Promise.all([t.setupStorage([]),t.fetchConfig()]),i=new b({},t.gp);yield i.init();const n=new a(i);return{adsAdapter:new r(i),appAdapter:new f.Z,playerAdapter:n,platformAdapter:new l(i),socialsAdapter:new p(i),paymentsAdapter:new m(i),projectConfig:e}},new((n=void 0)||(n=Promise))((function(t,r){function s(t){try{d(o.next(t))}catch(t){r(t)}}function a(t){try{d(o.throw(t))}catch(t){r(t)}}function d(e){var i;e.done?t(e.value):(i=e.value,i instanceof n?i:new n((function(t){t(i)}))).then(s,a)}d((o=o.apply(e,i||[])).next())}));var e,i,n,o}}}]);