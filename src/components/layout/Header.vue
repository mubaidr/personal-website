<template>
  <div class="hero is-large is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 is-uppercase has-text-primary">
          {{ info.name }}
        </h1>
        <h2
          class="subtitle is-4 has-text-weight-light is-uppercase has-text-primary"
        >
          {{ info.title }}
        </h2>

        <br />

        <div>
          <a
            v-for="profile in info.profiles"
            :key="profile.title"
            :href="profile.url"
            target="_blank"
            class="has-text-link"
          >
            {{ profile.icon }} {{ profile.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['info']),
  },
}
</script>

<style></style>
