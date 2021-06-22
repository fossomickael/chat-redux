// TODO: add and export your own actions


export const setMessages = (channel) => {
    console.log(channel);
    return {
      type: "SET_MESSAGES",
      async payload () {
       
        const url = `https://wagon-chat.herokuapp.com/${channel}/messages`
        const response = await fetch(url);
        const messages = await response.json();
        return  messages["messages"];
      }
    };
  }

export const createMessage =  (channel, author, content) => {
    return {
        type: "CREATE_MESSAGE",
        async payload () {
          const response = await postMessage(channel, author, content);
          const message = await response.json();
          return message;
        }
    };
}

async function postMessage(channel, author, content) {
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`
    const body = { author, content };
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body) 
    };
    const response = await fetch(url, settings);
    
    return response;
  }