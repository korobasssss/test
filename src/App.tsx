import React, {ReactElement} from 'react';
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MainPage} from "./pages/Main";
import {InnerFullHeightLayout} from "./base/components/InnerHeightLayout";


export default function App(): ReactElement {
  return (
    <InnerFullHeightLayout>
      <BrowserRouter /*basename={window._env_.REACT_APP_PUBLIC_URL}*/ >
        <Routes>
          <Route path="*" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </InnerFullHeightLayout>

  );
}
