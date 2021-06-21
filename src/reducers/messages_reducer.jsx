export default function(state, action) {
    if (state === undefined) {
      return [];
    }
    switch (action.type) {
      case "SET_MESSAGES":
        return action.payload;
      case "SET_MESSAGES_FULFILLED":
          return action.payload;
      default:
        return state;
    }
  }