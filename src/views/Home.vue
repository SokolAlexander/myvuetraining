<template>
  <div>
    <h2>Home page</h2>
    <router-link to="/chats">Chats</router-link>
    <div>
      Counter: {{ $store.state.count }}
      <button @click="$store.commit('increment')">Increment</button>
    </div>
  </div>
</template>