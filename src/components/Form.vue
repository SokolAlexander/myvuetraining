<template>
  <form v-on:submit.prevent="handleSubmit">
    <input v-model="messageText" type="text" />
    <input type="submit" />
  </form>
</template>

<script>
import { AUTHORS } from "../utils/constants";
export default {
  data: () => ({
    messageText: "",
  }),
  methods: {
    handleSubmit() {
      this.$store.commit("addMessage", {
        text: this.messageText,
        author: AUTHORS.me,
        chatId: this.$route.params.chatId,
      });
      this.messageText = "";
    },
  },
};
</script>

<style scoped>
form {
  border: 2px solid lightblue;
  padding: 20px;
  margin: auto;
  margin-top: 20px;
  width: 50%;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
}

input[type="text"] {
  flex: 3;
  height: 20px;
}
input[type="submit"] {
  flex: 1;
}
</style>
