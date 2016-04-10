//==============================================================
//==============================================================
// ADDITIONAL EFFECT
//==============================================================
//==============================================================

var BasicEffectSetting = function( place, i, VAR ){
	return {
		ID       : this.id,
		PLACE    : place,
		i        : i,
		COLOR    : VAR['COLOR'],
		TYPE     : VAR['TYPE'],
		DURATION : 1,
	}
};

var DesperateAttack = function(){
    COUNT_FACTOR['DesperateAttack'] = {
        factor    : function( member, member_place ){ 
        	factor = 1 + 2* ( 1- (HEALTH_POINT/TOTAL_HEALTH_POINT) );
        	return factor; 
        },
        prob      : 1,
        condition : function( member, member_place ){ return true; },
    };
};
//==============================================================
var FightSafeAttack = function(){
	if( countComboAtFirstWave() >= 4 ){
	    COUNT_FACTOR['FightSafeAttack'] = {
	        factor    : function( member, member_place ){ return 2; },
	        prob      : 1,
	        condition : function( member, member_place ){ return true; },
	    };
	}else{
        var recover = {
            place  : this.variable['PLACE'],
            color  : "h",
            base   : 20000,
            factor : 1,
            log    : "FightSafeRecover",
        };
        RECOVER_STACK.push(recover);
	}
}
var PlaySafeAttack = function(){
	if( countComboAtFirstWave() >= 4 ){
	    COUNT_FACTOR['PlaySafeAttack'] = {
	        factor    : function( member, member_place ){ return 2; },
	        prob      : 1,
	        condition : function( member, member_place ){ return true; },
	    };
	}else{
		COUNT_INJURE_REDUCE *= 0.2;
	}
}
var PlayWildAttack = function(){
	if( countComboAtFirstWave() >= 4 ){
	    COUNT_FACTOR['PlayWildAttack'] = {
	        factor    : function( member, member_place ){ return 2; },
	        prob      : 1,
	        condition : function( member, member_place ){ return true; },
	    };
	}else{
	    $.each(ENEMY, function(e, enemy){
	    	enemy['variable']['DEFENCE'] = 0;
	    });
	}
}
//==============================================================
var HuntingModeAttack = function(){
	var VAR = this.variable;
	COUNT_FACTOR['HuntingModeAttack'] = {
	    factor    : function( member, member_place ){
	    	if( member_place == VAR['PLACE'] || 
	    		(Math.abs(member_place-VAR['PLACE']) == 1 && member['type'] == "BEAST" ) ){ 
	    		return 3; 
	    	}
	    	return 1;
	    },
	    prob      : 1,
	    condition : function( member, member_place ){ return true; },
	};
}
var SavageAttack = function(){
	var VAR = this.variable;
	COUNT_FACTOR['SavageAttack'] = {
	    factor    : function( member, member_place ){
	    	if( member_place == VAR['PLACE'] ){ return 10; }
	    	return 1;
	    },
	    prob      : 1,
	    condition : function( member, member_place ){ return true; },
	};
}
//==============================================================
var BladesSetting = function( place, i, VAR ){
	setTimeLimit( 8 );
	return {
		ID       : this.id,
		PLACE    : place,
		i        : i,
		COLOR    : VAR['COLOR'],
		TYPE     : VAR['TYPE'],
		DURATION : 1,
	}
};
var BladesOfWaterFlameVineAttack = function(){
	var VAR = this.variable;
	if( checkComboColorMaxAmountByConfig({
            ID    : [ VAR['COLOR'] ],
            check : [ '{0}>=6' ],
        }) ){
		COUNT_FACTOR['BladesOfWaterAttack'] = {
		    factor    : function( member, member_place ){ return 1.5; },
		    prob      : 1,
		    condition : function( member, member_place ){ return member['color'] == VAR['COLOR']; },
		};
	}
}
var BladesOfLightPhantomAttack = function(){
	var VAR = this.variable;
	if( checkComboColorAmountByConfig({
            ID    : [ 'l', 'd', 'h' ] ,
            check : [ '{0}>0', '{1}>0', '{2}>0' ],
        }) ){
		COUNT_FACTOR['BladesOfWaterAttack'] = {
		    factor    : function( member, member_place ){ return 1.5; },
		    prob      : 1,
		    condition : function( member, member_place ){ return member['color'] == VAR['COLOR']; },
		};
	}
}
var BladesEndEffects = function(){
	setTimeLimit( 5 );
}

//==============================================================
//==============================================================
// ENEMY EFFECT
//==============================================================
//==============================================================

var BattleFieldSetting = function( place, i, VAR, enemy ){
	return {
		ID       : this.id,
		PLACE    : place,
		i        : i,
		COLOR    : VAR['COLOR'],
		TYPE     : VAR['TYPE'],
		DURATION : 2,
		ENEMY    : enemy,
	}
};
var BattleFieldAttack = function(){
	var VAR = this.variable;
	COUNT_COLOR_FACTOR[ VAR['COLOR'] ] *= 1.5;
	VAR['ENEMY']['variable']['COLOR'] = COLOR_EXCLUSIVE[ VAR['COLOR'] ];
};
//==============================================================
var BlazingCircleSetting = function( place, i, VAR, enemy ){
	enemy['variable']['COOLDOWN'] += 3;
	return {
		ID       : this.id,
		PLACE    : place,
		i        : i,
		COLOR    : VAR['COLOR'],
		TYPE     : VAR['TYPE'],
		DURATION : 3,
		ENEMY    : enemy,
	}
};
var BlazingCircleAttack = function(){
	var VAR = this.variable;
	VAR['ENEMY']['variable']['COLOR'] = COLOR_EXCLUSIVE[ 'f' ];
};

