(self.webpackChunkgame_score_sdk=self.webpackChunkgame_score_sdk||[]).push([[369],{4340:(t,e,r)=>{"use strict";r.d(e,{D:()=>n});const n=()=>Promise.resolve({success:!1,rating:0,error:""})},9:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(4340),i=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{a(n.next(t))}catch(t){s(t)}}function u(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,u)}a((n=n.apply(t,e||[])).next())}))};class s{constructor(){this.canAddShortcut=!1,this.canRequestReview=!1,this.isAlreadyReviewed=!1}addShortcut(){return i(this,void 0,void 0,(function*(){return!1}))}requestReview(){return(0,n.D)()}requestGameUrl(){return i(this,void 0,void 0,(function*(){}))}}},5572:(t,e,r)=>{"use strict";r.d(e,{VK:()=>n,yl:()=>i});const n={success:!0,payload:{}},i={success:!1,payload:{}}},2712:(t,e,r)=>{"use strict";r.d(e,{aD:()=>l,FU:()=>v,hc:()=>f});const n=(t,e)=>({type:t,getLink:e}),i=n("facebook",(t=>`//www.facebook.com/sharer/sharer.php?u=${t.url}`)),s=n("whatsapp",(t=>`//api.whatsapp.com/send?text=${t.text}%20${t.url}`)),o=n("telegram",(t=>`//t.me/share/url?url=${t.url}&text=${t.text}`)),u=n("vkontakte",(t=>`//vk.com/share.php?url=${t.url}&title=${t.text}&image=${t.image}`)),a=n("twitter",(t=>`//twitter.com/share?text=${t.text}&url=${t.url}`)),c=n("odnoklassniki",(t=>`//connect.ok.ru/offer?url=${t.url}&title=${t.text}&imageUrl=${t.image}`)),h=n("viber",(t=>`viber://forward?text=${t.text}%20${t.url}`)),d=n("moymir",(t=>`//connect.mail.ru/share?url=${t.url}&title=${t.text}&image_url=${t.image}`)),l=[s,o,u,c,h,d],v=[i,a,o,s,h],f=[i,a,o,s,h,u,c,d]},6390:(t,e,r)=>{"use strict";function n(){try{return window.top.location.href||location.href}catch(t){return location.href}}r.d(e,{T:()=>n})},3978:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>S});var n=r(6390),i=r(4917),s=r(6558),o=r(8293),u=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{a(n.next(t))}catch(t){s(t)}}function u(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,u)}a((n=n.apply(t,e||[])).next())}))};class a{constructor(t){this.config=t,this.readyFullscreen=(0,o._)()}get appUrl(){return(0,n.T)()}init(){return u(this,void 0,void 0,(function*(){const t=(0,o._)();return this.ready=t.ready,window.SDK_OPTIONS={gameId:this.config.appId,onEvent:e=>{switch(e.name){case"AD_SDK_FINISHED":this.readyFullscreen.done("success"===e.status);break;case"SDK_GAME_START":setTimeout((()=>this.readyFullscreen.done(!1)));break;case"SDK_READY":t.done(this)}}},(0,i.Z)({src:"https://api.gamemonetize.com/sdk.js",check:t=>"sdk"in t}).then((()=>this.sdk=window.sdk)).catch((e=>{s.kg.error(e),t.done(this)})),setTimeout((()=>t.done(this)),5e3),t.ready}))}getPlayer(){return u(this,void 0,void 0,(function*(){const t=(0,o._)();return t.done({id:0,name:"",photoSmall:"",photoMedium:"",photoLarge:""}),t.ready}))}showFullscreen(){this.readyFullscreen=(0,o._)();try{this.sdk.showBanner()}catch(t){this.readyFullscreen.abort(t)}return this.readyFullscreen.ready}showRewardedVideo(){return this.showFullscreen()}showPreloader(){return this.showFullscreen()}}var c=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{a(n.next(t))}catch(t){s(t)}}function u(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,u)}a((n=n.apply(t,e||[])).next())}))};class h{constructor(t){this.sdk=t,this.isStickyAvailable=!1,this.stickyBannerConfig={isOverlapping:!1,height:0},this.isFullscreenAvailable=!0,this.isRewardedAvailable=!0,this.isPreloaderAvailable=!0,this.needToLeaveFullscreenBeforeAds=!1,this.canShowFullscreenBeforeGamePlay=!0}showPreloader(){return c(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showPreloader().catch((()=>!1))}))}showFullscreen(){return c(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showFullscreen().catch((()=>!1))}))}showRewardedVideo(){return c(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showRewardedVideo().catch((()=>!1))}))}showSticky(){return c(this,void 0,void 0,(function*(){return yield this.sdk.ready,!1}))}refreshSticky(){return c(this,void 0,void 0,(function*(){return yield this.sdk.ready,!1}))}closeSticky(){return c(this,void 0,void 0,(function*(){yield this.sdk.ready}))}}var d=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{a(n.next(t))}catch(t){s(t)}}function u(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,u)}a((n=n.apply(t,e||[])).next())}))};class l{constructor(t){this.sdk=t,this.hasCredetials=!1,this.userId="",this.isAuthorizedAtPlatform=!0}getPlayerAuthInfo(){return d(this,void 0,void 0,(function*(){const t=(0,o._)();return t.done({}),t.ready}))}getPlayerContext(){return d(this,void 0,void 0,(function*(){return{platformData:yield this.getPlayerAuthInfo(),key:""}}))}logoutPlayer(){return d(this,void 0,void 0,(function*(){return!1}))}loginPlayer(){return d(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}getPlayer(){return d(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}publishRecord(t){}isPlatformAvatar(){return!1}setCredentials(t){}}var v=r(2712),f=r(5942),p=r(5572),y=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{a(n.next(t))}catch(t){s(t)}}function u(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,u)}a((n=n.apply(t,e||[])).next())}))};class m{constructor(t){this.sdk=t,this.hasIntegratedAuth=!1,this.isExternalLinksAllowed=!0,this.isSecretCodeAuthAvailable=!0,this._hasAuthModal=!1,this.isLogoutAvailable=!1,this.type=f.z.GAME_MONETIZE,this.socialNetworks=v.FU,this.isSupportsImageUploading=!1,this.hasAccountLinkingFeature=!1,this.isSupportsRemoteVariables=!1,this.isSupportsCloudSaves=!1}getSDK(){return this.sdk}getNativeSDK(){return this.sdk.sdk}requestPermissions(){return y(this,void 0,void 0,(function*(){return p.VK}))}uploadImage(){return null}getVariables(){return y(this,void 0,void 0,(function*(){return{}}))}}class w{constructor(t){this.sdk=t,this.isSupportsShare=!0,this.isSupportsNativeShare=!1,this.isSupportsNativePosts=!1,this.isSupportsNativeInvite=!1,this.isSupportsNativeCommunityJoin=!1,this.canJoinCommunity=!0,this.isSupportShareParams=!1}get shareParams(){return{}}share(t){return Promise.resolve(!1)}post(t){return Promise.resolve(!1)}invite(t){return Promise.resolve(!1)}joinCommunity(){return Promise.resolve(!1)}getCommunityLink(t){return t}addShareParamsToUrl(t,e){return t}makeShareUrl(t){return""}getShareParam(t){return""}}var k=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{a(n.next(t))}catch(t){s(t)}}function u(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,u)}a((n=n.apply(t,e||[])).next())}))};class g{constructor(t){this.sdk=t,this.isSupportsSubscriptions=!1,this.isOneTimeSubscription=!0,this.isSupportsPayments=!1,this.isServerValidation=!1,this.isNeedAuthorizeBeforePurchase=!1}mapProducts(t,e){return k(this,void 0,void 0,(function*(){return e}))}consumeAllExpired(t,e,r){return k(this,void 0,void 0,(function*(){}))}fetchPurchases(){return k(this,void 0,void 0,(function*(){return{payload:{},purchases:[]}}))}purchase(t){return k(this,void 0,void 0,(function*(){return{}}))}consume(t){return k(this,void 0,void 0,(function*(){return{}}))}subscribe(t,e){return k(this,void 0,void 0,(function*(){return{}}))}unsubscribe(t,e){return k(this,void 0,void 0,(function*(){return{}}))}}var P=r(9);function S(t){return e=this,r=void 0,i=function*(){const[,e]=yield Promise.all([t.setupStorage([]),t.fetchConfig()]),r=new a({appId:e.platformConfig.appId});yield r.init();const n=new l(r);return{adsAdapter:new h(r),appAdapter:new P.Z,playerAdapter:n,platformAdapter:new m(r),socialsAdapter:new w(r),paymentsAdapter:new g(r),projectConfig:e}},new((n=void 0)||(n=Promise))((function(t,s){function o(t){try{a(i.next(t))}catch(t){s(t)}}function u(t){try{a(i.throw(t))}catch(t){s(t)}}function a(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(t){t(r)}))).then(o,u)}a((i=i.apply(e,r||[])).next())}));var e,r,n,i}}}]);