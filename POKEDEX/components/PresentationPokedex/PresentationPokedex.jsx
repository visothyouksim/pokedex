import React from "react";
import TitlePresentation from "./TitlePresentation/TitlePresentation";
import PresentationOverview from "./PresentationOverview/PresentationOverview";
import PresentationFunction from "./PresentationFunction/PresentationFunction";
import PresentationNewsletter from "./PresentationNewsletter/PresentationNewsletter";

function PresentationPokedex() {
  return (
    <>
      <section>
        <TitlePresentation />
      </section>

      <section>
        <PresentationOverview />
      </section>

      <section>
        <PresentationFunction />
      </section>

      <section>
        <PresentationNewsletter />
      </section>
    </>
  );
}

export default PresentationPokedex;
