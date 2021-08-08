<template>
  <div
    v-bind:class="{
      'msg-item': true,
      'msg-item-me': isUserMessage,
    }"
  >
    <div
      v-if="isUserMessage"
      class="msg-item-rm"
      @click="$emit('delete-msg', msg.id)"
    >
      &times;
    </div>
    <div class="msg-item-content">
      <span class="msg-item-author">{{ msg.author }}</span>
      <span class="msg-item-text">{{ msg.text }}</span>
    </div>
  </div>
</template>

<script>
import { AUTHORS } from '../utils/constants';

export default {
  props: { msg: { type: Object, required: true } },
  computed: {
    isUserMessage() {
      return this.msg.author === AUTHORS.me
    }
  }
};
</script>

<style scoped>
.msg-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid darkgray;
  padding: 5px;
  margin: 10px 0;
  border-radius: 3px;
}

.msg-item-content {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.msg-item-author {
  font-size: smaller;
}

.msg-item-me .msg-item-content {
  align-items: flex-end;
}

.msg-item-rm {
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

.msg-item-rm:active {
  transform: scale(0.9);
}
</style>
