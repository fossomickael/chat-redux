export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';

export const selectChannel = (channel) => {
    return {
      type: CHANNEL_SELECTED,
      payload: channel
    };
  }
