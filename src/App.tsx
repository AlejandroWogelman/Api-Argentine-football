import "./App.css";
import { Header } from "./pages/Header";
import { LanguageProvider } from "./context/LanguageContext";
import { Description } from "./components/description/Description";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Header />

        <div className="image1"></div>

        <main>
          <Description />
        </main>
        <div className="image2"></div>
      </LanguageProvider>
    </div>
  );
}

export default App;
