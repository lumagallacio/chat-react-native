import React from 'react';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig.js';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
      <Routes />
    </>
  );
}
