import React from 'react';
import FetchData from './FetchData.js';

class App extends React.Component {
  render() {
    return (
      <div>
		<FindPatient />
		<FetchData />
      </div>
    );
  }
}

export default App;