//==============================================================
// Character Database
//==============================================================
var CHARACTERS_DATA = {
    NONE : {
        id           : "NONE",
        label        : "瘋頭",
        img          : "img/Material/00/w1-1.png",
        color        : "w",
        type         : "MATERIAL",
        health       : 2600,
        attack       : 100,
        recovery     : 100,
        wake         : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var     : [ 0, 0, 0, 0 ],
        wake_info    : [ "無", "無", "無", "無" ],
        leader       : "NONE",
        active       : [ "NONE" ],
    },
    GREEK_W : {
        id           : "GREEK_W",
        label        : "大海之神 ‧ 波塞頓",
        img          : "img/Special/2/w3.png",
        color        : "w",
        type         : "GOD",
        health       : 2927,
        attack       : 1646,
        recovery     : 403,
        wake         : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var     : [ [0,90,0], [1.1,4], [340,0,0], ['w',0.4] ],
        wake_info    : [ "攻擊力+90", "4顆直排劍10%", "生命力+340", "直排水符石掉落提升至40%" ],
        leader       : "GREEK_W",
        active       : [ "TRACE_OF_NOTION_W" ],
    },
    GREEK_F : {
        id           : "GREEK_F",
        label        : "煉火之神 ‧ 赫淮斯托斯",
        img          : "img/Special/2/f3.png",
        color        : "f",
        type         : "GOD",
        health       : 3080,
        attack       : 1760,
        recovery     : 358,
        wake         : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var     : [ [0,90,0], [1.1,4], [340,0,0], ['f',0.4] ],
        wake_info    : [ "攻擊力+90", "4顆直排劍10%", "生命力+340", "直排火符石掉落提升至40%" ],
        leader       : "GREEK_F",
        active       : [ "TRACE_OF_NOTION_F" ],
    },
    GREEK_P : {
        id           : "GREEK_P",
        label        : "戰爭女神 ‧ 雅典娜",
        img          : "img/Special/2/p3.png",
        color        : "p",
        type         : "GOD",
        health       : 3385,
        attack       : 1516,
        recovery     : 376,
        wake         : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var     : [ [0,90,0], [1.1,4], [340,0,0], ['p',0.4] ],
        wake_info    : [ "攻擊力+90", "4顆直排劍10%", "生命力+340", "直排木符石掉落提升至40%" ],
        leader       : "GREEK_P",
        active       : [ "TRACE_OF_NOTION_P" ],
    },
    GREEK_L : {
        id           : "GREEK_L",
        label        : "聖光之神 ‧ 阿波羅",
        img          : "img/Special/2/l3.png",
        color        : "l",
        type         : "GOD",
        health       : 3049,
        attack       : 1634,
        recovery     : 414,
        wake         : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var     : [ [0,90,0], [1.1,4], [340,0,0], ['l',0.4] ],
        wake_info    : [ "攻擊力+90", "4顆直排劍10%", "生命力+340", "直排光符石掉落提升至40%" ],
        leader       : "GREEK_L",
        active       : [ "TRACE_OF_NOTION_L" ],
    },
    GREEK_D : {
        id           : "GREEK_D",
        label        : "月夜之神 ‧ 阿提密斯",
        img          : "img/Special/2/d3.png",
        color        : "d",
        type         : "GOD",
        health       : 2866,
        attack       : 1810,
        recovery     : 373,
        wake         : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var     : [ [0,90,0], [1.1,4], [340,0,0], ['d',0.4] ],
        wake_info    : [ "攻擊力+90", "4顆直排劍10%", "生命力+340", "直排暗符石掉落提升至40%" ],
        leader       : "GREEK_D",
        active       : [ "TRACE_OF_NOTION_D" ],
    },
    COUPLE_F : {
        id           : "COUPLE_F",
        label        : "彌勒世尊 ‧ 燃燈",
        img          : "img/Special/15/f3.png",
        color        : "f",
        type         : "GOD",
        health       : 3102,
        attack       : 1604,
        recovery     : 376,
        wake         : [ "H_A_R_INCREASE", "STRAIGHT_ENCIRCLEMENT", "H_A_R_INCREASE", "STRAIGHT_ENCHANTMENT" ],
        wake_var     : [ [0,90,0], 'h', [340,0,0], 'h' ],
        wake_info    : [ "攻擊力+90", "直排靈氣圍城", "生命力+340", "直排心強化" ],
        leader       : "COUPLE_F",
        active       : [ "DEFENSIVE_STANCE_EX_F" ],
    },
    COUPLE_P : {
        id           : "COUPLE_P",
        label        : "顯聖真君 ‧ 楊戩",
        img          : "img/Special/15/p3.png",
        color        : "p",
        type         : "HUMAN",
        health       : 3132,
        attack       : 1372,
        recovery     : 384,
        wake         : [ "H_A_R_INCREASE", "ACTIVE_COOLDOWN_BEGINING", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var     : [ [0,0,50], 2, [0,120,0], [1.1,4] ],
        wake_info    : [ "回復力+50", "進關後冷卻回合-2", "攻擊力+120", "4顆直排劍10%" ],
        leader       : "COUPLE_P",
        active       : [ "BATTLEFIELD_P" ],
    },
    BABYLON_W : {
        id           : "BABYLON_W",
        label        : "智慧者 ‧ 阿特拉哈西斯",
        img          : "img/Special/23/w2.png",
        color        : "w",
        type         : "GOD",
        health       : 3011,
        attack       : 1399,
        recovery     : 421,
        wake         : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var     : [ 0, 0, 0, 0 ],
        wake_info    : [ "無", "無", "無", "無" ],
        leader       : "BABYLON_W",
        active       : [ "BLADES_OF_WATER" ],
    },
    BABYLON_F : {
        id           : "BABYLON_F",
        label        : "暴風軍神 ‧ 尼努爾塔",
        img          : "img/Special/23/f2.png",
        color        : "f",
        type         : "GOD",
        health       : 3167,
        attack       : 1496,
        recovery     : 375,
        wake         : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var     : [ 0, 0, 0, 0 ],
        wake_info    : [ "無", "無", "無", "無" ],
        leader       : "BABYLON_F",
        active       : [ "BLADES_OF_FLAME" ],
    },
    BABYLON_P : {
        id           : "BABYLON_P",
        label        : "牧者國王 ‧ 杜穆濟",
        img          : "img/Special/23/p2.png",
        color        : "p",
        type         : "GOD",
        health       : 3481,
        attack       : 1288,
        recovery     : 394,
        wake         : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var     : [ 0, 0, 0, 0 ],
        wake_info    : [ "無", "無", "無", "無" ],
        leader       : "BABYLON_P",
        active       : [ "BLADES_OF_VINE" ],
    },
    BABYLON_L : {
        id           : "BABYLON_L",
        label        : "月神 ‧ 伊南娜",
        img          : "img/Special/23/l2.png",
        color        : "l",
        type         : "GOD",
        health       : 3136,
        attack       : 1302,
        recovery     : 433,
        wake         : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var     : [ 0, 0, 0, 0 ],
        wake_info    : [ "無", "無", "無", "無" ],
        leader       : "BABYLON_L",
        active       : [ "BLADES_OF_LIGHT" ],
    },
    BABYLON_D : {
        id           : "BABYLON_D",
        label        : "惡疾之神 ‧ 納姆塔爾",
        img          : "img/Special/23/d2.png",
        color        : "d",
        type         : "GOD",
        health       : 2948,
        attack       : 1537,
        recovery     : 390,
        wake         : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var     : [ 0, 0, 0, 0 ],
        wake_info    : [ "無", "無", "無", "無" ],
        leader       : "BABYLON_D",
        active       : [ "BLADES_OF_PHANTOM" ],
    },
    OLD_GREEK_W : {
        id           : "OLD_GREEK_W",
        label        : "浪濤海神 ‧ 蓬托斯",
        img          : "img/Special/36/w2.png",
        color        : "w",
        type         : "GOD",
        health       : 2769,
        attack       : 1486,
        recovery     : 433,
        wake         : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var     : [ 0, 0, 0, 0 ],
        wake_info    : [ "", "", "", "" ],
        leader       : "BOUNDARY_REVOLUTION",
        active       : [ "FLORAL_CORNER_W" ],
    },
    OLD_GREEK_D : {
        id           : "OLD_GREEK_D",
        label        : "暗影夜神 ‧ 厄瑞玻斯",
        img          : "img/Special/36/d2.png",
        color        : "d",
        type         : "GOD",
        health       : 2775,
        attack       : 1653,
        recovery     : 330,
        wake         : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var     : [ 0, 0, 0, 0 ],
        wake_info    : [ "", "", "", "" ],
        leader       : "BOUNDARY_REVOLUTION",
        active       : [ "FLORAL_CORNER_D" ],
    },
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
};

//==============================================================
// Color Letter Mapping
//==============================================================

var COLOR_LETTERS = [
    { 'w': '水', 'f': '火', 'p': '木', 'l': '光', 'd': '暗', 'h': '心', '_': '無' },
    { 'w': '浪濤', 'f': '熾燄', 'p': '藤木', 'l': '流螢', 'd': '幽冥', 'h': '心', '_': '無' },
    { 'w': '水', 'f': '焰', 'p': '森', 'l': '光', 'd': '魅', 'h': '心', '_': '無' },
    { 'w': '浪濤', 'f': '熾燄', 'p': '藤木', 'l': '玄光', 'd': '幽冥', 'h': '護心', '_': '無' },
    { 'w': '海', 'f': '炎', 'p': '森', 'l': '聖', 'd': '邪', 'h': '心', '_': '無' },
    { 'w': '波濤', 'f': '火烈', 'p': '枯朽', 'l': '天雷', 'd': '背叛', 'h': '心', '_': '無'},
    { 'w': '漩渦', 'f': '焰芒', 'p': '呼嘯', 'l': '聖焰', 'd': '吞噬', 'h': '心', '_': '無'},
];

var COLOR_EXCLUSIVE = {
    'w': 'f', 'f': 'p', 'p': 'w', 'l': 'd', 'd': 'l', 'h': 'w', '_': 'w'
};
var COLOR_ANTI_EXCLUSIVE = {
    'w': 'p', 'f': 'w', 'p': 'f', 'l': 'd', 'd': 'l', 'h': 'w', '_': 'w'
};

//==============================================================
// Attack Recover 
//==============================================================

var BASIC_ATTACK = {
    base   : 0,
    color  : "_",
    damage : 0,
    factor : 0,
    goal   : "single",
    place  : -1,
    strong : false,
    style  : "NONE",
    type   : "NONE",
    target : [],
    log    : "",
    work   : "init",
};
var BASIC_RECOVER = {
    base   : 0,
    color  : "_",
    factor : 0,
    place  : -1,
    style  : "NONE",
    type   : "NONE",
    log    : "",
    work   : "init",
};
var BASIC_INJURE = {
    enemy  : 0,
    label  : "",
    damage : 0,
    color  : "_",
    work   : "init",
};

function makeNewAttack(){
    var attack = $.extend(true, {}, BASIC_ATTACK);
    return attack;
}
function makeNewRecover(){    
    var recover = $.extend(true, {}, BASIC_RECOVER);
    return recover;
}
function makeNewInjure(){    
    var injure = $.extend(true, {}, BASIC_INJURE);
    return injure;
}