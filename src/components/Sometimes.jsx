import React from 'react'

const Sometimes = (props) => {
  if (props.happy) {
    return (
      <p>
        Yay
      </p>
    )
  } else {
    return (
      <p>
        Boo
      </p>
    )
  }
}

export default Sometimes;
