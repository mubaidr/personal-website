<template>
  <div id="app">
    <section-header></section-header>
    <div class="container body">
      <section-about :id="getSectionId(sections.about.heading)"></section-about>
      <section-skills :id="getSectionId(sections.skills.heading)"></section-skills>
      <!-- <section-portfolio :id="getSectionId(sections.portfolio.heading)"></section-portfolio> -->
      <section-contact :id="getSectionId(sections.contact.heading)"></section-contact>
    </div>
    <section-footer></section-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import about from './components/sections/About.vue'
// import portfolio from './components/sections/Portfolio.vue'
import skills from './components/sections/Skills.vue'
import contact from './components/sections/Contact.vue'

export default {
  name: 'app',
  components: {
    'section-header': Header,
    'section-footer': Footer,
    'section-about': about,
    'section-skills': skills,
    // 'section-portfolio': portfolio,
    'section-contact': contact
  },
  data () {
    return {
      scrollButtonVisible: false
    }
  },
  computed: {
    ...mapGetters(['sections'])
  },
  methods: {
    getSectionId (heading) {
      return `section-${heading.toLowerCase().replace(/ /g, '')}`
    }
  },
  created () {},
  mounted () {
    this.$nextTick(() => {
      window.setTimeout(() => {
        document.dispatchEvent(new Event('custom-post-render-event'))
      }, 2500)
    })
  }
}
</script>

<style>

</style>
