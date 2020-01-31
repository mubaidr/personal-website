<template>
  <div>
    <h1>
      {{sections.skills.heading}}
    </h1>
    <div class="certifications">
      <div>
        <span class="label-custom"
              v-for="skill in skills"
              :key="skill.title"
              v-html="skill.title"></span>
      </div>
      <!--
      <br/>
      <a href="https://www.freecodecamp.org/mubaidr/front-end-certification" title="Verify this certification" target="_blank">
        <img src="/static/docs/front-end.jpg" />
      </a>
      <a href="https://www.freecodecamp.org/mubaidr/back-end-certification" title="Verify this certification" target="_blank">
        <img src="/static/docs/back-end.jpg" />
      </a> -->
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
    ...mapGetters(['sections', 'skills'])
  }
}
</script>
<style>
.label-custom {
  display: inline-block;
  margin: 0 5px 5px 0;
  font-size: 0.75em;
  font-weight: lighter;
  padding: 0.25em 0.5em;
  color: #222;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.certifications {
  width: 100%;
  text-align: center;
}

.certifications a {
  display: inline-block;
  max-width: 320px;
}

.certifications img {
  width: 100%;
  height: auto;
  margin-bottom: 21px;
  -webkit-filter: grayscale(0.5);
  filter: grayscale(0.5);
  transition: filter 0.5s ease-out;
  border-radius: 4px;
}

.certifications img:hover {
  filter: grayscale(0);
  -webkit-filter: grayscale(0);
}

/* Extra Small Devices, Phones */
@media only screen and (max-width: 480px) {
  .certifications a {
    max-width: 100%;
  }
}
</style>
