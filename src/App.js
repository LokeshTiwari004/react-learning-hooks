import './App.css';
import EffectTwo from './Components/EffectTwo';
import EffectOne from './Components/EffectOne';
import TestOne from './Components/TestOne';
import { useState } from 'react';
import StateFour from './Components/StateFour';
import StateThree from './Components/StateThree';
import StateTwo from './Components/StateTwo';
import StateOne from "./Components/StateOne"
import TestTwoParent from './Components/TestTwoParent';
import TestTwoChild from './Components/TestTwoChild';
import EffectThree from './Components/EffectThree';
import EffectFourParent from './Components/EffectFourParent';

function App() {
  return (
    <div className="App">
      {/* <StateOne /> */}
      {/* <StateTwo /> */}
      {/* <StateThree /> */}
      {/* <StateFour /> */}

      {/* <TestOne /> */}
      {/* <TestTwoChild /> */}
      {/* <TestTwoParent /> */}

      {/* <EffectOne /> */}
      {/* <EffectTwo /> */}
      {/* <EffectThree /> */}
      <EffectFourParent />
    </div>
  );
}

export default App;
