import React from 'react';
import FetchData from './FetchData.js';
import FindPatient from './FindPatient.js'

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