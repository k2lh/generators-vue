<template>
  <div id="app">

    <global-header></global-header>
    <router-view></router-view>
    <global-footer></global-footer>

  </div>
</template>

<script>
import globalHeader from '@/components/global-header/global-header'
import globalFooter from '@/components/global-footer/global-footer'

export default {
  name: 'app',
  components: {
    globalHeader,
    globalFooter
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    updateComponent(ddItem) {
      this.activePrototype = ddItem.value;
    },
  }
};
</script>

<style>
@import "./assets/normalize.css";
@import "./assets/skeleton.css";
@import "./assets/main.css";
</style>
