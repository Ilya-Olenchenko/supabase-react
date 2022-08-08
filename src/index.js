import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AceEditor
      mode="css"
      theme="textmate"
      name="UNIQUE_ID_OF_DIV"
      showGutter={false}
      fontSize={20}
      setReadOnly={true}
      value={`.home{
      color: white;
    }`}
      highlightActiveLine={false}
      editorProps={{ $blockScrolling: true }}
    /> */}

    <App />
  </React.StrictMode>
);

reportWebVitals();
