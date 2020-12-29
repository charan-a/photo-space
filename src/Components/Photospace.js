import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

function Photospace(props) {
    return (
      <div>
        <button className='addIcon'>  </button>
        <div className='photoGrid'>
          {props.posts.map((post, index) => (
            <Photo
              key={index}
              post={post}
              onRemovePhoto={props.onRemovePhoto}
            />
          ))}
        </div>
      </div>
    );
            
}

Photospace.propTypes ={
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photospace
