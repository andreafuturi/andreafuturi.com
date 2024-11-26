import { ClientOnly } from "../lib/framework-utils.jsx";
import withHydration from "../lib/withHydration.jsx";

function About() {
  return (
    <>
      Ciao, from
      <h1>About</h1>
    </>
  );
}

export default withHydration(About);
