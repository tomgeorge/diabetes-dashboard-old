// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('diabetes_dashboard.ajax');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('luminus_transit.time');
goog.require('cognitect.transit');
diabetes_dashboard.ajax.local_uri_QMARK_ = (function diabetes_dashboard$ajax$local_uri_QMARK_(p__47021){
var map__47022 = p__47021;
var map__47022__$1 = (((((!((map__47022 == null))))?(((((map__47022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47022):map__47022);
var uri = cljs.core.get.call(null,map__47022__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not.call(null,cljs.core.re_find.call(null,/^\w+?:\/\//,uri));
});
diabetes_dashboard.ajax.default_headers = (function diabetes_dashboard$ajax$default_headers(request){
if(diabetes_dashboard.ajax.local_uri_QMARK_.call(null,request)){
return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__47024_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",csrfToken], null),p1__47024_SHARP_);
}));
} else {
return request;
}
});
diabetes_dashboard.ajax.as_transit = (function diabetes_dashboard$ajax$as_transit(opts){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"raw","raw",1604651272),false,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),luminus_transit.time.time_deserialization_handlers),new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),luminus_transit.time.time_serialization_handlers)], null),opts);
});
diabetes_dashboard.ajax.load_interceptors_BANG_ = (function diabetes_dashboard$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.call(null,ajax.core.default_interceptors,cljs.core.conj,ajax.core.to_interceptor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),diabetes_dashboard.ajax.default_headers], null)));
});

//# sourceMappingURL=ajax.js.map
