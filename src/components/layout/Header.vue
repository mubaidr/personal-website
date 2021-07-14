<template>
  <div class="hero is-large is-link">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 is-uppercase">
          {{ info.name }}
        </h1>
        <h2
          class="subtitle is-2"
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
            class="has-text-link-disable"
            rel="noreferrer"
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
