import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main class="App-main">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        <row>
          <container class="container1">
            <div class="div1">
              <div class="div2">
                <h1>Meu Titulo</h1>
              </div>
            </div>
            <div class="div1">
              <div class="div2">
                <h1>Meu Titulo</h1>
              </div>
            </div>
            <div class="div1">
              <div class="div2">
                <h1>Meu Titulo</h1>
              </div>
            </div>
            <div class="div1">
              <div class="div2">
                <h1>Meu Titulo</h1>
              </div>
              <div class="div3">
                <p>
                  Meu texto
                </p>
              </div>
            </div>
          </container>
        </row>
      </main>
      <footer class="App-footer">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
