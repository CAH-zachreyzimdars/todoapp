import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const renderFunc = () => 
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );


  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
// import registerServiceWorker from './registerServiceWorker';
// import { registerApplication, start } from 'single-spa';

// registerApplication(
//   'test', // Name of this single-spa application
//   () => loadingFn(), // Our loading function
//   () => true, // Our activity function
// );

// function loadingFn() {
//   // Make sure the resolved value of the promise is an object!
//   return System.import('test');
// }

export function mount(props) {
  return Promise.resolve().then(() => {
    // Do framework UI rendering here
    renderFunc();
    console.log('mounted!');
  });
}

export function unmount(props) {
  return Promise.resolve().then(() => {
    // Do framework UI unrendering here
    console.log('unmounted!');
  });
}

// start();
// registerServiceWorker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
