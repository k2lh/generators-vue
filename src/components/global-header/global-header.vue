<template>
    <header class="global-header" role="banner">
      <global-navigation></global-navigation>
    </header>
</template>

<script>
import globalNavigation from './global-navigation';

export default {
  name: 'global-header',
  components: {
    globalNavigation
  }
}
</script>
