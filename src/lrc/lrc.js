var Util = require("../core/util.js");
var $ = require("../core/query.js");

var ViewBase = require("../core/view-base.js");

class CMPLrc extends ViewBase {

    constructor(container) {
        super();
        this.container = $(container);
        this.forward=0;
    }
    //设置翻译
    setTrans(trans){
        this.trans=trans;
    }   
    //歌词提前秒数
    setForward(forward){
        this.forward=forward;
    }
    asyncLrc(currentTime){
        for (var i = 0; i < this.lrcs.length; i++) {
            if (currentTime < this.lrcs[i][0] - this.forward) { //提前0.6秒显示歌词
                break;
            }
        }
        if (i > 0) {
            this.showLrc(this.lrcs[i - 1][1]);
        } else{
            this.showLrc(this.lrcs[0][1]);
        }
    }
    showLrc(line){
        this.container.html(line);
    }
    //加载歌词
    async fetchLrc(lrc_src){
        this.lrcs=[];
        /*** 支持网易云Json***/
        var self=this;
        if (window.jQuery) { 
            //优先Jsop解决歌词跨域
            if(lrc_src.indexOf('callback=')){
                window.jQuery.getJSON(lrc_src+'?&callback=?',function(result){
                    self.lrcs = self.parseLRC(result);
                });
            }else{
                window.jQuery.ajax({
                        url: lrc_src,
                        type: 'get',
                        dataType: 'text',
                        success: function(result){
                            self.lrcs=self.parseLRC(JSON.parse(result));
                        }
                    });
            }
            
        }else if(window.fetch){
           fetch(lrc_src,{mode: 'cors'}).then(res =>res.text()).then(text =>{
                //console.log(text);
                 self.lrcs =  self.parseLRC(JSON.parse(text));
                
            });
        }
         return self.lrcs.length>0?true:false;
    }
    parseLRC(lrcData) {
            if('object'===typeof lrcData){
                try {
                    let lrcJson=lrcData;
                    if(true === lrcJson.uncollected){
                        return [];
                    }
                    /*** 
                        优先按照配置获取 获取不到 则有啥选啥
                    ***/
                    let lrcText=false;
                    if( this.trans==false  &&   lrcJson.hasOwnProperty('lrc') &&   lrcJson.lrc.lyric !=null ){
                        lrcText=lrcJson.lrc.lyric; 
                    }else if( this.trans ==true && lrcJson.hasOwnProperty('tlyric') &&    lrcJson.tlyric.lyric !=null ){
                        lrcText=lrcJson.tlyric.lyric;
                    } else if('2'===this.trans){
                        return this.bilingualLRC(lrcJson);
                    }
                    if(false === lrcText){
                        lrcText = lrcJson.lrc.lyric || lrcJson.tlyric.lyric;
                    }
                    lrcData = lrcText;
                } catch(e) {
                    return [];
                }
            }
            return this.analysisLrc(lrcData);
            
    }
    /***双语歌词同时显示***/
    bilingualLRC(lrcJson){
        var lrc1=lrcJson.hasOwnProperty('lrc') &&   lrcJson.lrc.lyric !=null?lrcJson.lrc.lyric:false;
        var lrc2=lrcJson.hasOwnProperty('tlyric') &&    lrcJson.tlyric.lyric !=null?lrcJson.tlyric.lyric:false;
        if(lrc1===false &&  lrc2 ===false ){
            return [];
        }
        if(lrc1 && lrc2 ){
           lrc1=this.analysisLrc(lrc1);
           lrc2=this.analysisLrc(lrc2);
           lrc1.map(function(item,key){
               lrc2.map(function(i,k){
                    if(item[0]==i[0]){
                        lrc1[key][1]+="<br/>"+i[1];
                        delete lrc2[k];
                    }
                });
           });
           return lrc1;
           
        }
        return this.analysisLrc(lrc1||lrc2);
    }
    analysisLrc(lrcData){
                var lines = lrcData.split('\n'),
                pattern = /\[\d{2}:\d{2}.\d{2}\]/g;
                var result = [];
                const info={'ti':[0,'歌名'],'by':[2,'歌词作者'],'ar':[0,'歌手'],'al':[0,'专辑名']};
                lines.map(function(data,item){
                    var index = data.indexOf(']');
                    var time = data.substring(0, index+1), value = data.substring(index+1);
                    var timeString = time.substring(1, time.length-2);
                    var timeArr = timeString.split(':');
                    var prefix=(timeArr[0]).toLowerCase();
                    if( info.hasOwnProperty(prefix)){
                        result.push([info[prefix][0], info[prefix][1]+":"+timeArr[1]]);
                    }else{
                         var key = parseInt(timeArr[0], 10) * 60 + parseFloat(timeArr[1]);
                            !isNaN(key) && value != "" && result.push([key, value]);
                    }
                })
                result.sort(function(a, b) {
                    return a[0] - b[0];
                });
                return result;
    }
    toString() {
        return "[object CMPLrc]";
    }

}

module.exports = CMPLrc;