import React from 'react'

const Welcome = () => {
  const welcome = "Hello there"

  const styles = {
    color: 'lime',
    fontSize: '5em'
  }

  return (
    <div>
      <h1 style={styles}>{welcome}</h1>
    </div>
  );
}

export default Welcome;
