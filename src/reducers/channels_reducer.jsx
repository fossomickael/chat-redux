const channels_reducer = (state, action) => {
    if (state === undefined) {
      return [];
    }
    switch (action.type) {
      case "SET_CHANNELS":
        return action.payload;
      default:
        return state;
    }
  }

export default channels_reducer;