// reducer function
export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newItem = [...state.people, action.item]
    return {
      ...state,
      people: newItem,
      isModalOpen: true,
      modalContent: 'item added',
    }
  } else if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'No Value. Please add a value to submit.',
    }
  } else if (action.type === 'REMOVE_ITEM') {
    const newData = state.people.filter((name) => name.id != action.id)
    return {
      ...state,
      people: newData,
      modalContent: 'Item removed',
      isModalOpen: true,
    }
  } else if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    }
  }
  throw new Error('No matching action available.')
}
