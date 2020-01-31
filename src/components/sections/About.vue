<template>
  <div>
    <h1>{{info.name}}</h1>
    <div class="small">{{info.title}}
      <br/>
      <span class="text-muted">{{info.subTitle}}</span>
    </div>
    <div class="text-center">
      <ul class="nav navbar-nav navbar-center">
        <li v-for="profile in info.profiles" :key="profile.title">
          <a :href="profile.url" target="_blank">
            <i class="material-icons">{{profile.icon}}</i>
            {{profile.title}}
          </a>
        </li>
      </ul>
    </div>
    <div class="well">
      <p v-html="sections.about.summary"></p>
      <p v-html="sections.about.objective"></p>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters(['sections', 'info'])
    }
  }
</script>
<style>
  .navbar-center {
    float: none;
    margin-bottom: 10px;
  }

  .navbar-center li {
    display: inline-block;
    float: none;
  }
</style>
