import { model } from '~/index';

export function createApp() {
  const initialAppState: model.State = {
    counter: 1,
    multiplier: 2,
    list: [
      {
        title: 'Hello',
        order: 1,
      },
      {
        title: 'How are you',
        order: 1,
      },
      {
        title: 'I am so cool',
        order: 1,
      },
    ],
  };
  return initialAppState;
}
