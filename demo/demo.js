(function() {
    "use strict";

    var config = {
        name: "CMP5 - 『生活需要音乐』",
        link: "http://bbs.cenfun.com/",
        description: "CMP5 - 『生活需要音乐』 - http://bbs.cenfun.com/",
        logo: "{src:logo.png,xywh:[10R,10R,0,0]}",

        skins: "skins/skin_default.js",
        plugins: "",
        backgrounds: "",
        lists: "",

        src_handler: "",
        lrc_handler: "",

        skin_id: "",

        play_id: "",
        auto_play: "",

        counter: "http://img.users.51.la/3389672.asp"
    };

    var list = [{
        type: "",
        src: "music/test.mp3",
        lrc: "lrc/lrc.txt",
        label: "MP3音乐测试"
    }, {
        type: "",
        src: "music/test.mp4",
        lrc: "",
        label: "mp4视频测试"
    }, {
        type: "",
        src: "music/test.mp3",
        lrc: "lrc/lrc.txt",
        label: "lrc歌词"
    }, {
        type: "",
        src: "music/test.mp3",
        lrc: "lrc/kmc.json",
        label: "kmc卡拉OK歌词"
    }];

    //将build目录下的cmp5.js拷贝到demo目录
    var cmp5 = window.cmp5;
    if (cmp5) {
        var cmp = new cmp5.CMP();
        cmp.setContainer(".container");
        cmp.setConfig(config);
        cmp.setList(list);
        cmp.play();
    }

}());