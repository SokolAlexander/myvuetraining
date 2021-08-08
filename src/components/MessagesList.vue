<template>
  <div
    class="msg-list"
    v-if="$store.state.messages[$route.params.chatId].length"
  >
    <Message
      v-for="msg of $store.state.messages[$route.params.chatId]"
      v-bind:msg="msg"
      v-bind:key="msg.id"
      v-on:delete-msg="deleteMsg"
    />
  </div>
  <div v-else class="msg-list">
    No messages yet
  </div>
</template>

<script>
import Message from "./Message";

export default {
  components: {
    Message,
  },
  methods: {
    deleteMsg(idToDelete) {
      this.$store.commit("removeMessage", {
        messageId: idToDelete,
        chatId: this.$route.params.chatId,
      });
    },
  },
};
</script>

<style scoped>
.msg-list {
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 2px solid lightblue;
  border-radius: 10px;
  padding: 20px;
  margin: auto;
}
</style>
