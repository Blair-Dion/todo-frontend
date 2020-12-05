const rootReducer = (state, action) => {
  if (action.type === "SET_USER_INFO") {
    return {
      ...state,
      userInfo: action.payload,
    }
  } else if (action.type === "SET_INITIAL_DATA") {
    return {
      ...state,
      initialData: action.payload,
    }
  } else if (action.type === "ADD_CARD") {
    const { initialData } = state;
    const { listId, newCardInfo } = action.payload;
  
    const lists = [...initialData.lists];
    const list = lists[listId];
    lists[listId] = { ...list, cards: [newCardInfo].concat(list.cards) }
    return {
      ...state,
      initialData: { ...initialData, lists }
    }
  } else if (action.type === "DELETE_CARD") {
    const { initialData } = state;
    const { listId, cardId } = action.payload;

    const lists = [...initialData.lists];
    const list = lists[listId]
    lists[listId] = { ...list, cards: list.cards.filter((i) => i.id !== cardId) }

    return {
      ...state,
      initialData: { ...initialData, lists }
    }
  }
  console.log({state, action})
  // throw new Error();
  return state;
};

export default rootReducer;