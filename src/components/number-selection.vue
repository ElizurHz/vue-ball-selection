<template>
  <div class="number-selection-wrapper">
    <div class="selection">
      <h4 class="selection-title vertical-item">{{ title }}</h4>
      <div 
        v-for="(ball, index) in ballList" 
        :key="index"
        :class="{ 'lott-ball': true, 'vertical-item': true, selected: selectedBalls.indexOf(ball) >= 0 }"
        @click="clickBall(ball)"
      >
        {{ ball }}
      </div>
      <div class="selection-shorcut vertical-item">
        <!-- shortcut if you want to conveniently select multiple balls -->
        <div 
          :class="{ 
              'lott-shortcut-selection': true, 
              'vertical-item': true, 
              selected: selectedShortcut === item.title
            }"
          v-for="(item, index) in shortcuts"
          :key="index"
          @click="shortcutSelected(item.balls, item.title)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'numberSelection',
  props: {
    title: {
      type: String,
      required: true
    },
    ballList: {
      type: Array,
      required: true
    },
    ballShortcutSelection: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedBalls: [],
      selectedShortcut: '',
      shortcuts: []
    }
  },
  mounted() {
    this.shortcuts = Object.assign({}, this.ballShortcutSelection)
  },
  methods: {
    ...mapActions('ballSelection', [
      'selectBalls',
      'deleteBalls'
    ]),
    clickBall(ball) {
      if (this.selectedBalls.indexOf(ball) >= 0) {
        this.selectedBalls.splice(this.selectedBalls.indexOf(ball), 1)
      } else {
        this.selectedBalls = [...this.selectedBalls, ball]
        this.selectedBalls.sort()
      }
      this.selectBalls({
        title: this.title,
        balls: this.selectedBalls
      })
    },
    shortcutSelected(balls, title) {
      this.selectedBalls = balls
      this.shortcuts = Object.assign({}, this.ballShortcutSelection)
      // change by actual case
      // if (title === '清') {
      //   this.selectedShortcut = ''
      //   this.deleteBalls(this.title)
      // } else {
      //   this.selectedShortcut = title
      //   this.selectBalls({
      //     title: this.title, 
      //     balls: this.selectedBalls
      //   })
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '.number-selection';
</style>
