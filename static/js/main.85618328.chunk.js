(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(74)},39:function(e,t,a){},40:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),c=a.n(i),o=(a(38),a(39),a(12)),s=a(13),l=(a(40),a(6)),u=a.n(l);u.a.defaults.headers.common["X-RapidAPI-Key"]="4a6bb274c9msh062161866b5bbaap130be0jsnef581b3fe497",u.a.defaults.headers.common["X-RapidAPI-Host"]="uflixit.p.rapidapi.com",u.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",u.a.interceptors.response.use(function(e){return e.data.result},function(e){return Promise.reject(e)});var m=a(1),h=a(2),d=a(4),p=a(3),g=a(5),v=function(e){return r.a.createElement("h4",{className:"mt-5 mb-3"},e.title,r.a.createElement("span",{className:"ml-2 badge badge-primary"},e.length))},f=(a(60),function(){return r.a.createElement("div",{className:"whirlpool"},r.a.createElement("div",{className:"ring ring1"}),r.a.createElement("div",{className:"ring ring2"}),r.a.createElement("div",{className:"ring ring3"}),r.a.createElement("div",{className:"ring ring4"}),r.a.createElement("div",{className:"ring ring5"}),r.a.createElement("div",{className:"ring ring6"}),r.a.createElement("div",{className:"ring ring7"}),r.a.createElement("div",{className:"ring ring8"}),r.a.createElement("div",{className:"ring ring9"}))}),b=function(e){return r.a.createElement("div",{className:"alert alert-warning",role:"alert"},e.msg)},y=(a(61),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.image,n=e.title,i=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{className:"card mr-3 mb-3 border-0 rounded",to:"/".concat(i,"s/").concat(t)},r.a.createElement("div",{className:"card__img-wrapper overflow-hidden"},r.a.createElement("img",{src:a,className:"card__img card-img-top",alt:"poster"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title text-dark text-center"},n))))}}]),t}(n.Component)),E=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.items;return r.a.createElement("div",{className:"card-group"},e.map(function(e){return r.a.createElement(y,{key:e.id,item:e})}))}}]),t}(n.Component),j=a(18),O=function e(){Object(m.a)(this,e)};O.API="https://".concat("uflixit.p.rapidapi.com","/"),O.getPopularTVShowsPath="".concat(O.API,"tv-shows/popular"),O.getWantedMoviesPath="".concat(O.API,"movies/wanted"),O.getMediaDetailsPath="".concat(O.API,"{type}/details/{id}"),O.getMediaPosterPath="".concat(O.API,"{type}/poster/{id}"),O.getMediaSearchPath="".concat(O.API,"{type}/search");var w,S=O,k=function e(t,a){Object(m.a)(this,e),this.id=void 0,this.title=void 0,this.image=void 0,this.type=void 0,this.id=t.imdb_id||t.id,this.image=t.image||"https://cdns.directv.com/cms2/my_directv/general/lg__celebrity_generic.jpg",this.title=t.title||"",this.type=a},N=function(e){function t(e,a){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e,a))).rating=void 0,n.duration=void 0,n.published=void 0,n.stars=void 0,n.countries=void 0,n.keywords=void 0,n.genres=void 0,n.trailer=void 0,n.summary=void 0,n.year=void 0,n.rating=e.rating,n.duration=e.duration,n.published=e.published,n.stars=e.stars.slice(0,5),n.countries=e.countries,n.keywords=e.keywords.slice(0,10),n.genres=e.genres,n.trailer=e.trailer,n.summary=e.summary,n.year=e.year,n}return Object(g.a)(t,e),t}(k),P=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e,w.Movie))).director=void 0,a.director=e.director,a}return Object(g.a)(t,e),t}(N),_=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e,w.TVShow))).creators=void 0,a.yearStarted=void 0,a.yearEnded=void 0,a.status=void 0,a.creators=e.creators,a.yearStarted=e.year_started||"unknown",a.yearEnded=e.year_ended||"not yet",a.status=e.status,a}return Object(g.a)(t,e),t}(N);!function(e){e.Movie="movie",e.TVShow="tv-show",e.Another="another"}(w||(w={}));var A=function(){function e(t,a){Object(m.a)(this,e),this._media=void 0,this._media=t===w.Movie?new P(a):new _(a)}return Object(h.a)(e,[{key:"getMedia",value:function(){return this._media}}]),e}(),C=function(){function e(){Object(m.a)(this,e)}return Object(h.a)(e,[{key:"getPopularShows",value:function(){var e=this;return u.a.get(S.getPopularTVShowsPath).then(function(t){return e.convertToObj(t)}).then(function(t){return e.getPosters(t.slice(0,10),w.TVShow)})}},{key:"getWantedMoviesIds",value:function(){var e=this;return u.a.get(S.getWantedMoviesPath).then(function(t){return e.convertToObj(t)}).then(function(t){return e.getPosters(t,w.Movie)})}},{key:"getDetail",value:function(e,t){var a=-1!==t.pathname.indexOf("movie")?w.Movie:w.TVShow;return u.a.get(this.prepareApiPath(S.getMediaDetailsPath,e,a)).then(function(e){return new A(a,e).getMedia()})}},{key:"search",value:function(e){var t=this,a=[u.a.get(this.prepareApiPath(S.getMediaSearchPath,"",w.Movie+"s"),e),u.a.get(this.prepareApiPath(S.getMediaSearchPath,"",w.TVShow+"s"),e)];return u.a.all(a).then(u.a.spread(function(e,a){return u.a.all([t.getPosters(t.prepareSearchRes(e),w.Movie),t.getPosters(t.prepareSearchRes(a),w.TVShow)]).then(function(e){return[].concat(Object(j.a)(e[0]),Object(j.a)(e[1]))})}))}},{key:"getPosters",value:function(e,t){var a=this;return u.a.all(e.map(function(e){return a.getPoster(e,t)})).then(function(a){return a.forEach(function(t,a){e[a].image=t}),e.map(function(e){return new k(e,t)})})}},{key:"getPoster",value:function(e,t){return u.a.get(this.prepareApiPath(S.getMediaPosterPath,e.id,t)).catch(function(){return e.image})}},{key:"prepareApiPath",value:function(e,t,a){return e.replace("{id}",t).replace("{type}",a)}},{key:"convertToObj",value:function(e){return e.map(function(e){return{id:e}})}},{key:"prepareSearchRes",value:function(e){return(Array.isArray(e)?e:[e]).map(function(e){return new k(e,w.Another)})}}]),e}(),M=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).mediaService=void 0,a.state={shows:[],error:null,loaded:!1,loading:!1},a.mediaService=new C,a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.shows,a=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{title:"Popular shows",length:t.length}),this.state.loading&&r.a.createElement(f,null),this.state.loaded&&r.a.createElement(E,{items:t}),this.state.error&&r.a.createElement(b,{msg:a}))}},{key:"componentDidMount",value:function(){this.getPopularShows()}},{key:"getPopularShows",value:function(){var e=this;this.setState({loading:!0}),this.mediaService.getPopularShows().then(function(t){e.setState({shows:t,error:null,loaded:!0,loading:!1})}).catch(function(){return e.setState({loading:!1,error:"Can not get posters of TV shows using ids."})})}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],error:null,loaded:!1,loading:!1},a.mediaService=new C,a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.loaded,a=e.loading,n=e.error,i=e.movies;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{title:"Wanted movies",length:i.length}),a&&r.a.createElement(f,null),t&&i&&r.a.createElement(E,{items:i}),n&&!a&&r.a.createElement(b,{msg:n}))}},{key:"componentDidMount",value:function(){this.getWantedMovies()}},{key:"getWantedMovies",value:function(){var e=this;this.setState({loading:!0}),this.mediaService.getWantedMoviesIds().then(function(t){e.setState({movies:t,error:null,loaded:!0,loading:!1})}).catch(function(){return e.setState({loading:!1,error:"Can not get posters of movies using ids."})})}}]),t}(n.Component),R=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement(T,null))}}]),t}(n.Component),x=(a(70),a(32)),D=(a(71),a(72),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r))))._inputRef=void 0,a.handleChange=function(e){a.props.searchChanged(e.target.value)},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.placeholder,n=t.active;return r.a.createElement("div",{className:"input "+(n?"input--active":"")},r.a.createElement("input",{type:"text",className:"input__el w-100",value:this.props.value,ref:function(t){return e._inputRef=t},placeholder:a,onBlur:this.props.lostFocus,onChange:this.handleChange}))}},{key:"componentDidUpdate",value:function(){this._inputRef.focus()}}]),t}(n.Component)),F=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",active:!1,redirectToReferrer:!1},a.openSearchField=function(){a.setState({active:!0})},a.closeSearchField=function(){a.setState({search:"",active:!1})},a.navigateToSearchPage=function(e){e.preventDefault(),a.setState({redirectToReferrer:!0})},a.handleSearchChange=function(e){a.setState({search:e})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.active,a=e.redirectToReferrer,n=e.search;return r.a.createElement("form",{className:"search-form d-flex align-items-center",onSubmit:this.navigateToSearchPage},r.a.createElement(x.a,{className:t?"search-form__icon search-form__icon--hidden":"search-form__icon",onClick:this.openSearchField}),r.a.createElement(D,{placeholder:"Search... ",value:this.state.search,active:this.state.active,lostFocus:this.closeSearchField,searchChanged:this.handleSearchChange}),a&&r.a.createElement(s.a,{to:{pathname:"../search",search:"?query=".concat(n)}}))}},{key:"componentDidUpdate",value:function(){this.state.redirectToReferrer&&this.setState({redirectToReferrer:!1})}}]),t}(n.Component),I=function(){return r.a.createElement("header",{className:"header bg-dark py-1"},r.a.createElement("div",{className:"container d-flex justify-content-between align-items-center"},r.a.createElement(o.b,{className:"header__logo",to:"/"},r.a.createElement("img",{className:"img-fluid",src:"https://www.userlogos.org/files/netflix-n-logo-png.png",alt:"logo"})),r.a.createElement(F,null)))},W=(a(73),function(){return r.a.createElement("footer",{className:"footer bg-dark py-4 position-absolute text-white w-100"},r.a.createElement("div",{className:"container d-flex justify-content-center"},"Still need to do:",r.a.createElement("ul",{className:"mb-0"},r.a.createElement("li",null,"Authorization"),r.a.createElement("li",null,"Search"),r.a.createElement("li",null,"Episodes"),r.a.createElement("li",null,"Add slider?"),r.a.createElement("li",null,"Lazy images?"))))}),L=a(31),V=a.n(L),q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).responseGoogle=function(e){console.log("Answer",e)},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(V.a,{clientId:"658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"})}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={media:{},error:null,loaded:!1,loading:!1},a.mediaService=new C,a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.media,t=e.year,a=e.creators,n=e.stars,i=e.keywords,c=e.yearStarted,o=e.yearEnded,s=e.summary,l=e.rating,u=e.title,m=e.image,h=e.genres;return r.a.createElement(r.a.Fragment,null,this.state.loading&&!this.state.error&&r.a.createElement(f,null),this.state.loaded&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-4"},r.a.createElement("img",{className:"img-thumbnail mb-3",src:m,alt:"media-poster"}),h.map(function(e,t){return r.a.createElement("span",{key:t,className:"badge badge-secondary mr-2 py-1 px-2 mt-1"},e)})),r.a.createElement("section",{className:"col col-8"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("h1",{className:"mb-0 w-75"},u),r.a.createElement("span",{className:"badge badge-warning"},l)),r.a.createElement("div",{className:"mt-1 text-primary"}," ",c?r.a.createElement("span",null,c," - ",o):t," "),r.a.createElement("div",{className:"mt-5 w-75"},s),r.a.createElement("div",{className:"mt-2 mb-2"},i.map(function(e,t){return r.a.createElement("span",{key:t,className:"badge badge-info mr-2 py-1 px-2 mt-1"},e)})),r.a.createElement("div",{className:"row mt-4"},a&&a.length>0&&r.a.createElement("div",{className:"col col-6"},r.a.createElement("h5",null,"Creators"),r.a.createElement("ul",{className:"list-group list-group-flush"},a.map(function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item"},e)}))),r.a.createElement("div",{className:"col col-6"},r.a.createElement("h5",null,"Stars"),r.a.createElement("ul",{className:"list-group list-group-flush"},n.map(function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item"},e)})))))),this.state.error&&r.a.createElement(b,{msg:this.state.error}))}},{key:"componentDidMount",value:function(){this.getDetail()}},{key:"getDetail",value:function(){var e=this;this.setState({loading:!0}),this.mediaService.getDetail(this.props.match.params.id,this.props.location).then(function(t){e.setState({error:null,loaded:!0,loading:!1,media:t})}).catch(function(){e.setState({error:"Can not get details by id."})})}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).stopListenRoute=function(){},a.cancelSearchRequest=function(){},a.mediaService=new C,a.state={loading:!1,loaded:!1,error:null,media:[]},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.media,a=e.loaded,n=e.loading,i=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{title:"Search results",length:t.length}),n&&!i&&r.a.createElement(f,null),a&&r.a.createElement(E,{items:t}),i&&r.a.createElement(b,{msg:i}))}},{key:"componentDidMount",value:function(){this.search(),this.startListenRouteChanges()}},{key:"componentWillUnmount",value:function(){this.cancelSearchRequest(),this.stopListenRoute()}},{key:"search",value:function(e){var t=this,a=e||this.props.location,n=new URLSearchParams(a.search);this.setState({media:[],loading:!0});var r={params:n,cancelToken:new u.a.CancelToken(function(e){t.cancelSearchRequest=e})};this.mediaService.search(r).then(function(e){t.setState({media:e,loaded:!0,loading:!1,error:null})}).catch(function(){return t.setState({error:"There is no game according to the request.",loading:!1})})}},{key:"startListenRouteChanges",value:function(){var e=this;this.stopListenRoute=this.props.history.listen(function(t){return e.search(t)})}}]),t}(n.Component),G=function(){function e(){Object(m.a)(this,e),this.user={}}return Object(h.a)(e,[{key:"isLogin",value:function(){return!!this.user}}]),e}();var z=function(){return new G,r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(I,null),r.a.createElement("div",{className:"container py-4"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:R}),r.a.createElement(s.b,{exact:!0,path:"/tv-shows/:id",component:U}),r.a.createElement(s.b,{exact:!0,path:"/movies/:id",component:U}),r.a.createElement(s.b,{path:"/search",component:B}),r.a.createElement(s.b,{path:"/login",component:q}))),r.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.85618328.chunk.js.map