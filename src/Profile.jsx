import React, { useState } from 'react';

function Profile({ name, occupation, funFact }) {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', margin: '20px auto' }}>
      <h2>{name}</h2>
      <h4>{occupation}</h4>
      <button onClick={toggleDetail}>
        {showDetail ? 'Hide Fun Fact' : 'Show Fun Fact'}
      </button>
      {showDetail && <p>{funFact}</p>}
    </div>
  );
}

export default Profile;
