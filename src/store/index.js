import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    messages: {},
    chats: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addChat(state, chatName) {
      const chatId = `chat${Date.now()}`;
      state.chats.push({
        name: chatName,
        id: chatId,
      });
      state.messages = {
        ...state.messages,
        [chatId]: [],
      };
    },
    removeChat(state, chatId) {
      state.chats = state.chats.filter(({ id }) => id !== chatId);
      delete state.messages[chatId];
    },
    addMessage(state, { text, author, chatId }) {
      state.messages[chatId].push({ text, author, id: Date.now() });
    },
    removeMessage(state, { messageId, chatId }) {
      state.messages[chatId] = state.messages[chatId].filter(
        ({ id }) => id !== messageId
      );
    },
  },
});
