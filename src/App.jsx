import "./App.css";

function App({ secretKey }) {
  return (
    <div className="App">
      росія - країна <span className="animate">терорист</span>
      <div style={{ display: "none" }}>{secretKey}</div>
    </div>
  );
}

export default App;
