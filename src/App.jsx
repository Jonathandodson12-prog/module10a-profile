import React from 'react';
import Profile from './Profile';

function App() {
  return (
    <div>
      <h1>Musician Spotlight</h1>
      <Profile
        name="Adele"
        occupation="Singer & Songwriter"
        funFact="Adele once held the record for longest-charting album by a female artist on the Billboard 200."
      />
    </div>
  );
}

export default App;
