import Grid from "../../Components/Shapes/Grid.jsx";
import Layout from "../../Components/Tools/Layout.jsx";
import Transform from "../../Components/Tools/Transform.jsx";
window.retroCompatible = false;

//if component doens't have children render logo

function Home() {

  const logo = (
    <path d="M4640 8517L6187 10645H9281L6187 6387L7734 4259L12375 10646H15469L7734 0L0 10645H3094L4640 8517Z" />  
  );
  return (
    <Layout cover>
          <Grid width={20} height={10} spacing={10000} >
          <Transform x={-9000} animated loop>
            {logo}
            </Transform>
            <Transform x={9000} animated loop>
              
            <Transform y={17500} scale={0.5}>
              {logo}
            </Transform>
            </Transform>
          </Grid>
    </Layout>
  );
}

export default Home;
