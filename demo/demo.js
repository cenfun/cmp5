(function() {
    "use strict";

    var cmp5 = window.cmp5;
    var cmp = new cmp5.CMP();
    cmp.setContainer(".container");
    cmp.setConfig(cmp5.config);
    cmp.setList(cmp5.list);
    cmp.play();

    console.log(cmp);

}());