(function(e){function t(t){for(var r,i,o=t[0],s=t[1],l=t[2],d=0,b=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ergo-paper-wallet/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1:function(e,t){},10:function(e,t){},"192e":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d}));var r=n("d4ec"),c=n("bee2"),a=n("ade3"),i=(n("d3b7"),n("25f0"),n("cb29"),n("b075")),o=n("9613"),s=n("6f78"),l=n("a425"),u=n("708d"),d=function(){function t(e){Object(r["a"])(this,t),Object(a["a"])(this,"_change",void 0),Object(a["a"])(this,"_index",void 0),Object(a["a"])(this,"_pk",void 0),this._change=i["fromSeed"](e).derivePath(o["b"]),this._index=this._change.derive(0)}return Object(c["a"])(t,[{key:"address",get:function(){return l["Address"].fromPk(this._index.publicKey.toString("hex")).address}},{key:"currentBip32",get:function(){return this._index}},{key:"extendedPublicKey",get:function(){return this._pk||(this._pk=s["decode"](this._change.neutered().toBase58())),this._pk.toString("hex")}},{key:"checksum",get:function(){var t=this.removeParentFingerphintAndIndex(e.from(this._pk));return Object(u["walletChecksum"])(t.toString("hex"))}},{key:"removeParentFingerphintAndIndex",value:function(e){return e.fill(0,4,12)}},{key:"derive",value:function(e){return this._index=this._change.derive(e),this}}]),t}()}).call(this,n("b639").Buffer)},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"5a4b":function(e,t,n){},6:function(e,t){},"685e":function(e,t,n){},7:function(e,t){},8:function(e,t){},"8e1a":function(e,t,n){},9:function(e,t){},"927c":function(e,t,n){},9613:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r=160,c="m/44'/429'/0'/0"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("4b99"),a=n("94ed"),i={class:"pr-1"};function o(e,t,n,c,a,o){var s=Object(r["r"])("mdicon");return Object(r["o"])(),Object(r["g"])("a",{onClick:t[0]||(t[0]=function(t){return e.onClick()}),class:"cursor-pointer"},[Object(r["h"])("span",i,Object(r["s"])(e.value),1),Object(r["k"])(s,{"static-class":"inline-block print:hidden"+(e.copied?" text-green-800":""),name:e.icon,size:"12"},null,8,["static-class","name"])])}var s=Object(r["l"])({name:"ClickToCopy",props:{value:{type:String,required:!0}},watch:{value:function(){this.setCopied(!1)}},data:function(){return{copied:!1}},computed:{icon:function(){return this.copied?"checkbox-multiple-marked-outline":"checkbox-multiple-blank-outline"}},methods:{onClick:function(){var e=this;navigator.clipboard.writeText(this.value),this.setCopied(),setTimeout((function(){e.setCopied(!1)}),1e3)},setCopied:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.copied=e}}});s.render=o;var l=s,u={class:"group inline-flex justify-center relative"},d={class:"\n        ease-linear\n        transition-all\n        duration-150\n        opacity-0\n        bg-dark-100\n        shadow-lg\n        text-light-300 text-center text-xs\n        rounded\n        p-2\n        mb-1\n        absolute\n        z-10\n        bottom-full\n        w-auto\n        font-sans font-normal\n        pointer-events-none\n        group-hover:opacity-100\n      "},b={key:1},h=Object(r["h"])("svg",{class:"absolute text-dark-100 h-2 w-full left-0 top-full",x:"0px",y:"0px",viewBox:"0 0 255 255","xml:space":"preserve"},[Object(r["h"])("polygon",{class:"fill-current",points:"0,0 127.5,127.5 255,0"})],-1);function p(e,t,n,c,a,i){return Object(r["o"])(),Object(r["g"])("span",u,[Object(r["h"])("span",{class:Object(r["n"])({"underline underline-dashed underline-offset-4 underline-lenght-0":e.dashed})},[Object(r["q"])(e.$slots,"default")],2),Object(r["h"])("span",d,[e.$slots.label?Object(r["q"])(e.$slots,"label",{key:0}):(Object(r["o"])(),Object(r["g"])("span",b,Object(r["s"])(e.label),1)),h])])}var f=Object(r["l"])({name:"ToolTip",props:{label:{type:String,required:!1},dashed:{type:Boolean,default:!1}}});f.render=p;var j=f,O={viewBox:"0 0 150 59",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},m=Object(r["i"])('<g id="main" stroke="none" stroke-width="1"><g id="Tech" transform="translate(-70.000000, -35.000000)"><g id="Group-16" transform="translate(70.000000, 34.000000)"><g id="Group-15" transform="translate(0.000000, 0.830280)"><path d="M11.16384,48.039 L29.49744,55.3986 L47.66544,47.6394 L55.02744,29.3058 L47.26824,11.1378 L28.93464,3.777 L10.76184,11.5386 L3.40224,29.871 L11.16384,48.039 Z M29.51544,58.7994 C29.30904,58.7994 29.10024,58.7598 28.90704,58.6818 L9.31584,50.817 C8.91384,50.6562 8.59104,50.3418 8.42424,49.9422 L0.13224,30.5274 C-0.03936,30.1278 -0.04416,29.6802 0.11904,29.2758 L7.98384,9.6846 C8.14464,9.2826 8.45904,8.961 8.85864,8.7918 L28.27344,0.501 C28.67304,0.3294 29.12304,0.327 29.52624,0.4878 L49.11624,8.3526 C49.51824,8.5134 49.83984,8.8278 50.00904,9.2274 L58.29984,28.6386 C58.47144,29.0394 58.47624,29.487 58.31304,29.8914 L50.44824,49.4826 C50.28864,49.8846 49.97424,50.2062 49.57344,50.3742 L30.16104,58.6662 C29.95224,58.7574 29.73504,58.7994 29.51544,58.7994 Z" id="Fill-9"></path><polygon id="Fill-10" points="33.43176 29.27736 25.58016 37.92456 37.95456 37.92456 37.95456 41.65056 20.47896 41.65056 20.47896 37.92456 28.25736 29.31336 20.51376 21.24456 20.51376 17.51856 37.95456 17.51856 37.95456 21.24456 25.76016 21.24456"></polygon><polygon id="Fill-11" points="68.1978 39.25056 68.1978 18.43896 82.4574 18.43896 82.4574 21.65376 71.8494 21.65376 71.8494 27.05136 82.239 27.05136 82.239 30.26496 71.8494 30.26496 71.8494 36.03696 82.4574 36.03696 82.4574 39.25056"></polygon><path d="M99.6486,24.96072 C99.6486,22.96392 98.151,21.65352 96.0906,21.65352 L91.0986,21.65352 L91.0986,28.26792 L96.0906,28.26792 C98.151,28.26792 99.6486,26.95752 99.6486,24.96072 Z M99.3366,39.25032 L94.719,31.48152 L91.0986,31.48152 L91.0986,39.25032 L87.4482,39.25032 L87.4482,18.43872 L96.5898,18.43872 C100.7094,18.43872 103.3926,21.12312 103.3926,24.96072 C103.3926,28.67352 100.959,30.67032 98.463,31.07592 L103.5486,39.25032 L99.3366,39.25032 Z" id="Fill-12"></path><path d="M106.15368,28.86072 C106.15368,22.33872 111.05208,18.09552 117.07368,18.09552 C121.12968,18.09552 123.78168,20.03112 125.46768,22.43352 L122.47248,24.11832 C121.37928,22.55832 119.41368,21.34032 117.07368,21.34032 C112.95528,21.34032 109.89768,24.49152 109.89768,28.86072 C109.89768,33.22872 112.95528,36.41112 117.07368,36.41112 C119.19528,36.41112 121.06728,35.41272 122.00328,34.53912 L122.00328,31.29432 L115.79448,31.29432 L115.79448,28.08072 L125.65368,28.08072 L125.65368,35.88072 C123.59448,38.15832 120.69288,39.65592 117.07368,39.65592 C111.05208,39.65592 106.15368,35.38152 106.15368,28.86072" id="Fill-13"></path><path d="M146.10756,28.86072 C146.10756,24.55512 143.39196,21.34032 139.21236,21.34032 C134.99916,21.34032 132.31716,24.55512 132.31716,28.86072 C132.31716,33.13632 134.99916,36.37992 139.21236,36.37992 C143.39196,36.37992 146.10756,33.13632 146.10756,28.86072 M128.57316,28.86072 C128.57316,22.65192 132.97236,18.09552 139.21236,18.09552 C145.45236,18.09552 149.85156,22.65192 149.85156,28.86072 C149.85156,35.06952 145.45236,39.62592 139.21236,39.62592 C132.97236,39.62592 128.57316,35.06952 128.57316,28.86072" id="Fill-14"></path></g></g></g></g>',1),v=[m];function g(e,t){return Object(r["o"])(),Object(r["g"])("svg",O,v)}const w={};w.render=g;var y=w,x={class:"print:hidden"},k={class:"mx-auto px-6 py-2 flex items-center justify-between"},C={class:"\n          font-light\n          select-none\n          w-full\n          text-2xl text-center\n          md:w-auto md:text-3xl md:text-left\n        "},S=Object(r["j"])(" Paper Wallet "),L={class:"hidden md:block print:hidden"},_={class:"inline-flex"},P={class:"px-4 hover:text-gray-800 inline-flex items-center",href:"https://ergoplatform.org",target:"_blank",rel:"noopener noreferrer"},M=Object(r["j"])("Ergo Platform "),W={class:"pl-1 pt-1 text-gray-400"},z={target:"_blank",rel:"noopener noreferrer",class:"px-4 hover:text-gray-800 inline-flex items-center",href:"https://github.com/anon-br/ergo-paper-wallet"},T=Object(r["j"])("GitHub "),I={class:"pl-1 pt-1 text-gray-400"},A={class:"wiz-container print:m-0 print:p-0"};function B(e,t,n,c,a,i){var o=Object(r["r"])("ergo-logo"),s=Object(r["r"])("mdicon"),l=Object(r["r"])("wallet-wizard");return Object(r["o"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("nav",x,[Object(r["h"])("div",k,[Object(r["h"])("p",C,[Object(r["k"])(o,{class:"inline h-10 md:h-12 fill-current"}),S]),Object(r["h"])("div",L,[Object(r["h"])("ul",_,[Object(r["h"])("li",null,[Object(r["h"])("a",P,[M,Object(r["h"])("span",W,[Object(r["k"])(s,{name:"open-in-new",size:"12"})])])]),Object(r["h"])("li",null,[Object(r["h"])("a",z,[T,Object(r["h"])("span",I,[Object(r["k"])(s,{name:"open-in-new",size:"12"})])])])])])])]),Object(r["h"])("div",A,[Object(r["k"])(l)])],64)}var q={class:"wiz-content"},E={class:"mx-4 p-4 print:hidden"},H={class:"wiz-header"},N={class:"w-full h-full screen:p-10 screen:mb-20"},F={class:"\n      w-full\n      p-4\n      print:hidden\n      fixed\n      inset-x-0\n      bottom-0\n      bg-white\n      flex\n      justify-center\n      shadow shadow-dark-900\n    "},K={class:"flex p-2 w-full lg:w-10/12 md:w-11/12"},D={key:0,class:"select-control mr-1"},G=Object(r["h"])("span",{class:"pl-1"},"Wallet strength",-1),R=Object(r["h"])("option",{value:128},"12 words (128 bits)",-1),V=Object(r["h"])("option",{value:160},"15 words (160 bits)",-1),J=Object(r["h"])("option",{value:256},"24 words (256 bits)",-1),Z=[R,V,J],$={class:"flex-auto flex flex-row-reverse"};function Q(e,t,n,c,a,i){var o=Object(r["r"])("wizard-header-item"),s=Object(r["r"])("start-wallet"),l=Object(r["r"])("print-wallet");return Object(r["o"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("div",q,[Object(r["h"])("div",E,[Object(r["h"])("div",H,[Object(r["k"])(o,{label:"Start",icon:"bookmark-outline","step-number":1,"current-step":e.currentStep,position:"begin"},null,8,["current-step"]),Object(r["k"])(o,{label:"Print",icon:"printer","step-number":2,"current-step":e.currentStep,position:"end"},null,8,["current-step"])])]),Object(r["h"])("div",N,[Object(r["k"])(r["c"],{mode:"out-in",name:"fade"},{default:Object(r["u"])((function(){return[(Object(r["o"])(),Object(r["e"])(r["b"],null,[e.at("start")?(Object(r["o"])(),Object(r["e"])(s,{key:0})):e.at("print")?(Object(r["o"])(),Object(r["e"])(l,{key:1,strength:e.strength,ref:"printWallet"},null,8,["strength"])):Object(r["f"])("",!0)],1024))]})),_:1})])]),Object(r["h"])("div",F,[Object(r["h"])("div",K,[e.at("print")?(Object(r["o"])(),Object(r["g"])("label",D,[G,Object(r["v"])(Object(r["h"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.strength=t}),class:"block form-select"},Z,512),[[r["t"],e.strength]])])):Object(r["f"])("",!0),e.at("print")?(Object(r["o"])(),Object(r["g"])("button",{key:1,class:"btn mr-1",type:"button",onClick:t[1]||(t[1]=function(t){return e.newWallet()})}," New wallet ")):Object(r["f"])("",!0),Object(r["h"])("div",$,[Object(r["h"])("button",{onClick:t[2]||(t[2]=function(t){return e.nextStep()}),class:"btn primary",type:"button"},Object(r["s"])(e.nextBtnlabel),1),e.at("print")?(Object(r["o"])(),Object(r["g"])("button",{key:0,class:"btn mr-4",type:"button",onClick:t[3]||(t[3]=function(t){return e.print()})},"Print")):Object(r["f"])("",!0)])])])],64)}var U={class:"icon"},Y={class:"label"};function X(e,t,n,c,a,i){var o=Object(r["r"])("mdicon");return Object(r["o"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("div",{class:Object(r["n"])(["item",e.stateClass])},[Object(r["h"])("div",U,[Object(r["k"])(o,{name:e.icon},null,8,["name"])]),Object(r["h"])("div",Y,Object(r["s"])(e.label),1)],2),e.canShowSeparator?(Object(r["o"])(),Object(r["g"])("div",{key:0,class:Object(r["n"])(["separator",e.stateClass])},null,2)):Object(r["f"])("",!0)],64)}n("a9e3"),n("caad");var ee=Object(r["l"])({name:"WizardHeaderItem",props:{label:{type:String,required:!0},icon:{type:String,required:!0},stepNumber:{type:Number,required:!0},currentStep:{type:Number,required:!0},position:{type:String,required:!1,default:"middle",validator:function(e){return["begin","middle","end"].includes(e)}}},computed:{canShowSeparator:function(){return"end"!==this.position},stateClass:function(){return this.currentStep>this.stepNumber?"prev":this.currentStep<this.stepNumber?"next":"current"}}});ee.render=X;var te=ee,ne={class:"grid grid-cols-1 md:grid-cols-2 gap-10 mx-10"},re=Object(r["i"])('<div class=""><h1 class="text-xl font-semibold">Your keys, your Ergo.</h1><p class="font-light"> By offline generating and printing out your own ergo wallet, you can minimize your exposure to hackers or computer viruses, this brings some peace of mind. Just transfer your funds into your new wallet, and keep it safe and away from humidity. </p></div><div class=""><h1 class="text-xl font-semibold">Go offline.</h1><p class="font-light"> For improved security, the whole process can be done offline. Just download the <a class="hover:underline" href="standalone.html" download><span class="font-mono">standalone.html</span></a> file on GitHub, go offline and open it using your browser as a regular .html file! </p></div>',2),ce={class:""},ae=Object(r["h"])("h1",{class:"text-xl font-semibold"},"Don’t Trust. Verify.",-1),ie={class:"font-light"},oe=Object(r["j"])(" This tool was built using trusted and well tested libraries, and no data is transmitted in any direction, all the process is executed in your browser. But we encourage all the users to go to our "),se={class:"hover:underline inline-flex",href:"https://github.com/anon-br/ergo-paper-wallet",target:"_blank",rel:"noopener noreferrer"},le=Object(r["j"])("GitHub repo "),ue={class:"pl-1 pt-2 text-gray-400"},de=Object(r["j"])(" and verify the code by themselves. "),be={class:""},he=Object(r["h"])("h1",{class:"text-xl font-semibold"},"Donate.",-1),pe={class:"font-light"},fe=Object(r["j"])(" If you like this tool and want to to encourage its development, donations are warmly welcomed! Please, send any amount to this address: "),je=Object(r["h"])("canvas",{class:"inline",id:"donate-canvas"},null,-1),Oe=Object(r["h"])("span",{class:"block"},[Object(r["j"])(" Scan this QR code or "),Object(r["h"])("br"),Object(r["j"])(" click to copy ")],-1),me={class:"font-mono text-sm break-all"};function ve(e,t,n,c,a,i){var o=Object(r["r"])("mdicon"),s=Object(r["r"])("click-to-copy"),l=Object(r["r"])("tool-tip");return Object(r["o"])(),Object(r["g"])("div",ne,[re,Object(r["h"])("div",ce,[ae,Object(r["h"])("p",ie,[oe,Object(r["h"])("a",se,[le,Object(r["h"])("span",ue,[Object(r["k"])(o,{name:"open-in-new",size:"12"})])]),de])]),Object(r["h"])("div",be,[he,Object(r["h"])("p",pe,[fe,Object(r["k"])(l,{dashed:""},{label:Object(r["u"])((function(){return[je,Oe]})),default:Object(r["u"])((function(){return[Object(r["h"])("span",me,[Object(r["k"])(s,{value:e.donateAddr},null,8,["value"])])]})),_:1})])])])}var ge=n("d055"),we=n.n(ge),ye=Object(r["l"])({name:"StartWallet",data:function(){return{donateAddr:"9i5DyKxVmchSej8Xd5DAZ3zz8p6fe7VsAQa2BD7E4PumM2VmGhR"}},mounted:function(){we.a.toCanvas(document.getElementById("donate-canvas"),this.donateAddr,{scale:4,margin:1})}});ye.render=ve;var xe=ye,ke={class:"sheet-wrap"},Ce={class:"sheet"},Se={class:"quarter even-top"},Le={class:"col"},_e=Object(r["h"])("div",{class:"row"},[Object(r["h"])("h1",{class:"title"},"Public Key")],-1),Pe={class:"row text-center flex-grow"},Me=Object(r["h"])("p",null,[Object(r["h"])("canvas",{class:"inline",id:"pk-canvas"})],-1),We={class:"key mt-4 mx-8"},ze=Object(r["h"])("div",{class:"row"},[Object(r["h"])("p",{class:"tip-text"}," Use this public key to securely check your balance or get more addresses on a read-only wallet. ")],-1),Te={class:"quarter odd-top"},Ie={class:"col"},Ae=Object(r["h"])("div",{class:"row"},[Object(r["h"])("h1",{class:"title"},"Addresses")],-1),Be={class:"row flex-grow"},qe={class:"flex-grow h-auto"},Ee={class:"col"},He={class:"text-gray-600 flex-grow text-sm"},Ne={class:"key"},Fe={class:"w-min h-min"},Ke=["id"],De=Object(r["h"])("div",{class:"row"},[Object(r["h"])("p",{class:"tip-text"},"You can send your funds to any of the above addresses.")],-1),Ge={class:"quarter even-bottom"},Re={class:"col"},Ve=Object(r["h"])("div",{class:"row"},[Object(r["h"])("h1",{class:"title"},"Mnemonic")],-1),Je={class:"row flex-grow"},Ze={class:"mx-3 p-2 bordered"},$e={class:"text-justify text-lg select-none"},Qe={class:"row text-center"},Ue={class:"pt-5 mt-5 inline-block"},Ye=Object(r["h"])("p",{class:"mx-5"},[Object(r["h"])("strong",null,"DO NOT REVEAL or SHARE THIS MNEMONIC PHRASE"),Object(r["j"])(" with anyone. This words gives complete access to funds stored on this wallet. ")],-1),Xe={class:"quarter"},et={class:"col"},tt=Object(r["h"])("div",{class:"row"},[Object(r["h"])("h1",{class:"title"},"Instructions")],-1),nt={class:"row flex-grow"},rt={class:"mx-3 p-2 bordered"},ct={class:"text-justify text-lg select-none transform rotate-y-180"},at=Object(r["h"])("p",{class:"text-xs tracking-normal leading-tight tip-text mt-2"}," Please, ignore this. Just some noise to help obfuscating mnemonic, just in case someone try to see through the wallet by using a flashlight. ",-1),it=Object(r["h"])("div",{class:"row leading-normal"},[Object(r["h"])("ul",{class:"list-disc px-4"},[Object(r["h"])("li",null," Fold this sheet in four, using the dashed line as a guide, so that the mnemonic phrase stay on the inside part and seal it with tape or glue; and "),Object(r["h"])("li",null," Keep it safe and away from humidity. Treat a paper wallet like cash. If you lose it or it becomes illegible, your funds are gone forever. ")])],-1);function ot(e,t,n,c,a,i){var o=Object(r["r"])("printable-ergo-header"),s=Object(r["r"])("click-to-copy"),l=Object(r["r"])("tool-tip"),u=Object(r["r"])("mdicon");return Object(r["o"])(),Object(r["g"])("div",ke,[Object(r["h"])("div",Ce,[Object(r["h"])("div",Se,[Object(r["h"])("div",Le,[Object(r["k"])(o,{id:"odd",plate:e.plate},null,8,["plate"]),_e,Object(r["h"])("div",Pe,[Me,Object(r["h"])("p",We,[Object(r["k"])(l,{label:"Click to copy"},{default:Object(r["u"])((function(){return[Object(r["k"])(s,{value:e.publicKey},null,8,["value"])]})),_:1})])]),ze])]),Object(r["h"])("div",Te,[Object(r["h"])("div",Ie,[Object(r["k"])(o,{id:"even",plate:e.plate},null,8,["plate"]),Ae,Object(r["h"])("div",Be,[(Object(r["o"])(!0),Object(r["g"])(r["a"],null,Object(r["p"])(e.addresses,(function(e,t){return Object(r["o"])(),Object(r["g"])("div",{class:"flex flex-row w-full bordered mb-3 p-1",key:e},[Object(r["h"])("div",qe,[Object(r["h"])("div",Ee,[Object(r["h"])("p",He,"Address /"+Object(r["s"])(t),1),Object(r["h"])("p",Ne,[Object(r["k"])(l,{label:"Click to copy"},{default:Object(r["u"])((function(){return[Object(r["k"])(s,{value:e},null,8,["value"])]})),_:2},1024)])])]),Object(r["h"])("div",Fe,[Object(r["h"])("canvas",{id:"addr-".concat(t,"-canvas"),class:"m-1 inline"},null,8,Ke)])])})),128))]),De])]),Object(r["h"])("div",Ge,[Object(r["h"])("div",Re,[Ve,Object(r["h"])("div",Je,[Object(r["h"])("div",Ze,[Object(r["h"])("p",$e,Object(r["s"])(e.mnemonic),1)])]),Object(r["h"])("div",Qe,[Object(r["h"])("p",Ue,[Object(r["k"])(u,{name:"alert-outline",size:64})]),Ye])])]),Object(r["h"])("div",Xe,[Object(r["h"])("div",et,[tt,Object(r["h"])("div",nt,[Object(r["h"])("div",rt,[Object(r["h"])("p",ct,Object(r["s"])(e.shuffledMnemonic),1),at])]),it])])])])}n("dca8"),n("d3b7"),n("25f0"),n("ac1f"),n("1276"),n("a15b");function st(e){for(var t=e.split(""),n=t.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),c=t[n];t[n]=t[r],t[r]=c}return t.join("")}function lt(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ",n=e.split(t),r=0;r<n.length;r++)n[r]=st(n[r]);return n.join(t)}var ut={class:"h-14 bg-dark-900 items-center flex w-full justify-start select-none px-2"},dt=Object(r["h"])("span",{class:"pl-2 pb-0.5 text-xl tracking-wide text-white font-light"},"Paper Wallet",-1),bt={class:"flex-auto flex flex-row-reverse"},ht={class:"\n          text-center\n          relative\n          top-4.5\n          h-18.5\n          w-18\n          bg-white\n          border-solid border-1 border-dark-900\n          py-0.7\n        "},pt=["id"],ft={class:"text-xs"};function jt(e,t,n,c,a,i){var o=Object(r["r"])("ergo-logo");return Object(r["o"])(),Object(r["g"])("header",ut,[Object(r["k"])(o,{class:"h-9 fill-white inline"}),dt,Object(r["h"])("div",bt,[Object(r["h"])("div",ht,[Object(r["h"])("canvas",{class:"h-12 w-12 inline-block pt-0.5",id:e.canvasId},null,8,pt),Object(r["h"])("span",ft,Object(r["s"])(e.plate.TextPart),1)])])])}var Ot=n("c35d"),mt=Object(r["l"])({name:"PrintableErgoHeader",props:{id:{type:String,required:!0},plate:{type:Object,required:!0}},computed:{canvasId:function(){return"checksum-".concat(this.id)}},watch:{plate:function(){Object(Ot["a"])({seed:this.plate.ImagePart,size:7,scale:4,color:"#aaa",bgcolor:"#fff",spotcolor:"#000"},document.getElementById(this.canvasId))}}});mt.render=jt;var vt=mt,gt=n("1da1"),wt=n("d4ec"),yt=n("bee2"),xt=n("ade3"),kt=(n("96cf"),n("29c9")),Ct=n("9613"),St=n("192e"),Lt=function(){function e(t){if(Object(wt["a"])(this,e),Object(xt["a"])(this,"_mnemonic",""),"string"!=typeof t)this._mnemonic=this.newMnemonic(t||Ct["a"]);else{if(!kt["validateMnemonic"](t))throw"Invalid mnemonic";this._mnemonic=t}}return Object(yt["a"])(e,[{key:"newMnemonic",value:function(e){return kt["generateMnemonic"](e)}},{key:"toSeed",value:function(){var e=Object(gt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",kt["mnemonicToSeed"](this._mnemonic).then((function(e){return new St["a"](e)})).catch((function(e){return Promise.reject(e)})));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"toString",value:function(){return this._mnemonic}}]),e}(),_t=Object(r["l"])({name:"PrintWallet",components:{PrintableErgoHeader:vt},props:{strength:{type:Number,required:!0}},data:function(){return{mnemonic:"",publicKey:"",plate:{},addresses:[],maxAddresses:Object.freeze(3)}},activated:function(){this.newWallet()},computed:{shuffledMnemonic:function(){return lt(this.mnemonic)}},watch:{strength:function(){this.newWallet()}},methods:{newWallet:function(){var e=this,t=new Lt(this.strength);this.mnemonic=t.toString(),t.toSeed().then((function(t){e.publicKey=t.extendedPublicKey,e.plate=t.checksum,we.a.toCanvas(document.getElementById("pk-canvas"),t.extendedPublicKey,{errorCorrectionLevel:"H",margin:0,scale:2.6}),e.addresses=[];for(var n=0;n<e.maxAddresses;n++)e.addresses.push(t.derive(n).address);e.$nextTick((function(){for(var t=0;t<e.addresses.length;t++)we.a.toCanvas(document.getElementById("addr-".concat(t,"-canvas")),e.addresses[t],{margin:0,scale:2})}))}))}}});_t.render=ot;var Pt=_t,Mt=Object(r["l"])({name:"WalletWizard",components:{WizardHeaderItem:te,StartWallet:xe,PrintWallet:Pt},data:function(){return{currentStep:1,steps:["start","print"],strength:Ct["a"]}},computed:{nextBtnlabel:function(){return this.at("start")?"Let's Start!":"Done!"}},methods:{at:function(e){return this.steps[this.currentStep-1]==e},print:function(){window.print()},nextStep:function(){this.currentStep>=this.steps.length?this.currentStep=1:this.currentStep++},prevStep:function(){this.currentStep<=1||this.currentStep--},newWallet:function(){this.$refs.printWallet.newWallet()}}});Mt.render=Q;var Wt=Mt,zt=Object(r["l"])({name:"App",components:{WalletWizard:Wt},data:function(){return{currentStep:0}},methods:{nextStep:function(){this.currentStep++}}});zt.render=B;var Tt=zt;n("5a4b"),n("927c"),n("8e1a"),n("685e");Object(r["d"])(Tt).use(c["a"],{icons:{mdiBookmarkOutline:a["c"],mdiPrinter:a["g"],mdiOpenInNew:a["f"],mdiAlertOutline:a["b"],mdiCheckboxMultipleBlankOutline:a["d"],mdiCheckboxMultipleMarkedOutline:a["e"]}}).component("ClickToCopy",l).component("ToolTip",j).component("ErgoLogo",y).mount("#app")}});