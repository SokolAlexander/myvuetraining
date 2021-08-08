<template>
  <div class="add-chat">
    <form @submit.prevent="addChat">
      <input v-model="chatName" />
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    chatName: "",
  }),
  methods: {
    addChat() {
      console.log('addchat component', this.chatName);
      this.$emit("addchat", this.chatName);
      this.chatName = "";
    },
  },
};
</script>
