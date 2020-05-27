<template >
  <div id="home" class="page-body">
    <div class="container site-unbox">

      <p>The generators are now updated with some nifty features. The population generator is still getting tweaked, but soon it'll have an option to give the country a name,
        and reopen the combination with values. The vocabulary generator has this feature already in place.
      </p>
      <p>It's an open question as to whether the other generators need to have selections saved, but if you pester me on <a href="https://twitter.com/afishtrap">twitter</a>, I might go ahead and re-code it for that.
      (Note: I'm not that active on twitter thanks to heavy workload the past few months, but I still pay attention to it.) If you can think of other generators you might find handing for RPGs or writing, just let me know.</p>

      <p>Re-written in Vuejs. No PHP was harmed in the making of this site.
      Build in Atom, on a Mac. Tested in Chrome, Firefox, Safari, and Opera. If you're using IE, you're on your own. Get a real browser.</p>

    </div>

  </div>
</template>

<script>

export default {
  name: 'home',
  data: () => ({
    isActive: true
  })
};

</script>
