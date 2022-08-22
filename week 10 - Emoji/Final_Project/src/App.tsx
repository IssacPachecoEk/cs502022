import { Fragment,useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import '@mui/material/Typography';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';

import ScrollToTop from "react-scroll-to-top";
import Preloader from "./components/Pre";
import Navbar from "@/components/Navbar";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Fragment>
      <Notifications />
      <SW />
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <BrowserRouter>
      <ScrollToTop smooth color="black" />
        <Navbar />
        <Pages />
      </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
