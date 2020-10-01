// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


function getInitialBattleMessage(enemyName, isEnemyEvil) {
  var enemyName$1 = isEnemyEvil ? "Evil " + enemyName : enemyName;
  return "Beware ! A wild " + (enemyName$1 + " appears !");
}

function getNextCursorPosition(currentAttackIndex, moveType) {
  switch (moveType) {
    case /* Up */0 :
        return currentAttackIndex + 2 | 0;
    case /* Right */1 :
        return currentAttackIndex + 1 | 0;
    case /* Down */2 :
        return currentAttackIndex - 2 | 0;
    case /* Left */3 :
        return currentAttackIndex - 1 | 0;
    
  }
}

function getHpAfterDamage(currentHp, damage) {
  if (damage !== undefined) {
    return currentHp - damage | 0;
  } else {
    return currentHp;
  }
}

function getDamageMultiplier(attackType, defenceType) {
  var isSameType = attackType === defenceType;
  if (attackType !== 0) {
    if (isSameType) {
      return 0.5;
    } else {
      return 1.0;
    }
  } else if (defenceType !== 1) {
    if (isSameType) {
      return 0.5;
    } else {
      return 1.0;
    }
  } else if (isSameType) {
    if (isSameType) {
      return 0.5;
    } else {
      return 1.0;
    }
  } else {
    return 2.0;
  }
}

var playerName = "Pikachu";

var playerLevel = 40;

exports.playerName = playerName;
exports.playerLevel = playerLevel;
exports.getInitialBattleMessage = getInitialBattleMessage;
exports.getNextCursorPosition = getNextCursorPosition;
exports.getHpAfterDamage = getHpAfterDamage;
exports.getDamageMultiplier = getDamageMultiplier;
/* No side effect */
