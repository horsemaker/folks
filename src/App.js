import { ScrollToTop } from "./frontend/components";
import { Main } from "./frontend/layouts";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Main />
      </ScrollToTop>
    </div>
  );
}

export default App;
