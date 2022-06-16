import React from 'react'

const Main = () => {
  const welcome = "Hello there"

  const styles = {
    color: 'lime',
    fontSize: '5em'
  }

  return (
    <h1 style={styles}>{welcome}</h1>
  );
}

export default Main;
