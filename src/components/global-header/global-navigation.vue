<!-- eslint-disable vue/require-v-for-key, max-len -->
<template>
  <nav class="navbar" role="navigation">
      <ul class="navbar-list">
        <li class="navbar-item" role="presentation">
          <router-link to="/" class="navbar-link strong">{{title}}</router-link>
        </li>
        <li @click.capture="selectLink(link)" v-for="link in links" class="navbar-right navbar-item" :class="classes(link)" role="presentation">
          <router-link class="navbar-link link" :to="link.url">{{ link.label }}</router-link>
        </li>
      </ul>
  </nav>
</template>

<script>
import navigationLinks from './navigation-links'

export default {
  name: 'global-navigation',
  data: () => ({
    title: null,
  }),
  created() {
    if (this.$route.path === '/') {
      this.title = 'welcome';
    } else {
      var title = this.$route.path;
      this.title = title.split('/').join('') + ' generator';
    }
  },
  watch: {
    $route (to, from) {
      if (this.$route.path === '/') {
        this.title = 'welcome';
      } else {
        var title = this.$route.path;
        this.title = title.split('/').join('') + ' generator';
      }
    }
  },
  props: {
    links: {
      type: Array,
      default: () => navigationLinks
    }
  },
  methods: {
    selectLink (link) {
      this.$store.commit('setCurrentPage', link.id);
    },
    classes (link) {
      let isSelected = link.id === this.$store.getters.currentCategory
      let selectClass = `navbar-item-selected navbar-item-selected--${link.id}`
      let classes = {
        'is-active': isSelected
      }
      classes[selectClass] = isSelected
      return classes
    }
  }
}
</script>
