<template>
  <div class="root">
    <router-link :to="`/chats/${chat.id}`">
      <div :class="{ 'chat-item': true, 'chat-item-active': active }">
        <span>
          {{ chat.name }}
        </span>
      </div>
    </router-link>
    <div class="chat-item-rm" @click="removeChat">&times;</div>
  </div>
</template>

<script>
export default {
  props: { chat: { type: Object, required: true }, active: Boolean },
  methods: {
    removeChat() {
      this.$emit("removechat", this.chat.id);
    },
  },
};
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.chat-item {
  flex: 1;
  border: 1px solid grey;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.chat-item:hover {
  background-color: lightgray;
}

.chat-item:active {
  background-color: rgb(177, 172, 172);
  transform: scale(0.96);
}
.chat-item-active {
  background-color: lightblue;
}

.chat-item-rm {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid red;
  background-color: red;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.chat-item-rm:active {
  transform: scale(0.9);
}
</style>
