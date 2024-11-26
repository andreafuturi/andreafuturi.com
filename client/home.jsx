import Counter from "./components/counter.jsx";

function Home() {
  return (
    <home>
      <h1>Home</h1>
      <Counter start={20} />
      <upload />
    </home>
  );
}
export default Home;
