<template>
  <div>
    <nav class="navbar navbar-default footer">
      <div class="container-fluid">
        <ul class="nav navbar-nav navbar-right">
          <li v-for="section in sections" :key="section.heading">
            <a href="#" @click.prevent.stop="goto(section.heading)">
              <i class="material-icons">{{section.icon}}</i>
              {{section.heading}}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters(['sections'])
    }
  }
</script>
<style>
  .navbar.footer {
    padding-bottom: 75px;
  }

  .navbar.footer .nav {
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
