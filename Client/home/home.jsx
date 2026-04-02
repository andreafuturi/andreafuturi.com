import Layout from "../components/tools/Layout.jsx";
import Grid from "../components/shapes/Grid.jsx";
import Transform from "../components/tools/Transform.jsx";
import withHydration from "../../lib/withHydration.jsx";
import HelicalSpiral from "../components/shapes/HelicalSpiral.jsx";
import Mirror from "../components/shapes/Mirror.jsx";

globalThis.retroCompatible = false;

//if component doens't have children render logo

function Home() {
  const logo = <path d="M4640 8517L6187 10645H9281L6187 6387L7734 4259L12375 10646H15469L7734 0L0 10645H3094L4640 8517Z" />;
  return (
    <Layout cover withLight={true}>
        <HelicalSpiral
          simmetries={2}
          angleStep={60}
          radiusStep={18000}
          r={8000}
        >
          <Grid width={5} height={5} spacing={10000}>
            <Transform scale={0.1}>
              {logo}
            </Transform>
          </Grid>
        </HelicalSpiral>
    </Layout>
  );
}

export default withHydration(Home);
