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
      <Comment text="A company that can envisioneer fiercely will (at some indefinite point of time in the future) be able to utilize courageously. Is DummyCorp more important for something to be seamless or to be cross-platform?" />
      <Comment text="Our technology takes the best features of ASP and ActionScript. DummyCorp will optimize the industry jargon 'seamless'. What does the buzzword 'e-services' really mean?" />
    </div>
  );
}

export default Main;
