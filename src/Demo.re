/*
 * Please name our Pokémon 👍 !
 *
 * Declare a variable playerName
 */
let playerName = "Pikachu";

//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................

/*
 * Now, let's display our pokemon level !
 *
 * Define a playerLevel int variable
 */
let playerLevel = 20.0 *. 1.5;

//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................

/*
 * We need to display a start message now 🙈
 *
 * Please define getInitialBattleMessage with following signature ->
 *  (enemyName: string, isEnemyEvil: boolean): string
 */
let getInitialBattleMessage = (enemyName, isEnemyEvil) => {
  let enemyName =
    if (isEnemyEvil) {
      "Evil " ++ enemyName;
    } else {
      enemyName;
    };

  "A wild " ++ enemyName ++ " appeared !";
};

//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................

/*
 * How come we can not choose an attack ?
 * We need to implement a way to move our cursor 🤔
 *
 * Our possibilities are: Up, Right, Down and Left
 *
 * Implement getNextCursorPosition function with following signature
 *  (currentAttackIndex: int, moveType: 'variant): int
 */

type movement =
  | Up
  | Right
  | Down
  | Left;

let getNextCursorPosition = (currentAttackIndex, moveType) => {
  switch (moveType) {
  | Up => currentAttackIndex + 2
  | Right => currentAttackIndex + 1
  | Down => currentAttackIndex - 2
  | Left => currentAttackIndex - 1
  };
};

//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................

/*
 * Whaaat, attacks do no damage ?!!
 * It's time to calculate how damage works 💪
 * > Well, sometimes the attack misses you know ;)
 *
 * Define getHpAfterDamage function with following signature ->
 *  (~currentHp: int, ~damage: option<int>): number
 */
let getHpAfterDamage = (~currentHp, ~damage) => {
  switch (damage) {
  | Some(damage) => currentHp - damage
  | None => currentHp
  };
};

//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................
//............................

/*
 * Pokémon games are so much fun, and have so many different pokémons
 * We need to account for little pokémon types that we have defined
 * Supported types are Electric ⚡️, Water 💦, Psychic 💆‍♀️ and Normal 💪
 *
 * Please define getDamageMultiplier function with following signature
 *  (attackType: pokemonType, defenceType: pokemonType): float
 */
type pokemonType =
  | Electric
  | Water
  | Psychic
  | Normal

let getDamageMultiplier = (attackType, defenceType) => {
  let sametype = attackType == defenceType;

  switch (attackType, defenceType, sametype) {
    | (Electric, Water, _) => 2.0
    | (_, _, true) => 0.5
    | (_, _, false) => 1.0
  }
}
