import React from 'react'
import Comment from './Comment'

const Main = () => {
  const welcome = "Hello there"

  const styles = {
    color: 'lime',
    fontSize: '5em'
  }

  return (
    <div>
      <h1 style={styles}>{welcome}</h1>
      <Comment text="DummyCorp will transform the aptitude of co-branded versioning to integrate. Our technology takes the best features of Flash and CSS. What does it really mean to syndicate 'magnetically'?" />
    </div>
  );
}

export default Main;
