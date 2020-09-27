// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


function getInitialBattleMessage(enemyName, isEnemyEvil) {
  var enemyName$1 = isEnemyEvil ? "Evil " + enemyName : enemyName;
  return "Beware, a wild " + (enemyName$1 + " appears !");
}

function getHpAfterDamage(currentHp, damage) {
  if (damage !== undefined) {
    return currentHp - damage | 0;
  } else {
    return currentHp;
  }
}

function getNextCursorPosition(currentAttackIndex, moveType) {
  console.log(currentAttackIndex);
  console.log(moveType);
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

function getDamageMultiplier(attackType, defenceType) {
  switch (attackType) {
    case /* Electric */0 :
        if (defenceType !== 1) {
          if (defenceType !== 0) {
            return 1.0;
          } else {
            return 0.5;
          }
        } else {
          return 2.0;
        }
    case /* Water */1 :
        if (defenceType !== 1) {
          if (defenceType !== 0) {
            return 1.0;
          } else {
            return 2.0;
          }
        } else {
          return 0.5;
        }
    case /* Psychic */2 :
        if (defenceType !== 2) {
          return 1.0;
        } else {
          return 0.5;
        }
    case /* Normal */3 :
        return 1.0;
    
  }
}

var playerName = "Pikachu";

var playerLevel = 20;

exports.playerName = playerName;
exports.playerLevel = playerLevel;
exports.getInitialBattleMessage = getInitialBattleMessage;
exports.getHpAfterDamage = getHpAfterDamage;
exports.getNextCursorPosition = getNextCursorPosition;
exports.getDamageMultiplier = getDamageMultiplier;
/* No side effect */
