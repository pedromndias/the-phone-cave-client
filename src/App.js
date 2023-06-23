import { Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Phones from './pages/Phones';
import Error from "./pages/Error"
import NotFound from './pages/NotFound';
import SinglePhone from './components/SinglePhone';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Phones />}/>
        <Route path="/:phoneId" element={<SinglePhone />}/>

        <Route path="/error" element={<Error />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
