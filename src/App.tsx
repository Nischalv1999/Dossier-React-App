import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LandingPage } from './Components/Pages/LandingPage/LandingPage';
import { Button } from './Components/Atoms/Button/Button';
import { PrimaryButtons } from './Components/Molecules/PrimaryButtons/PrimaryButtons';
import { LandingPageTemplate } from './Components/Templates/LandingPageTemplate/LandingPageTemplate';
import { Header } from './Components/Organisms/Header/Header';
import { SearchBar } from './Components/Atoms/SearchBar/SearchBar';

function App() {
  return (
    <div>
      {/* <LandingPageTemplate onClickSidePanelItem={function (flag: boolean): void {
      } }/> */}
<LandingPage/>
   </div>  
    
  );
}

export default App;
