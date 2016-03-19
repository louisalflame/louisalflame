//==============================================================
// Character Database
//==============================================================
var CHARACTERS = {
    NONE : {
        id       : "NONE",      img      : "img/Material/00/w1-1.png",
        color    : "w",         type     : "MATERIAL",
        health   : 2600,        attack   : 100,         recovery : 100,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "NONE",      active   : 0,
    },
    NORDIC_W : {
        id       : "NORDIC_W",  img      : "img/Special/1/w4.png",
        color    : "w",         type     : "GOD",
        health   : 3556,        attack   : 1577,        recovery : 496,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[0,0,30]", "[1.1,4]", "[0,180,0]", "[1.12,5]" ],
        leader   : "ElementFactor3",      active   : 0,
    },
    NORDIC_F : {
        id       : "NORDIC_F",  img      : "img/Special/1/f4.png",
        color    : "f",         type     : "GOD",
        health   : 3742,        attack   : 1686,        recovery : 442,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[0,0,30]", "[1.1,4]", "[0,180,0]", "[1.12,5]" ],
        leader   : "ElementFactor3",      active   : 0,
    },
    NORDIC_P : {
        id       : "NORDIC_P",  img      : "img/Special/1/p4.png",
        color    : "p",         type     : "GOD",
        health   : 3961,        attack   : 1529,        recovery : 464,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[0,0,30]", "[1.1,4]", "[0,180,0]", "[1.12,5]" ],
        leader   : "ElementFactor3",      active   : 0,
    },
    NORDIC_L : {
        id       : "NORDIC_L",  img      : "img/Special/1/l4.png",
        color    : "l",         type     : "GOD",
        health   : 3738,        attack   : 1545,        recovery : 531,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[0,0,30]", "[1.1,4]", "[0,180,0]", "[1.12,5]" ],
        leader   : "ElementFactor3",      active   : 0,
    },
    NORDIC_D : {
        id       : "NORDIC_D",  img      : "img/Special/1/d4.png",
        color    : "d",         type     : "GOD",
        health   : 3482,        attack   : 1734,        recovery : 460,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[0,0,30]", "[1.1,4]", "[0,180,0]", "[1.12,5]" ],
        leader   : "ElementFactor3",      active   : 0,
    },
    BOSS_ODIN : {
        id       : "BOSS_ODIN", img      : "img/Boss/0/d2-3.png",
        color    : "d",         type     : "GOD",
        health   : 4259,        attack   : 1995,         recovery : 352,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "WillPower",      active   : 0,
    },
    CHINA_D : {
        id       : "CHINA_D",   img      : "img/Special/4/d5.png",
        color    : "d",         type     : "SPIRIT",
        health   : 2353,        attack   : 1407,        recovery : 786,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_RECOVER", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[0,0,50]", "[1.1,3]", "[0,100,0]", "[1.1,4]" ],
        leader   : "CHINA_D",     active   : 0,
    },
    GREEK_W : {
        id       : "GREEK_W",   img      : "img/Special/2/w3.png",
        color    : "w",         type     : "GOD",
        health   : 2927,        attack   : 1646,        recovery : 403,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var : [ "[0,0,50]", "[1.1,4]", "[340,0,0]", "['w',0.4]" ],
        leader   : "GREEK",     active   : 0,
    },
    GREEK_F : {
        id       : "GREEK_F",   img      : "img/Special/2/f3.png",
        color    : "f",         type     : "GOD",
        health   : 3080,        attack   : 1760,        recovery : 358,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var : [ "[0,90,0]", "[1.1,4]", "[340,0,0]", "['f',0.4]" ],
        leader   : "GREEK",     active   : 0,
    },
    GREEK_P : {
        id       : "GREEK_P",   img      : "img/Special/2/p3.png",
        color    : "p",         type     : "GOD",
        health   : 3385,        attack   : 1516,        recovery : 376,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var : [ "[0,90,0]", "[1.1,4]", "[340,0,0]", "['p',0.4]" ],
        leader   : "GREEK",     active   : 0,
    },
    GREEK_L : {
        id       : "GREEK_L",   img      : "img/Special/2/l3.png",
        color    : "l",         type     : "GOD",
        health   : 3049,        attack   : 1634,        recovery : 414,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var : [ "[0,90,0]", "[1.1,4]", "[340,0,0]", "['l',0.4]" ],
        leader   : "GREEK",     active   : 0,
    },
    GREEK_D : {
        id       : "GREEK_D",   img      : "img/Special/2/d3.png",
        color    : "d",         type     : "GOD",
        health   : 2866,        attack   : 1810,        recovery : 373,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var : [ "[0,90,0]", "[1.1,4]", "[340,0,0]", "['d',0.4]" ],
        leader   : "GREEK",     active   : 0,
    },
    HEART_QUEEN : {
        id       : "HEART_QUEEN", img    : "img/Boss/1/f1-1.png",
        color    : "f",         type     : "HUMAN",
        health   : 1954,        attack   : 1392,        recovery : 431,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "HEART_QUEEN", active   : 0,
    },
    COUPLE_F : {
        id       : "COUPLE_F",  img      : "img/Special/15/f3.png",
        color    : "f",         type     : "GOD",
        health   : 3102,        attack   : 1604,        recovery : 376,
        wake     : [ "H_A_R_INCREASE", "NONE", "H_A_R_INCREASE", "NONE" ],
        wake_var : [ "[0,90,0]", 0, "[340,0,0]", 0 ],
        leader   : "COUPLE_F",  active   : 0,
    },
    COUPLE_P : {
        id       : "COUPLE_P",  img      : "img/Special/15/p3.png",
        color    : "p",         type     : "HUMAN",
        health   : 3132,        attack   : 1372,        recovery : 384,
        wake     : [ "H_A_R_INCREASE", "NONE", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[0,0,50]", 0, "[0,120,0]", "[1.1,4]" ],
        leader   : "COUPLE_P",  active   : 0,
    },
    MACHINE_DOLL_W : {
        id       : "MACHINE_DOLL_W", img : "img/Special/17/w2.png",
        color    : "w",             type : "HUMAN",
        health   : 2595,          attack : 1267,        recovery : 342,
        wake     : [ "H_A_R_INCREASE", "NONE", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[90,0,0]", 0, "[0,120,0]", "[1.1,3]" ],
        leader   : "DOLL_HUMAN_DRAGON" , active : 0,
    },
    MACHINE_DOLL_F : {
        id       : "MACHINE_DOLL_F", img : "img/Special/17/f2.png",
        color    : "f",             type : "HUMAN",
        health   : 2731,          attack : 1355,        recovery : 304,
        wake     : [ "H_A_R_INCREASE", "NONE", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[90,0,0]", 0, "[0,120,0]", "[1.1,3]" ],
        leader   : "DOLL_HUMAN_DRAGON" , active : 0,
    },
    MACHINE_DOLL_P : {
        id       : "MACHINE_DOLL_P", img : "img/Special/17/p2.png",
        color    : "p",             type : "HUMAN",
        health   : 3001,          attack : 1167,        recovery : 320,
        wake     : [ "H_A_R_INCREASE", "NONE", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[90,0,0]", 0, "[0,120,0]", "[1.1,3]" ],
        leader   : "DOLL_HUMAN_BEAST_SPIRIT" , active : 0,
    },
    MACHINE_DOLL_L : {
        id       : "MACHINE_DOLL_L", img : "img/Special/17/l2.png",
        color    : "l",             type : "HUMAN",
        health   : 2704,          attack : 1179,        recovery : 352,
        wake     : [ "H_A_R_INCREASE", "NONE", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[90,0,0]", 0, "[0,120,0]", "[1.1,3]" ],
        leader   : "DOLL_HUMAN_DEVIL_SPIRIT" , active : 0,
    },
    MACHINE_DOLL_D : {
        id       : "MACHINE_DOLL_D", img : "img/Special/17/d2.png",
        color    : "d",             type : "HUMAN",
        health   : 2541,          attack : 1393,        recovery : 317,
        wake     : [ "H_A_R_INCREASE", "NONE", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[90,0,0]", 0, "[0,120,0]", "[1.1,3]" ],
        leader   : "DOLL_HUMAN_GOD" , active : 0,
    },
    TRIBE_BEAST_W : {
        id       : "TRIBE_BEAST_W",  img : "img/Special/18/w3.png",
        color    : "w",             type : "BEAST",
        health   : 2896,          attack : 1173,        recovery : 153,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "STRAIGHT_HEAL"],
        wake_var : [ "[0,70,0]", "[1.1,3]", "[360,0,0]", "[10,4]" ],
        leader   : "TRIBE_BEAST", active : 0,
    },
    TRIBE_BEAST_F : {
        id       : "TRIBE_BEAST_F",  img : "img/Special/18/f3.png",
        color    : "f",             type : "BEAST",
        health   : 3006,          attack : 1239,        recovery : 135,
        wake     : [ "H_A_R_INCREASE", "NONE", "H_A_R_INCREASE", "STRAIGHT_HEAL"],
        wake_var : [ "[0,70,0]", 0, "[360,0,0]", "[10,4]" ],
        leader   : "TRIBE_BEAST", active : 0,
    },
    TRIBE_BEAST_P : {
        id       : "TRIBE_BEAST_P",  img : "img/Special/18/p3.png",
        color    : "p",             type : "BEAST",
        health   : 3304,          attack : 1066,        recovery : 141,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "STRAIGHT_HEAL"],
        wake_var : [ "[0,70,0]", "[1.1,3]", "[360,0,0]", "[10,4]" ],
        leader   : "TRIBE_BEAST", active : 0,
    },
    TRIBE_BEAST_L : {
        id       : "TRIBE_BEAST_L",  img : "img/Special/18/l3.png",
        color    : "l",             type : "BEAST",
        health   : 3017,          attack : 1092,        recovery : 158,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "STRAIGHT_HEAL"],
        wake_var : [ "[0,70,0]", "[1.1,3]", "[360,0,0]", "[10,4]" ],
        leader   : "TRIBE_BEAST", active : 0,
    },
    TRIBE_BEAST_D : {
        id       : "TRIBE_BEAST_D",  img : "img/Special/18/d3.png",
        color    : "d",             type : "BEAST",
        health   : 2798,          attack : 1273,        recovery : 140,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "STRAIGHT_HEAL"],
        wake_var : [ "[0,70,0]", "[1.1,3]", "[360,0,0]", "[10,4]" ],
        leader   : "TRIBE_BEAST", active : 0,
    },
    BABYLON_W : {
        id       : "BABYLON_W", img      : "img/Special/23/w2.png",
        color    : "w",         type     : "GOD",
        health   : 3011,        attack   : 1399,        recovery : 421,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "BABYLON",   active   : 0,
    },
    BABYLON_F : {
        id       : "BABYLON_F", img      : "img/Special/23/f2.png",
        color    : "f",         type     : "GOD",
        health   : 3167,        attack   : 1496,        recovery : 375,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "BABYLON",   active   : 0,
    },
    BABYLON_P : {
        id       : "BABYLON_P", img      : "img/Special/23/p2.png",
        color    : "p",         type     : "GOD",
        health   : 3481,        attack   : 1288,        recovery : 394,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "BABYLON",   active   : 0,
    },
    BABYLON_L : {
        id       : "BABYLON_L", img      : "img/Special/23/l2.png",
        color    : "l",         type     : "GOD",
        health   : 3136,        attack   : 1302,        recovery : 433,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "BABYLON",   active   : 0,
    },
    BABYLON_D : {
        id       : "BABYLON_D", img      : "img/Special/23/d2.png",
        color    : "d",         type     : "GOD",
        health   : 2948,        attack   : 1537,        recovery : 390,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "BABYLON",     active   : 0,
    },
    SWORD_BROTHER : {
        id       : "SWORD_BROTHER", img  : "img/Special/21/d2-2.png",
        color    : "d",         type     : "HUMAN",
        health   : 2393,        attack   : 1560,        recovery : 431,
        wake     : [ "H_A_R_INCREASE", "NONE", "DROP_INCREASE", "NONE" ],
        wake_var : [ "[150,120,0]", 0, "['d',0.4]", 0 ],
        leader   : "SWORD_BROTHER",  active   : 0,
    },
    ZHAOLINGER : {
        id       : "ZHAOLINGER", img     : "img/Special/26/w2-1.png",
        color    : "w",         type     : "HUMAN",
        health   : 2349,        attack   : 1360,        recovery : 477,
        wake     : [ "H_A_R_INCREASE", "NONE", "H_A_R_INCREASE", "NONE" ],
        wake_var : [ "[150,0,0]", 0, "[0,120,0]", 0 ],
        leader   : "COMMON_SOURCE_PLUS",  active   : 0,
    },
    LINYUERU : {
        id       : "LINYUERU",  img      : "img/Special/26/f2-1.png",
        color    : "f",         type     : "HUMAN",
        health   : 2472,        attack   : 1455,        recovery : 424,
        wake     : [ "H_A_R_INCREASE", "NONE", "H_A_R_INCREASE", "NONE" ],
        wake_var : [ "[100,0,0]", 0, "[0,130,0]", 0 ],
        leader   : "COMMON_SOURCE_PLUS",  active   : 0,
    },
    LIXIAOYAO : {
        id       : "LIXIAOYAO", img      : "img/Special/26/p2-1.png",
        color    : "p",         type     : "HUMAN",
        health   : 2805,        attack   : 1358,        recovery : 440,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_RECOVER", "STRAIGHT_ATTACK", "NONE" ],
        wake_var : [ "[150,80,0]", "[1.1,3]", "[1.1,4]", 0 ],
        leader   : "LIXIAOYAO",  active   : 0,
    },
    WATER_FAIRY : {
        id       : "WATER_FAIRY", img   : "img/Special/34/w1-1.png",
        color    : "w",         type     : "SPIRIT",
        health   : 2145,        attack   : 1240,        recovery : 651,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_RECOVER", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var : [ "[110,0,0]", "[1.1,4]", "[0,110,0]", "['h',0.25]" ],
        leader   : "WATER_FAIRY", active   : 0,
    },
    DARK_LUCIFER : {
        id       : "DARK_LUCIFER", img   : "img/Special/34/d1-2.png",
        color    : "d",         type     : "SPIRIT",
        health   : 2416,        attack   : 1485,        recovery : 601,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_RECOVER", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[110,0,0]", "[1.1,4]", "[0,110,0]", "[1.1,4]" ],
        leader   : "DARK_LUCIFER", active   : 0,
    },
    DEVIL_ANCESTOR_W : {
        id       : "DEVIL_ANCESTOR_W", img  : "img/Special/35/w2.png",
        color    : "w",         type     : "DEVIL",
        health   : 1651,        attack   : 2362,        recovery : 396,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "DEVIL_ILLUSION",  active   : 0,
    },
    DEVIL_ANCESTOR_F : {
        id       : "DEVIL_ANCESTOR_F", img  : "img/Special/35/f2.png",
        color    : "f",         type     : "DEVIL",
        health   : 1724,        attack   : 2429,        recovery : 330,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "DEVIL_ILLUSION",  active   : 0,
    },
    DEVIL_ANCESTOR_P : {
        id       : "DEVIL_ANCESTOR_P", img  : "img/Special/35/p2.png",
        color    : "p",         type     : "DEVIL",
        health   : 1895,        attack   : 2279,        recovery : 368,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "DEVIL_ILLUSION",  active   : 0,
    },
    DEVIL_ANCESTOR_L : {
        id       : "DEVIL_ANCESTOR_L", img  : "img/Special/35/l2.png",
        color    : "l",         type     : "DEVIL",
        health   : 1698,        attack   : 2315,        recovery : 408,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "DEVIL_CIRCLE",  active   : 0,
    },
    DEVIL_ANCESTOR_D : {
        id       : "DEVIL_ANCESTOR_D", img  : "img/Special/35/d2.png",
        color    : "d",         type     : "DEVIL",
        health   : 1582,        attack   : 2531,        recovery : 304,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "DEVIL_CIRCLE",  active   : 0,
    },
};

function NewCharacter( id ){
    return {
        id       : id,
        img      : CHARACTERS[id]["img"],
        color    : CHARACTERS[id]["color"],
        type     : CHARACTERS[id]["type"],
        health   : CHARACTERS[id]["health"],
        attack   : CHARACTERS[id]["attack"],
        recovery : CHARACTERS[id]["recovery"],
        wake     : [
            CHARACTERS[id]["wake"][0],
            CHARACTERS[id]["wake"][1],
            CHARACTERS[id]["wake"][2],
            CHARACTERS[id]["wake"][3]
        ],
        wake_var : [
            CHARACTERS[id]["wake_var"][0],
            CHARACTERS[id]["wake_var"][1],
            CHARACTERS[id]["wake_var"][2],
            CHARACTERS[id]["wake_var"][3]
        ],
        leader   : CHARACTERS[id]["leader"],
        active   : CHARACTERS[id]["active"],
    };
}