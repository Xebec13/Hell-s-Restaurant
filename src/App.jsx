import "./App.css";
import "./index.css";
import { Nav, Header, Specials } from "./components";

const App = () => (
  <>
    <div className="header-gradient-bg">
      <Nav />
      <Header/>
    </div>
    <Specials/>
    
  </>
);
export default App;
