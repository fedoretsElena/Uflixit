(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(85)},46:function(e,t,a){},47:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(18),c=a.n(i),o=(a(45),a(46),a(14)),s=a(15),l=(a(47),a(9)),u=a.n(l);u.a.defaults.headers.common={"X-RapidAPI-Key":"4a6bb274c9msh062161866b5bbaap130be0jsnef581b3fe497","X-RapidAPI-Host":"uflixit.p.rapidapi.com","Access-Control-Allow-Origin":"*"},u.a.interceptors.response.use(function(e){return e.data.result},function(e){return Promise.reject(e)});var m=a(2),h=a(6),d=a(4),p=a(3),g=a(5),v=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.length;return r.a.createElement("h4",{className:"mt-5 mb-3"},t,r.a.createElement("span",{className:"ml-2 badge badge-primary"},a))}},{key:"shouldComponentUpdate",value:function(e,t,a){var n=this.props,r=n.title,i=n.length;return r!==e.title||i!==e.length}}]),t}(n.Component),f=(a(67),function(){return r.a.createElement("div",{className:"whirlpool"},r.a.createElement("div",{className:"ring ring1"}),r.a.createElement("div",{className:"ring ring2"}),r.a.createElement("div",{className:"ring ring3"}),r.a.createElement("div",{className:"ring ring4"}),r.a.createElement("div",{className:"ring ring5"}),r.a.createElement("div",{className:"ring ring6"}),r.a.createElement("div",{className:"ring ring7"}),r.a.createElement("div",{className:"ring ring8"}),r.a.createElement("div",{className:"ring ring9"}))}),b=function(e){return r.a.createElement("div",{className:"alert alert-warning",role:"alert"},e.msg)},y=a(86),E=a(87),S=(a(68),a(22));var j=function(e){var t=e.length,a=e.curr,n=e.uploadPage;return r.a.createElement("div",{className:"btn-group btn-group-sm mr-2 pr-1"},a-1>=1&&r.a.createElement("button",{type:"button",key:"back",className:"btn btn-secondary mr-1",onClick:function(){return n(--a)}},r.a.createElement(S.a,null)),function(e){for(var t=[],a=1;a<=e;a++)t.push(a);return t}(t).map(function(e){return r.a.createElement("button",{type:"button",key:e,className:"btn ".concat(e===a?"btn-primary":"btn-secondary"),onClick:function(){return e!==a?n(e):console.log("This page is already opened")}},e)}),a+1<=t&&r.a.createElement("button",{type:"button",key:"forward",className:"btn btn-secondary ml-1",onClick:function(){return n(++a)}},r.a.createElement(S.b,null)))},w=(a(69),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.image,n=e.title,i=e.type;return r.a.createElement(o.b,{className:"card mr-3 my-2 border-0 rounded",to:"/".concat(i,"s/").concat(t)},r.a.createElement("div",{className:"card__img-wrapper overflow-hidden"},r.a.createElement("img",{src:a,className:"card__img card-img-top",alt:"poster"})),n&&r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title text-dark text-center"},n)))}}]),t}(n.Component)),O=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.pages,n=e.uploadMediaForStep;return r.a.createElement("div",{className:"card-wrapper d-flex flex-column justify-content-end"},r.a.createElement(y.a,{className:"card-group"},t.map(function(e){return r.a.createElement(E.a,{classNames:"scaleFade",in:!0,appear:!0,timeout:1e3,key:e.id},r.a.createElement(w,{item:e}))})),a&&a.length>1&&r.a.createElement(j,{curr:a.curr,length:a.length,uploadPage:function(e){return n&&n(e)}}))}}]),t}(n.Component),k=a(19),N=function e(){Object(m.a)(this,e)};N.API="https://".concat("uflixit.p.rapidapi.com","/"),N.getPopularTVShowsPath="".concat(N.API,"tv-shows/popular"),N.getWantedMoviesPath="".concat(N.API,"movies/wanted"),N.getMediaDetailsPath="".concat(N.API,"{type}/details/{id}"),N.getMediaPosterPath="".concat(N.API,"{type}/poster/{id}"),N.getMediaSearchPath="".concat(N.API,"{type}/search");var P,M=N,A=function e(t,a){Object(m.a)(this,e),this.id=void 0,this.title=void 0,this.image=void 0,this.type=void 0,this.id=t.imdb_id||t.id,this.image=t.image||"https://cdns.directv.com/cms2/my_directv/general/lg__celebrity_generic.jpg",this.title=t.title||"",this.type=a},C=function(e){function t(e,a){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e,a))).rating=void 0,n.duration=void 0,n.published=void 0,n.stars=void 0,n.countries=void 0,n.keywords=void 0,n.genres=void 0,n.trailer=void 0,n.summary=void 0,n.year=void 0,n.rating=e.rating,n.duration=e.duration,n.published=e.published,n.stars=e.stars.slice(0,5),n.countries=e.countries,n.keywords=e.keywords.slice(0,10),n.genres=e.genres,n.trailer=e.trailer,n.summary=e.summary,n.year=e.year,n}return Object(g.a)(t,e),t}(A),I=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e,P.Movie))).director=void 0,a.director=e.director,a}return Object(g.a)(t,e),t}(C),_=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e,P.TVShow))).creators=void 0,a.yearStarted=void 0,a.yearEnded=void 0,a.status=void 0,a.creators=e.creators,a.yearStarted=e.year_started||"unknown",a.yearEnded=e.year_ended||"not yet",a.status=e.status,a}return Object(g.a)(t,e),t}(C);!function(e){e.Movie="movie",e.TVShow="tv-show",e.Another="another"}(P||(P={}));var T=function(){function e(t,a){Object(m.a)(this,e),this._media=void 0,this._media=t===P.Movie?new I(a):new _(a)}return Object(h.a)(e,[{key:"getMedia",value:function(){return this._media}}]),e}(),x=function(){function e(){Object(m.a)(this,e),this.VISIBLE_ITEMS=10,this.storage={popularShows:[]}}return Object(h.a)(e,[{key:"getPopularShows",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this.storage.popularShows,n=function(n){return e.getPosters(e.extractDataFromStorage(a,n,t),P.TVShow).then(function(n){return{media:n,pages:{length:a.length/e.VISIBLE_ITEMS,curr:t}}})};return this.storage.popularShows.length>=this.VISIBLE_ITEMS*t?n([]):u.a.get(M.getPopularTVShowsPath).then(function(t){return e.convertToArrWithKeyId(t)}).then(function(e){return n(e)})}},{key:"getWantedMoviesIds",value:function(){var e=this;return u.a.get(M.getWantedMoviesPath).then(function(t){return e.convertToArrWithKeyId(t)}).then(function(t){return e.getPosters(t,P.Movie)})}},{key:"getDetail",value:function(e,t){var a=-1!==t.pathname.indexOf("movie")?P.Movie:P.TVShow;return u.a.get(this.prepareApiPath(M.getMediaDetailsPath,e,a)).then(function(e){return new T(a,e).getMedia()})}},{key:"search",value:function(e){var t=this,a=[u.a.get(this.prepareApiPath(M.getMediaSearchPath,"",P.Movie+"s"),e),u.a.get(this.prepareApiPath(M.getMediaSearchPath,"",P.TVShow+"s"),e)];return u.a.all(a).then(u.a.spread(function(e,a){return u.a.all([t.getPosters(t.prepareSearchRes(e),P.Movie),t.getPosters(t.prepareSearchRes(a),P.TVShow)]).then(function(e){return[].concat(Object(k.a)(e[0]),Object(k.a)(e[1]))})}))}},{key:"getPosters",value:function(e,t){var a=this;return u.a.all(e.map(function(e){return a.getPoster(e,t)})).then(function(a){return a.forEach(function(t,a){e[a].image=t}),e.map(function(e){return new A(e,t)})})}},{key:"getPoster",value:function(e,t){return u.a.get(this.prepareApiPath(M.getMediaPosterPath,e.id,t)).catch(function(){return e.image})}},{key:"prepareApiPath",value:function(e,t,a){return e.replace("{id}",t).replace("{type}",a)}},{key:"convertToArrWithKeyId",value:function(e){return e.map(function(e){return{id:e}})}},{key:"prepareSearchRes",value:function(e){return(Array.isArray(e)?e:[e]).map(function(e){return new A(e,P.Another)})}},{key:"extractDataFromStorage",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return t&&e.push.apply(e,Object(k.a)(t)),e.slice((a-1)*this.VISIBLE_ITEMS,this.VISIBLE_ITEMS*a)}}]),e}(),R=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).mediaService=void 0,a.getPopularShows=function(e){a.setState({loading:!0,media:[]}),a.mediaService.getPopularShows(e).then(function(e){a.setState({media:e.media,nav:e.pages,error:null,loaded:!0,loading:!1})}).catch(function(){return a.setState({loading:!1,error:"Can not get posters of TV shows using ids."})})},a.state={media:[],nav:{curr:1,length:0},error:null,loaded:!1,loading:!1},a.mediaService=new x,a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.media,a=e.nav,n=e.nav.length,i=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{title:"Popular shows",length:10*n}),this.state.loading&&r.a.createElement(f,null),this.state.loaded&&r.a.createElement(O,{items:t,pages:a,uploadMediaForStep:this.getPopularShows}),this.state.error&&r.a.createElement(b,{msg:i}))}},{key:"componentDidMount",value:function(){this.getPopularShows()}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],error:null,loaded:!1,loading:!1},a.mediaService=new x,a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.loaded,a=e.loading,n=e.error,i=e.movies;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{title:"Wanted movies",length:i.length}),a&&r.a.createElement(f,null),t&&i&&r.a.createElement(O,{items:i}),n&&!a&&r.a.createElement(b,{msg:n}))}},{key:"componentDidMount",value:function(){this.getWantedMovies()}},{key:"getWantedMovies",value:function(){var e=this;this.setState({loading:!0}),this.mediaService.getWantedMoviesIds().then(function(t){e.setState({movies:t,error:null,loaded:!0,loading:!1})}).catch(function(){return e.setState({loading:!1,error:"Can not get posters of movies using ids."})})}}]),t}(n.Component),D=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement(F,null))}}]),t}(n.Component),V=(a(80),a(37)),L=(a(81),a(82),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r))))._inputRef=void 0,a.handleChange=function(e){a.props.searchChanged(e.target.value)},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.placeholder,n=t.active;return r.a.createElement(E.a,{timeout:300,in:n,classNames:"grow"},r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"text",className:"input__el w-100",value:this.props.value,ref:function(t){return e._inputRef=t},placeholder:a,onBlur:this.props.lostFocus,onChange:this.handleChange})))}},{key:"componentDidUpdate",value:function(){this._inputRef.focus()}}]),t}(n.Component)),W=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",active:!1,redirectToReferrer:!1},a.openSearchField=function(){a.setState({active:!0})},a.closeSearchField=function(){a.setState({search:"",active:!1})},a.navigateToSearchPage=function(e){e.preventDefault(),a.setState({redirectToReferrer:!0})},a.handleSearchChange=function(e){a.setState({search:e})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.active,a=e.redirectToReferrer,n=e.search;return r.a.createElement("form",{className:"search-form d-flex align-items-center",onSubmit:this.navigateToSearchPage},r.a.createElement(E.a,{timeout:300,in:!t,classNames:"fade"},r.a.createElement(V.a,{className:"search-form__icon",onClick:this.openSearchField})),r.a.createElement(L,{placeholder:"Search... ",value:this.state.search,active:this.state.active,lostFocus:this.closeSearchField,searchChanged:this.handleSearchChange}),a&&r.a.createElement(s.a,{to:{pathname:"../search",search:"?query=".concat(n)}}))}},{key:"componentDidUpdate",value:function(){this.state.redirectToReferrer&&this.setState({redirectToReferrer:!1})}}]),t}(n.Component),B=function(){return r.a.createElement("header",{className:"header bg-dark py-1"},r.a.createElement("div",{className:"container d-flex justify-content-between align-items-center"},r.a.createElement(o.b,{className:"header__logo",to:"/home"},r.a.createElement("img",{className:"img-fluid",src:"https://www.userlogos.org/files/netflix-n-logo-png.png",alt:"logo"})),r.a.createElement(W,null)))},q=(a(83),function(){return r.a.createElement("footer",{className:"footer bg-dark py-4 position-absolute text-white w-100"},r.a.createElement("div",{className:"container d-flex justify-content-center"},"Still need to do:",r.a.createElement("ul",{className:"mb-0"},r.a.createElement("li",null,"Authorization"),r.a.createElement("li",null,"Search"),r.a.createElement("li",null,"Episodes"),r.a.createElement("li",null,"Add slider?"),r.a.createElement("li",null,"Lazy images?"))))}),U=a(38),K=a.n(U),G=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).responseGoogle=function(e){console.log("Answer",e)},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(K.a,{clientId:"658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"})}}]),t}(n.Component),z=(a(84),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={media:{},error:null,loaded:!1,loading:!1},a.mediaService=new x,a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.media,t=e.year,a=e.creators,n=e.stars,i=e.keywords,c=e.yearStarted,o=e.yearEnded,s=e.summary,l=e.rating,u=e.title,m=e.image,h=e.genres;return r.a.createElement(r.a.Fragment,null,this.state.loading&&!this.state.error&&r.a.createElement(f,null),this.state.loaded&&r.a.createElement("div",{className:"row mt-5 mb-5"},r.a.createElement("div",{className:"col col-4 col--perspective"},r.a.createElement(E.a,{in:!!m,timeout:300,appear:!0,classNames:"fadeRotate"},r.a.createElement("img",{className:"d-block img-thumbnail mb-4",src:m,alt:"media-poster"})),h.map(function(e,t){return r.a.createElement("span",{key:t,className:"badge badge-secondary mr-2 py-1 px-2 mt-1"},e)})),r.a.createElement("section",{className:"col col-8"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("h1",{className:"mb-0 w-75"},u),r.a.createElement("span",{className:"badge badge-warning"},l)),r.a.createElement("div",{className:"mt-1 text-primary"}," ",c?r.a.createElement("span",null,c," - ",o):t," "),r.a.createElement("div",{className:"mt-5 w-75"},s),r.a.createElement("div",{className:"mt-2 mb-2"},i.map(function(e,t){return r.a.createElement("span",{key:t,className:"badge badge-info mr-2 py-1 px-2 mt-1"},e)})),r.a.createElement("div",{className:"row mt-4"},a&&a.length>0&&r.a.createElement("div",{className:"col col-6"},r.a.createElement("h5",null,"Creators"),r.a.createElement("ul",{className:"list-group list-group-flush"},a.map(function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item"},e)}))),r.a.createElement("div",{className:"col col-6"},r.a.createElement("h5",null,"Stars"),r.a.createElement("ul",{className:"list-group list-group-flush"},n.map(function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item"},e)})))))),this.state.error&&r.a.createElement(b,{msg:this.state.error}))}},{key:"componentDidMount",value:function(){this.getDetail()}},{key:"getDetail",value:function(){var e=this;this.setState({loading:!0}),this.mediaService.getDetail(this.props.match.params.id,this.props.location).then(function(t){e.setState({error:null,loaded:!0,loading:!1,media:t})}).catch(function(){e.setState({error:"Can not get details by id."})})}}]),t}(n.Component)),J=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).stopListenRoute=function(){},a.cancelSearchRequest=function(){},a.mediaService=new x,a.state={loading:!1,loaded:!1,error:null,media:[]},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.media,a=e.loaded,n=e.loading,i=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{title:"Search results",length:t.length}),n&&!i&&r.a.createElement(f,null),a&&r.a.createElement(O,{items:t}),i&&r.a.createElement(b,{msg:i}))}},{key:"componentDidMount",value:function(){this.search(),this.startListenRouteChanges()}},{key:"componentWillUnmount",value:function(){this.cancelSearchRequest(),this.stopListenRoute()}},{key:"search",value:function(e){var t=this,a=e||this.props.location,n=new URLSearchParams(a.search);this.setState({media:[],loading:!0});var r={params:n,cancelToken:new u.a.CancelToken(function(e){t.cancelSearchRequest=e})};this.mediaService.search(r).then(function(e){t.setState({media:e,loaded:!0,loading:!1,error:null})}).catch(function(){return t.setState({error:"There is no game according to the request.",loading:!1})})}},{key:"startListenRouteChanges",value:function(){var e=this;this.stopListenRoute=this.props.history.listen(function(t){return e.search(t)})}}]),t}(n.Component);var X=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(B,null),r.a.createElement("div",{className:"container py-4"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/home",component:D}),r.a.createElement(s.b,{exact:!0,path:"/tv-shows/:id",component:z}),r.a.createElement(s.b,{exact:!0,path:"/movies/:id",component:z}),r.a.createElement(s.b,{path:"/search",component:J}),r.a.createElement(s.b,{path:"/login",component:G}),r.a.createElement(s.b,{path:"/",render:function(){return r.a.createElement(s.a,{to:"/home"})}}))),r.a.createElement(q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.3f437bbf.chunk.js.map