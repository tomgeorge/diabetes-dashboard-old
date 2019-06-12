// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('luminus_transit.time');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
luminus_transit.time.iso_local_time = cljs_time.format.formatter.call(null,"HH:mm:ss.SSS");
luminus_transit.time.iso_local_date = cljs_time.format.formatter.call(null,"yyyy-MM-dd");
luminus_transit.time.iso_local_date_time = cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSS");
luminus_transit.time.iso_zoned_date_time = cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSSZ");
luminus_transit.time.time_deserialization_handlers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 4, ["LocalTime",cognitect.transit.read_handler.call(null,(function (p1__47004_SHARP_){
return cljs_time.format.parse.call(null,luminus_transit.time.iso_local_time,p1__47004_SHARP_);
})),"LocalDate",cognitect.transit.read_handler.call(null,(function (p1__47005_SHARP_){
return cljs_time.format.parse.call(null,luminus_transit.time.iso_local_date,p1__47005_SHARP_);
})),"LocalDateTime",cognitect.transit.read_handler.call(null,(function (p1__47006_SHARP_){
return cljs_time.format.parse.call(null,luminus_transit.time.iso_local_date_time,p1__47006_SHARP_);
})),"ZonedDateTime",cognitect.transit.read_handler.call(null,(function (p1__47007_SHARP_){
return cljs_time.format.parse.call(null,luminus_transit.time.iso_zoned_date_time,p1__47007_SHARP_);
}))], null)], null);
luminus_transit.time.time_serialization_handlers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.date.Date,cognitect.transit.write_handler.call(null,cljs.core.constantly.call(null,"LocalDate"),(function (p1__47008_SHARP_){
return cljs_time.format.unparse.call(null,luminus_transit.time.iso_local_date,p1__47008_SHARP_);
})),goog.date.DateTime,cognitect.transit.write_handler.call(null,cljs.core.constantly.call(null,"LocalDateTime"),(function (p1__47009_SHARP_){
return cljs_time.format.unparse.call(null,luminus_transit.time.iso_local_date_time,p1__47009_SHARP_);
})),goog.date.UtcDateTime,cognitect.transit.write_handler.call(null,cljs.core.constantly.call(null,"ZonedDateTime"),(function (p1__47010_SHARP_){
return cljs_time.format.unparse.call(null,luminus_transit.time.iso_zoned_date_time,p1__47010_SHARP_);
}))])], null);

//# sourceMappingURL=time.js.map
