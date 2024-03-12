import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CreateContact from "./pages/CreateContact";
// import Login from "./pages/Login";
import AllContacts from "./pages/AllContacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/addContact" element={<CreateContact />} />
          <Route path="/contacts" element={<AllContacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
