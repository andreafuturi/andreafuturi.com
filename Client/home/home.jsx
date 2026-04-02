import Layout from "../components/tools/Layout.jsx";
import Grid from "../components/shapes/Grid.jsx";
import Transform, { Morph } from "../components/tools/Transform.jsx";
import withHydration from "../../lib/withHydration.jsx";
import HelicalSpiral from "../components/shapes/HelicalSpiral.jsx";
import Mirror from "../components/shapes/Mirror.jsx";
import Atom from "../components/Atom.jsx";
globalThis.retroCompatible = false;

//if component doens't have children render logo

function Home() {
  const logo = <path d="M4640 8517L6187 10645H9281L6187 6387L7734 4259L12375 10646H15469L7734 0L0 10645H3094L4640 8517Z" />;
  const cahoticSpiral = <HelicalSpiral
  simmetries={2}
  angleStep={60}
  radiusStep={18000}
  evenOddHorizontalFlip={true}
  r={8000}
>
  <Grid width={5} height={5} spacing={10000}>
    <Transform scale={0.1}>
      {logo}
    </Transform>
  </Grid>
</HelicalSpiral>
const orderedSpiral = <HelicalSpiral
  simmetries={2}
  angleStep={60}
  radiusStep={10}
  reverse={true}
  r={80}
  evenOddHorizontalFlip={true}
>
  <Grid width={5} height={5} spacing={10000}>
    <Transform scale={0.04}>
      {logo}
    </Transform>
  </Grid>
</HelicalSpiral>
  return (
    <Layout cover withLight={true}>
      <Morph from={cahoticSpiral}
        to={orderedSpiral}
        mass={0.3}
        tension={280}
        friction={80}
      />
      <Morph from={<Transform scale={0.01} x={22600} y={20600}>{logo}</Transform>}
        to={<Transform scale={4} x={22600} y={28600}>{logo}</Transform>}
        mass={0.3}
        tension={280}
        friction={80}
      />
      
    </Layout>

  );
}

export default withHydration(Home);
