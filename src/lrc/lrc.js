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
        try{
            return new Promise((resolve, reject) => {
                fetch(lrc_src,{mode: 'cors'}).then(res => res.json()).catch(error => { resolve(false) }).then(response => {
                     self.lrcs =  self.parseLRC(response);
                     self.lrcs.length>0?resolve(true):resolve(false);
                });
            });
        }catch(e){
            console.log(e);
        }
    }
    parseLRC(lrcJson) {
            if('object'===typeof lrcJson){
                try {
                    if(true === lrcJson.uncollected){
                        return [];
                    }
                    /*** 
                        优先按照配置获取 获取不到 则有啥选啥
                    ***/
                    let lrcText=false;
                    if('2'===this.trans){
                        return this.bilingualLRC(lrcJson);
                    }else if( this.trans==false  &&   lrcJson.hasOwnProperty('lrc') &&   lrcJson.lrc.lyric !=null ){
                        lrcText=lrcJson.lrc.lyric; 
                    }else if( this.trans ==true && lrcJson.hasOwnProperty('tlyric') &&    lrcJson.tlyric.lyric !=null ){
                        lrcText=lrcJson.tlyric.lyric;
                    }  
                    if(false === lrcText){
                        lrcText = lrcJson.lrc.lyric || lrcJson.tlyric.lyric;
                    }
                    lrcJson = lrcText;
                } catch(e) {
                    return [];
                }
            }
            return this.analysisLrc(lrcJson);
            
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
    timeFormatSecond(timeString){
        var temp = timeString.split(':');
        return parseInt(temp[0], 10) * 60 + parseFloat(temp[1]);
    }
    analysisLrc(lrcData){
                if(!lrcData || lrcData.indexOf(']')==-1){
                    return [];
                }
                var lines = lrcData.split('\n'),
                timeRegexp = /\[(\d{2,3}\:\d{2}\.*[0-9]*)\]/,
                tagRegexp=/^\[(ti|by|ar|al)\:(.+)\]/i;
                var result = [];
                var self=this;
                const info={'ti':[1.1,'歌名'],'by':[1.2,'歌词作者'],'ar':[2.2,'歌手'],'al':[3.3,'专辑名']};
                lines.map(function(value,item){
                    if( tagRegexp.test(value)){
                        var tag=value.match(tagRegexp);
                        var prefix=(tag[1]).toLowerCase();
                        if(info.hasOwnProperty(prefix)){
                            result.push([info[prefix][0], info[prefix][1]+":"+tag[2]]);
                        }
                    }else if(timeRegexp.test(value)){
                        let timeArr=[];
                        while(timeRegexp.test(value)){ //修复多时间歌词标签 [01:00.16][02:33.61][03:33]
                            let fitToTime=value.match(timeRegexp);
                            value=value.replace(fitToTime[0],'');
                            timeArr.push(self.timeFormatSecond(fitToTime[1]));
                        }
                        for(var i in timeArr){
                            var key = timeArr[i];
                            !isNaN(key) &&value!='' && result.push([key, value]);
                        }
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