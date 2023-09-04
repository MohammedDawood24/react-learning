import React, { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import ColorPallet from './components/ColorPallet';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  let systemDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  systemDark = systemDark ? 'dark' : 'light';

  const [mode, setMode] = useState(systemDark);
  const [alertPop, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    // setTimeout(() => {
    //   setAlert(null);
    // }, 1500);
  }

  if (mode === 'dark'){
    document.body.style.backgroundColor = '#000e1e';
  }else {
    document.body.style.backgroundColor = '#f3f3f3';
  }
  
  const toggleMode = (color) => {
    switch (color) {
      case 'red':
        setMode('red');
        document.body.style.backgroundColor = '#750000';debugger;
        showAlert("Red dark mode color changed successfully..!", 'success');
        break;
      case 'blue':
        setMode('blue');
        document.body.style.backgroundColor = '#15007c';
        showAlert("Blue dark mode color changed successfully..!", 'success');
        break;
      case 'green':
        setMode('green');
        document.body.style.backgroundColor = '#007910';
        showAlert("Green dark mode color changed successfully..!", 'success');
        break;
      case 'dark':
        setMode('dark');
        document.body.style.backgroundColor = '#000e1e';
        showAlert("Dark mode color changed successfully..!", 'success');
        break;
        break;
      case 'light':
        setMode('light');
        document.body.style.backgroundColor = '#000e1e';
        showAlert("Light mode changed successfully..!", 'success');
        break;

      default:
        
        break;
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-5">
        <Alerts alert={alertPop}/>
        <TextForm showAlert={showAlert} />
      </div>
      <ColorPallet mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;
