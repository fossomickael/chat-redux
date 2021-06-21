// TODO: add and export your own actions


export const setMessages = () => {
    return {
      type: "SET_MESSAGES",
      async payload () {
        const url = "https://wagon-chat.herokuapp.com/586/messages"
        const response = await fetch(url);
        const messages = await response.json();
        return messages;
    
      }
    };
  }


export const createMessage =  (channel, author, content) => {
    return {
        type: "CREATE_MESSAGE",
        async payload () {
          const response = await postMessage();
          const message = await response.json();
          return message;
        }
      };
}

async function postMessage() {
    url = "https://api.github.com/users/fossomickael/repos"
    const body = { author, content };
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body) 
    };
    response =  await fetch(`url`, settings);
    const response = await fetch(url);
    return response;
  }