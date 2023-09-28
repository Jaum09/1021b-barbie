import React from 'react'
import './main.css'
import Header from './componentes/header/Header.tsx'
import Main from './componentes/main/Main.tsx'
import Footer from './componentes/footer/Footer.tsx'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>,
  },
  {
    path: "/noticia",
    element: 
    <>
    <Header/>
    <div className='content-main'>Notícias do Jão</div>
    <Footer/>
    </>,
  },
  {
    path: "/Sobre",
    element: 
    <>
    <Header/>
    <div  className='content-main'>Sobre o Jão</div>
    <Footer/>
    </>,
  },
  {
    path: "/contato",
    element: 
    <>
    <Header/>
    <div className='content-main'>Contato do Jão</div>
    <Footer/>
    </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)