import React from "react";
import TitlePokemonStarters from "./TitlePokemonStarters/TitlePokemonStarters";
import StartersFirstGen from "./StartersFirstGen/StartersFirstGen";
import StartersSecondGen from "./StartersSecondGen/StartersSecondGen";
import StartersThirdGen from "./StartersThirdGen/StartersThirdGen";

function PokemonStarters() {
  return (
    <>
      <section className="my-5">
        <TitlePokemonStarters />
      </section>

      <section className="my-5">
        <StartersFirstGen />
      </section>

      <section className="my-5">
        <StartersSecondGen />
      </section>

      <section className="my-5">
        <StartersThirdGen />
      </section>
    </>
  );
}

export default PokemonStarters;
