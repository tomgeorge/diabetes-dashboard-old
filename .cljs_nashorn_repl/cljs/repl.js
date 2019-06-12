// Compiled by ClojureScript 1.10.520 {:target :nashorn}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44728){
var map__44729 = p__44728;
var map__44729__$1 = (((((!((map__44729 == null))))?(((((map__44729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44729):map__44729);
var m = map__44729__$1;
var n = cljs.core.get.call(null,map__44729__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__44729__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44731_44763 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44732_44764 = null;
var count__44733_44765 = (0);
var i__44734_44766 = (0);
while(true){
if((i__44734_44766 < count__44733_44765)){
var f_44767 = cljs.core._nth.call(null,chunk__44732_44764,i__44734_44766);
cljs.core.println.call(null,"  ",f_44767);


var G__44768 = seq__44731_44763;
var G__44769 = chunk__44732_44764;
var G__44770 = count__44733_44765;
var G__44771 = (i__44734_44766 + (1));
seq__44731_44763 = G__44768;
chunk__44732_44764 = G__44769;
count__44733_44765 = G__44770;
i__44734_44766 = G__44771;
continue;
} else {
var temp__5735__auto___44772 = cljs.core.seq.call(null,seq__44731_44763);
if(temp__5735__auto___44772){
var seq__44731_44773__$1 = temp__5735__auto___44772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44731_44773__$1)){
var c__4550__auto___44774 = cljs.core.chunk_first.call(null,seq__44731_44773__$1);
var G__44775 = cljs.core.chunk_rest.call(null,seq__44731_44773__$1);
var G__44776 = c__4550__auto___44774;
var G__44777 = cljs.core.count.call(null,c__4550__auto___44774);
var G__44778 = (0);
seq__44731_44763 = G__44775;
chunk__44732_44764 = G__44776;
count__44733_44765 = G__44777;
i__44734_44766 = G__44778;
continue;
} else {
var f_44779 = cljs.core.first.call(null,seq__44731_44773__$1);
cljs.core.println.call(null,"  ",f_44779);


var G__44780 = cljs.core.next.call(null,seq__44731_44773__$1);
var G__44781 = null;
var G__44782 = (0);
var G__44783 = (0);
seq__44731_44763 = G__44780;
chunk__44732_44764 = G__44781;
count__44733_44765 = G__44782;
i__44734_44766 = G__44783;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44784 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_44784);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_44784)))?cljs.core.second.call(null,arglists_44784):arglists_44784));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44735_44785 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44736_44786 = null;
var count__44737_44787 = (0);
var i__44738_44788 = (0);
while(true){
if((i__44738_44788 < count__44737_44787)){
var vec__44749_44789 = cljs.core._nth.call(null,chunk__44736_44786,i__44738_44788);
var name_44790 = cljs.core.nth.call(null,vec__44749_44789,(0),null);
var map__44752_44791 = cljs.core.nth.call(null,vec__44749_44789,(1),null);
var map__44752_44792__$1 = (((((!((map__44752_44791 == null))))?(((((map__44752_44791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44752_44791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44752_44791):map__44752_44791);
var doc_44793 = cljs.core.get.call(null,map__44752_44792__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44794 = cljs.core.get.call(null,map__44752_44792__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44790);

cljs.core.println.call(null," ",arglists_44794);

if(cljs.core.truth_(doc_44793)){
cljs.core.println.call(null," ",doc_44793);
} else {
}


var G__44795 = seq__44735_44785;
var G__44796 = chunk__44736_44786;
var G__44797 = count__44737_44787;
var G__44798 = (i__44738_44788 + (1));
seq__44735_44785 = G__44795;
chunk__44736_44786 = G__44796;
count__44737_44787 = G__44797;
i__44738_44788 = G__44798;
continue;
} else {
var temp__5735__auto___44799 = cljs.core.seq.call(null,seq__44735_44785);
if(temp__5735__auto___44799){
var seq__44735_44800__$1 = temp__5735__auto___44799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44735_44800__$1)){
var c__4550__auto___44801 = cljs.core.chunk_first.call(null,seq__44735_44800__$1);
var G__44802 = cljs.core.chunk_rest.call(null,seq__44735_44800__$1);
var G__44803 = c__4550__auto___44801;
var G__44804 = cljs.core.count.call(null,c__4550__auto___44801);
var G__44805 = (0);
seq__44735_44785 = G__44802;
chunk__44736_44786 = G__44803;
count__44737_44787 = G__44804;
i__44738_44788 = G__44805;
continue;
} else {
var vec__44754_44806 = cljs.core.first.call(null,seq__44735_44800__$1);
var name_44807 = cljs.core.nth.call(null,vec__44754_44806,(0),null);
var map__44757_44808 = cljs.core.nth.call(null,vec__44754_44806,(1),null);
var map__44757_44809__$1 = (((((!((map__44757_44808 == null))))?(((((map__44757_44808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44757_44808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44757_44808):map__44757_44808);
var doc_44810 = cljs.core.get.call(null,map__44757_44809__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44811 = cljs.core.get.call(null,map__44757_44809__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44807);

cljs.core.println.call(null," ",arglists_44811);

if(cljs.core.truth_(doc_44810)){
cljs.core.println.call(null," ",doc_44810);
} else {
}


var G__44812 = cljs.core.next.call(null,seq__44735_44800__$1);
var G__44813 = null;
var G__44814 = (0);
var G__44815 = (0);
seq__44735_44785 = G__44812;
chunk__44736_44786 = G__44813;
count__44737_44787 = G__44814;
i__44738_44788 = G__44815;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__44759 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44760 = null;
var count__44761 = (0);
var i__44762 = (0);
while(true){
if((i__44762 < count__44761)){
var role = cljs.core._nth.call(null,chunk__44760,i__44762);
var temp__5735__auto___44816__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44816__$1)){
var spec_44817 = temp__5735__auto___44816__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_44817));
} else {
}


var G__44818 = seq__44759;
var G__44819 = chunk__44760;
var G__44820 = count__44761;
var G__44821 = (i__44762 + (1));
seq__44759 = G__44818;
chunk__44760 = G__44819;
count__44761 = G__44820;
i__44762 = G__44821;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__44759);
if(temp__5735__auto____$1){
var seq__44759__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44759__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__44759__$1);
var G__44822 = cljs.core.chunk_rest.call(null,seq__44759__$1);
var G__44823 = c__4550__auto__;
var G__44824 = cljs.core.count.call(null,c__4550__auto__);
var G__44825 = (0);
seq__44759 = G__44822;
chunk__44760 = G__44823;
count__44761 = G__44824;
i__44762 = G__44825;
continue;
} else {
var role = cljs.core.first.call(null,seq__44759__$1);
var temp__5735__auto___44826__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44826__$2)){
var spec_44827 = temp__5735__auto___44826__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_44827));
} else {
}


var G__44828 = cljs.core.next.call(null,seq__44759__$1);
var G__44829 = null;
var G__44830 = (0);
var G__44831 = (0);
seq__44759 = G__44828;
chunk__44760 = G__44829;
count__44761 = G__44830;
i__44762 = G__44831;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__44832 = cljs.core.conj.call(null,via,t);
var G__44833 = cljs.core.ex_cause.call(null,t);
via = G__44832;
t = G__44833;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__44836 = datafied_throwable;
var map__44836__$1 = (((((!((map__44836 == null))))?(((((map__44836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44836):map__44836);
var via = cljs.core.get.call(null,map__44836__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__44836__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__44836__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44837 = cljs.core.last.call(null,via);
var map__44837__$1 = (((((!((map__44837 == null))))?(((((map__44837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44837):map__44837);
var type = cljs.core.get.call(null,map__44837__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__44837__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__44837__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44838 = data;
var map__44838__$1 = (((((!((map__44838 == null))))?(((((map__44838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44838):map__44838);
var problems = cljs.core.get.call(null,map__44838__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__44838__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__44838__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44839 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__44839__$1 = (((((!((map__44839 == null))))?(((((map__44839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44839):map__44839);
var top_data = map__44839__$1;
var source = cljs.core.get.call(null,map__44839__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__44844 = phase;
var G__44844__$1 = (((G__44844 instanceof cljs.core.Keyword))?G__44844.fqn:null);
switch (G__44844__$1) {
case "read-source":
var map__44845 = data;
var map__44845__$1 = (((((!((map__44845 == null))))?(((((map__44845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44845):map__44845);
var line = cljs.core.get.call(null,map__44845__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__44845__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44847 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__44847__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__44847,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44847);
var G__44847__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__44847__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44847__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__44847__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44847__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44848 = top_data;
var G__44848__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__44848,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44848);
var G__44848__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__44848__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44848__$1);
var G__44848__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__44848__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44848__$2);
var G__44848__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__44848__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44848__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__44848__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44848__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44849 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__44849,(0),null);
var method = cljs.core.nth.call(null,vec__44849,(1),null);
var file = cljs.core.nth.call(null,vec__44849,(2),null);
var line = cljs.core.nth.call(null,vec__44849,(3),null);
var G__44852 = top_data;
var G__44852__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__44852,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44852);
var G__44852__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__44852__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44852__$1);
var G__44852__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__44852__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44852__$2);
var G__44852__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__44852__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44852__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__44852__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44852__$4;
}

break;
case "execution":
var vec__44853 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__44853,(0),null);
var method = cljs.core.nth.call(null,vec__44853,(1),null);
var file = cljs.core.nth.call(null,vec__44853,(2),null);
var line = cljs.core.nth.call(null,vec__44853,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__44853,source__$1,method,file,line,G__44844,G__44844__$1,map__44836,map__44836__$1,via,trace,phase,map__44837,map__44837__$1,type,message,data,map__44838,map__44838__$1,problems,fn,caller,map__44839,map__44839__$1,top_data,source){
return (function (p1__44835_SHARP_){
var or__4131__auto__ = (p1__44835_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__44835_SHARP_);
}
});})(vec__44853,source__$1,method,file,line,G__44844,G__44844__$1,map__44836,map__44836__$1,via,trace,phase,map__44837,map__44837__$1,type,message,data,map__44838,map__44838__$1,problems,fn,caller,map__44839,map__44839__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__44856 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44856__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__44856,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44856);
var G__44856__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__44856__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44856__$1);
var G__44856__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__44856__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44856__$2);
var G__44856__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__44856__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44856__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__44856__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44856__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44844__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44860){
var map__44861 = p__44860;
var map__44861__$1 = (((((!((map__44861 == null))))?(((((map__44861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44861):map__44861);
var triage_data = map__44861__$1;
var phase = cljs.core.get.call(null,map__44861__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__44861__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__44861__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__44861__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__44861__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__44861__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__44861__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__44861__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__44863 = phase;
var G__44863__$1 = (((G__44863 instanceof cljs.core.Keyword))?G__44863.fqn:null);
switch (G__44863__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44864_44873 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44865_44874 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44866_44875 = true;
var _STAR_print_fn_STAR__temp_val__44867_44876 = ((function (_STAR_print_newline_STAR__orig_val__44864_44873,_STAR_print_fn_STAR__orig_val__44865_44874,_STAR_print_newline_STAR__temp_val__44866_44875,sb__4661__auto__,G__44863,G__44863__$1,loc,class_name,simple_class,cause_type,format,map__44861,map__44861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44864_44873,_STAR_print_fn_STAR__orig_val__44865_44874,_STAR_print_newline_STAR__temp_val__44866_44875,sb__4661__auto__,G__44863,G__44863__$1,loc,class_name,simple_class,cause_type,format,map__44861,map__44861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44866_44875;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44867_44876;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44864_44873,_STAR_print_fn_STAR__orig_val__44865_44874,_STAR_print_newline_STAR__temp_val__44866_44875,_STAR_print_fn_STAR__temp_val__44867_44876,sb__4661__auto__,G__44863,G__44863__$1,loc,class_name,simple_class,cause_type,format,map__44861,map__44861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__44864_44873,_STAR_print_fn_STAR__orig_val__44865_44874,_STAR_print_newline_STAR__temp_val__44866_44875,_STAR_print_fn_STAR__temp_val__44867_44876,sb__4661__auto__,G__44863,G__44863__$1,loc,class_name,simple_class,cause_type,format,map__44861,map__44861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44858_SHARP_){
return cljs.core.dissoc.call(null,p1__44858_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44864_44873,_STAR_print_fn_STAR__orig_val__44865_44874,_STAR_print_newline_STAR__temp_val__44866_44875,_STAR_print_fn_STAR__temp_val__44867_44876,sb__4661__auto__,G__44863,G__44863__$1,loc,class_name,simple_class,cause_type,format,map__44861,map__44861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44864_44873,_STAR_print_fn_STAR__orig_val__44865_44874,_STAR_print_newline_STAR__temp_val__44866_44875,_STAR_print_fn_STAR__temp_val__44867_44876,sb__4661__auto__,G__44863,G__44863__$1,loc,class_name,simple_class,cause_type,format,map__44861,map__44861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44865_44874;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44864_44873;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44868_44877 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44869_44878 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44870_44879 = true;
var _STAR_print_fn_STAR__temp_val__44871_44880 = ((function (_STAR_print_newline_STAR__orig_val__44868_44877,_STAR_print_fn_STAR__orig_val__44869_44878,_STAR_print_newline_STAR__temp_val__44870_44879,sb__4661__auto__,G__44863,G__44863__$1,loc,class_name,simple_class,cause_type,format,map__44861,map__44861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44868_44877,_STAR_print_fn_STAR__orig_val__44869_44878,_STAR_print_newline_STAR__temp_val__44870_44879,sb__4661__auto__,G__44863,G__44863__$1,loc,class_name,simple_class,cause_type,format,map__44861,map__44861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44870_44879;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44871_44880;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44868_44877,_STAR_print_fn_STAR__orig_val__44869_44878,_STAR_print_newline_STAR__temp_val__44870_44879,_STAR_print_fn_STAR__temp_val__44871_44880,sb__4661__auto__,G__44863,G__44863__$1,loc,class_name,simple_class,cause_type,format,map__44861,map__44861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__44868_44877,_STAR_print_fn_STAR__orig_val__44869_44878,_STAR_print_newline_STAR__temp_val__44870_44879,_STAR_print_fn_STAR__temp_val__44871_44880,sb__4661__auto__,G__44863,G__44863__$1,loc,class_name,simple_class,cause_type,format,map__44861,map__44861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44859_SHARP_){
return cljs.core.dissoc.call(null,p1__44859_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44868_44877,_STAR_print_fn_STAR__orig_val__44869_44878,_STAR_print_newline_STAR__temp_val__44870_44879,_STAR_print_fn_STAR__temp_val__44871_44880,sb__4661__auto__,G__44863,G__44863__$1,loc,class_name,simple_class,cause_type,format,map__44861,map__44861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44868_44877,_STAR_print_fn_STAR__orig_val__44869_44878,_STAR_print_newline_STAR__temp_val__44870_44879,_STAR_print_fn_STAR__temp_val__44871_44880,sb__4661__auto__,G__44863,G__44863__$1,loc,class_name,simple_class,cause_type,format,map__44861,map__44861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44869_44878;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44868_44877;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44863__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
