import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { Sidebar } from "./shared/sidebar";
import { Main } from "./pages/main";
import { Footer } from "./shared/footer";
import "./styles/tailwind.css";

library.add(fab);

function App() {
  return (
    <div className="App">
      {/* <div className="flex flex-row"> */}
      <Sidebar />
      <main className="py-20 px-16 lg:h-screen bg-lightgrey main lg:mb-10">
        <Main />
      </main>
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;
