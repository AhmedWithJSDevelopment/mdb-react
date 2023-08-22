import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from './App';
import { AppProvider } from './context';
import './index.css';
import Carousel from './Carousel';
import Modal from './Modal';
import Header from './Header';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBIcon } from 'mdb-react-ui-kit';
<link href="https://cdn.jsdelivr.net/npm/mdbreact@5.0.3/dist/css/mdb.min.css" rel="stylesheet" />
// import './Testimonal.css';
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { social, links } from './data';
import Error from './Error';
import Collapse from './Collapse';
import FooterTwo from './FooterTow';
// import {

//   MDBIcon,
// } from 'mdb-react-ui-kit';

links.map((link) => {
  const { id, url, text, icon } = link;
}
  )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       

   
    {/* <BrowserRouter>
      <AppProvider>
      <App />
      </AppProvider> */}

<BrowserRouter>
 <Routes>
        <Route path='/' element={ <AppProvider>
      <Product />
        </AppProvider>}
        >
          <Route index element={<div><Carousel /></div>} />
          <Route path='team' element={<Modal  />} />

          <Route path='projects' element={<Collapse />}/>
          <Route path='calendar' element={ <div><Header /><FooterTwo /></div>}/>
          <Route path='documents' element={<Carousel/>}/>
          <Route path='Messenger' element={<Carousel/>}/>
          
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>


    </BrowserRouter>
  </React.StrictMode>
);
