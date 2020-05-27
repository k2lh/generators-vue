<template>
  <div class="page-header">
    <div class="container">
      <h1 id="page-title" class="page-header__title">Meet the Community</h1>
      <nav href="#" class="bx--tabs page-tabs" role="navigation">
        <ul role="tablist" class="bx--tabs__nav bx--tabs__nav--hidden">
          <li class="bx--tabs__nav-item" role="presentation">
            <router-link to="/community" class="bx--tabs__nav-link" role="tab">About</router-link>
          </li>
          <li class="bx--tabs__nav-item" role="presentation">
            <router-link to="/advocates" class="bx--tabs__nav-link" role="tab">Data Advocates</router-link>
          </li>
          <li class="bx--tabs__nav-item" role="presentation">
            <router-link to="/events" class="bx--tabs__nav-link" role="tab">Events</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageheadProjects'
};
</script>

<style scoped>

</style>
