import "./App.css";
import "./index.css";
import {
  Nav,
  Header,
  Specials,
  Divider,
  Offer,
  Reservation,
} from "./components";

import divider1 from "../src/assets/image-divider1.png";

const App = () => (
  <>
    <div className="header-gradient-bg">
      <Nav />
      <Header />
    </div>
    <Specials />
    <Divider imageSrc={divider1} altText="Divider Image" />
    <Offer />
    <Reservation />
  </>
);
export default App;
