<template>
  <div class="chat-list">
    <Chat
      v-for="chat in $store.state.chats"
      v-bind:key="chat.id"
      v-bind:chat="chat"
      :active="chat.id === $route.params.chatId"
      v-on:removechat="removeChat"
    />
    <AddChat v-on:addchat="addChat" />
  </div>
</template>

<script>
import Chat from "./Chat";
import AddChat from "./AddChat";

export default {
  components: {
    Chat,
    AddChat,
  },
  methods: {
    addChat(chatName) {
      this.$store.commit('addChat', chatName);

      const chats = this.$store.state.chats;
      const lastId = chats[chats.length - 1].id;

      this.$router.push(`/chats/${lastId}`);
    },
    removeChat(chatId) {
      this.$store.commit('removeChat', chatId);

      if (chatId === this.$route.params.chatId) {
        this.$router.push(
          this.$store.state.chats[0] ? `/chats/${this.$store.state.chats[0].id}` : "/chats"
        );
      }
    },
  },
};
</script>