//==============================================================
//==============================================================
// ADDITIONAL EFFECT DATA
//==============================================================
//==============================================================

// tags : attack增傷類 injureReduce減傷類 defenceReduce破防類 
//        addTimeLimit延時類 selfAttack自己增傷
//        changeColor轉屬性類 addCoolDown控場延長CD 

var ADDITIONAL_EFFECT_DATA = {
	DESPERATE_ATTACK : {
		id        : 'DESPERATE_ATTACK',
		attack    : DesperateAttack,
		preSet    : BasicEffectSetting,
		tag       : ['attack'],
	},
	FIGHT_SAFE : {
		id        : 'FIGHT_SAFE',
		attack    : FightSafeAttack,
		preSet    : BasicEffectSetting,
		tag       : ['attack'],
	},
	PLAY_SAFE : {
		id        : 'PLAY_SAFE',
		attack    : PlaySafeAttack,
		preSet    : BasicEffectSetting,
		tag       : ['attack', 'injureReduce'],
	},
	PLAY_WILD : {
		id        : 'PLAY_WILD',
		attack    : PlayWildAttack,
		preSet    : BasicEffectSetting,
		tag       : ['attack', 'defenceReduce'],
	},
	HUNTING_MODE : {
		id        : 'HUNTING_MODE',
		attack    : HuntingModeAttack,
		preSet    : BasicEffectSetting,
		tag       : ['attack'],
	},
	SAVAGE_ATTACK : {
		id        : 'SAVAGE_ATTACK',
		attack    : SavageAttack,
		preSet    : BasicEffectSetting,
		tag       : ['selfAttack'],
	},
	BLADES_OF_WATER : {
		id        : 'BLADES_OF_WATER',
		attack    : BladesOfWaterFlameVineAttack,
		endEffect : BladesEndEffects,
		preSet    : BladesSetting,
		tag       : ['attack', 'addTimeLimit'],
	},
	BLADES_OF_FLAME : {
		id        : 'BLADES_OF_FLAME',
		attack    : BladesOfWaterFlameVineAttack,
		endEffect : BladesEndEffects,
		preSet    : BladesSetting,
		tag       : ['attack', 'addTimeLimit'],
	},
	BLADES_OF_VINE : {
		id        : 'BLADES_OF_VINE',
		attack    : BladesOfWaterFlameVineAttack,
		endEffect : BladesEndEffects,
		preSet    : BladesSetting,
		tag       : ['attack', 'addTimeLimit'],
	},
	BLADES_OF_LIGHT : {
		id        : 'BLADES_OF_LIGHT',
		attack    : BladesOfLightPhantomAttack,
		endEffect : BladesEndEffects,
		preSet    : BladesSetting,
		tag       : ['attack', 'addTimeLimit'],
	},
	BLADES_OF_PHANTOM : {
		id        : 'BLADES_OF_PHANTOM',
		attack    : BladesOfLightPhantomAttack,
		endEffect : BladesEndEffects,
		preSet    : BladesSetting,
		tag       : ['attack', 'addTimeLimit'],
	},
};

var ENEMY_EFFECT_DATA = {
	BATTLEFIELD_P : {
		id        : 'BATTLEFIELD_P',
		attack    : BattleFieldAttack,
		preSet    : BattleFieldSetting,
		tag       : ['changeColor'],
	},
	BLAZING_CIRCLE : {
		id        : 'BLAZING_CIRCLE',
		attack    : BlazingCircleAttack,
		preSet    : BlazingCircleSetting,
		tag       : ['changeColor', 'addCoolDown'],
	}
}

function NewAdditionalEffect( id ){
    var effectObj = $.extend(true, {}, ADDITIONAL_EFFECT_DATA[id]);
    effectObj['variable'] = {};
    return effectObj;
}
function NewEnemyEffect( id ){
    var effectObj = $.extend(true, {}, ENEMY_EFFECT_DATA[id]);
    effectObj['variable'] = {};
    return effectObj;
}

function additionalEffectAdd( effect ){
    ADDITIONAL_EFFECT_STACK.push( effect );
	while( ADDITIONAL_EFFECT_STACK.length > 4 ){
		ADDITIONAL_EFFECT_STACK.splice(0, 1);
	}

    updateAdditionalEffectLabel();
}

function checkAdditionEffectByKey( key ){
    $.each(ADDITIONAL_EFFECT_STACK, function(i, effect){
        if( key in effect ){
            effect[ key ]();
        }
    });    
}
function checkEnemyEffectByKey( key ){
    $.each(ENEMY, function(e, enemy){
        $.each(enemy['variable']['EFFECT'], function(i, effect){
	        if( key in effect ){
	            effect[ key ]();
	        }
    	});
    });
}

function additionalEffectUpdate(){
	var tmp_effect_stack = [];
	$.each(ADDITIONAL_EFFECT_STACK, function(i, effect){
		effect['variable']["DURATION"] -= 1;
		if( effect['variable']["DURATION"] > 0 ){
			tmp_effect_stack.push(effect);
		}else if( 'endEffect' in effect ){
			effect['endEffect']();
		}
	});
	ADDITIONAL_EFFECT_STACK = tmp_effect_stack;
    updateAdditionalEffectLabel();
}
function enemyEffectUpdate(){
    $.each(ENEMY, function(e, enemy){
		var tmp_effect_stack = [];
        $.each(enemy['variable']['EFFECT'], function(i, effect){
			effect['variable']["DURATION"] -= 1;
			if( effect['variable']["DURATION"] > 0 ){
				tmp_effect_stack.push(effect);
			}else if( 'endEffect' in effect ){
				effect['endEffect']();
			}
    	});
    	enemy['variable']['EFFECT'] = tmp_effect_stack;
    });
}