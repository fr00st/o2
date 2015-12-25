
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Rectangle3}","mouseover",function(sym,e){sym.$("Rectangle").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle3}","mouseleave",function(sym,e){sym.$("Rectangle").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle3}","click",function(sym,e){window.open("http://designikum.com/o2/#zakaz","_parent");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-79805914");