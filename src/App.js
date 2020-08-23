import React from 'react';
import AuthContextProvider from './contexts/AuthContext';
import RootContainer from './containers/RootContainer';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <RootContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
