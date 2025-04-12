import Main from "./components/main";

function App() {
  return (
    <>
      <div
        className="text-3xl text-amber-50"
        style={{
          position: "relative",
          zIndex: 998,
        }}
      >
        <Main />
      </div>
    </>
  );
}

export default App;
