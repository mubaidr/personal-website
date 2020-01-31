<template>
  <div>
    <h1>
      {{sections.portfolio.heading}}
    </h1>
    <div class="portfolio-container">
      <div class="portfolio-item" v-for="item in portfolio" :key="item.title">
        <div>
          <img class="image" :alt="item.title" :src="'static/portfolio/' + item.name + '.png'" />
          <div class="meta">
            <p class="description">
              {{item.description}}
            </p>
            <div class="tags">
              <span class="label-custom light" v-for="skill in item.skills" :key="skill" v-html="skill"></span>
            </div>
            <hr/>
            <div class="links">
              <a class="url" v-if="item.url" :href="item.url">Open</a>
              <a class="source" v-if="item.source" :href="item.source">Source Code</a>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    components: {},
    computed: {
      ...mapGetters(['sections', 'portfolio'])
    }
  }
</script>

<style>
  .portfolio-container {
    width: 100%;
    display: block;
    clear: both;
  }

  .portfolio-item {
    width: 32%;
    margin-bottom: 25px;
    display: inline-block;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    text-align: center;
  }

  .portfolio-item:not(:nth-of-type(3n)) {
    margin-right: 2%;
  }

  .portfolio-item .meta {
    color: #444;
    padding: 10px;
    transition: all 0.25s ease-out;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .portfolio-item .image {
    width: 100%;
    height: 180px;
    transition: all 0.25s ease-out;
    -webkit-filter: grayscale(0.5);
    filter: grayscale(0.5);
  }

  .portfolio-item:hover .image {
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
  }

  .portfolio-item .links a {
    width: 48%;
    display: inline-block;
    padding: 5px 10px;
    text-align: center;
  }

  .label-custom.light {
    border-color: #eee;
    color: #aaa;
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 992px) {
    .portfolio-item {
      width: 48%;
      margin-right: 0;
    }

    .portfolio-item:nth-of-type(2n + 1) {
      margin-right: 2%;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width: 480px) {
    .portfolio-item {
      width: 100%;
      margin-right: 0;
    }
  }

  hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
</style>
