// add test

import React from 'react'
import PropTypes from 'prop-types'

const NoteItem = ({ topic }) => {
  return (
    <div>
      <h4>Note: {topic}</h4>
    </div>
  )
}

NoteItem.propTypes = {
  topic: PropTypes.string.isRequired
}

export default NoteItem
