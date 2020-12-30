export function addPicture(id, imageLink, description) {
    return {
      type: 'ADD_PICTURE',
      id,
      imageLink,
      description
    }
  }

export function removePicture(index) {
  return {
    type: 'REMOVE_PICTURE',
    index: index
  }
}