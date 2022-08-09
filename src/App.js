import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFixtures } from './slices/fixturesSlice';

function App() {
  const path = useSelector((state) => state.path);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFixtures());
  }, [dispatch]);


  return (
    <>
      <Header />
      <main>
        {path == '' && <Home />}
        {path == '/about' && <About />}
      </main>
      <Footer />

    </>

  );
}

export default App;