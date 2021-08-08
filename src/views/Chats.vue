<template>
  <div>
    <h2>Chats</h2>
    <router-link to="/">Home</router-link>
    <hr />
    <div class="content">
      <ChatList />
      <div v-if="$route.params.chatId && selectedChat" class="msg-field">
        <MessagesList />
        <Form />
      </div>
      <div v-else-if="$route.params.chatId" class="msg-field">
        <h4>No such chat</h4>
        <p>Please select existing chat</p>
      </div>
      <div v-else class="msg-field">
        <h4>No chat selected</h4>
        <p>Please select a chat to start messaging</p>
      </div>
    </div>
  </div>
</template>

<script>
import MessagesList from "../components/MessagesList";
import Form from "../components/Form";
import ChatList from "../components/ChatList";
import { AUTHORS } from "../utils/constants";

export default {
  name: "App",
  components: {
    MessagesList,
    Form,
    ChatList,
  },
  computed: {
    msgLength() {
      return this.$store.state.messages[this.$route.params.chatId]?.length || 0;
    },
    selectedChat() {
      return this.$store.state.chats.find(
        ({ id }) => `${id}` === `${this.$route.params.chatId}`
      );
    },
  },
  methods: {
    botResponse() {
      const { chatId } = this.$route.params;
      setTimeout(() => {
        this.$store.commit("addMessage", {
          text: "i am bot",
          author: AUTHORS.bot,
          chatId,
        });
      }, 2500);
    },
  },
  watch: {
    msgLength(current, prev) {
      if (!this.$route.params.chatId || !this.selectedChat) {
        return;
      }
      const currentMsgs = this.$store.state.messages[this.$route.params.chatId];
      if (
        currentMsgs.length &&
        current > prev &&
        currentMsgs[currentMsgs.length - 1].author === AUTHORS.me
      ) {
        this.botResponse();
      }
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
}
.msg-field {
  flex: 1;
}
</style>
