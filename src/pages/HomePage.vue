<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="wrapper container">
    <div>
      <h2>Hey there,</h2>
      <h2>I'm Lorenzo <span style="color: #f38f00">Di Santo</span></h2>
      <h4 class="typing-demo">
        <span style="color: rgb(156, 0, 0)"> Full Stack Web Developer </span>
      </h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 4rem;
}
h4 {
  font-size: 2rem;
}
.typing-demo {
  width: 24ch;
  animation: typing 2s steps(24), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
