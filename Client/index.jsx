import { IndexCss, MainJsx, Title } from "../lib/framework-utils.jsx";

export default async function Index({ children }) {
  //await fakeApi();

  return (
    <html lang="en">
      <head>
        <IndexCss isDev={globalThis.dev} />
        <MainJsx isDev={globalThis.dev} />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Title>App Name</Title>
        {/* here we should automatically load css of the components needed in the page,
         how wo we know which are needed? It will be the server to tell us? like 
         /about will tell us to load about.css and about.js and also the css of the components used in about.jsx?
         /about.css could be a dynamic route that returns the css of the components used in about.jsx
         /every component automatically have his css inline
         we can't know which components are used in about.jsx so we assume whatever css file is in the same folder of about.jsx is used in about.jsx
          so we load about.css and about.js and also the css of the components used in about.jsx (every component is directly loaded with its css file)
          this should work both on the server and on the client because we load the css of the components used in about.jsx on the client too
        */}
      </head>
      <body>
        <router>
          <route path={globalThis.location.pathname}>{children}</route>
        </router>
      </body>
    </html>
  );
}

const fakeApi = async () => {
  return new Promise(resolve => setTimeout(resolve, 4000));
};
