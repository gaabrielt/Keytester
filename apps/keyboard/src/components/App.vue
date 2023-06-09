<template>
  <div class="keyboard">
    <button
      v-for="keycode in keyscodes"
      @click="handleButtonClick(keycode)"
      style='font-size: 2rem;'
    >
      {{ keycode.text }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyscodes: [
        {text: "A", code: 65, location: 0},
        {text: "B", code: 66, location: 0},
        {text: "L Shift", code: 16, location: 1},
        {text: "R Shift", code: 16, location: 2}
      ]
    }
  },
  methods: {
    handleButtonClick({ text, code, location }) {
      const { altKey, ctrlKey, metaKey, shiftKey } = event

      const keydownEvent = {
        altKey,
        code,
        ctrlKey,
        key: text,
        location,
        metaKey,
        shiftKey,
      }

      const inputMessage = {
        type: 'userInput',
        input: keydownEvent
      }

      window.parent.postMessage(inputMessage)
    }
  }
}
</script>