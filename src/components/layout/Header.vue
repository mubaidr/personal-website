<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li v-for="section in sections" :key="section.heading">
              <a href="#" @click.prevent.stop="goto(section.heading)">
                <i class="material-icons">{{section.icon}}</i>
                {{section.heading}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['sections'])
    },
    mounted () {
      this.$nextTick(() => {
        // Bootstrap navbar
        const classChildren = x =>
          document.getElementsByClassName(`navbar-${x}`)[0]

        classChildren('toggle').addEventListener(
          'click',
          () => {
            classChildren('collapse').classList.toggle('collapse')
          },
          false
        )
      })
    }
  }
</script>
<style>
  .navbar {
    border-radius: 0;
    margin-bottom: 0;
  }

  .navbar:not(.footer) {
    padding-top: 120px;
  }
</style>
