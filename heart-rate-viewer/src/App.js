import React from 'react';
import FindPatient from './FindPatient.js';
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