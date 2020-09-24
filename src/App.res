module PokemonBattle = {
  @bs.module("./components/index.tsx") @react.component external make: React.element = "default"
}

@react.component
let make = () => {
  <PokemonBattle />
}
