<template>
  <div>
    <div class="well well-sm contact-form">
      <h1>
        {{sections.contact.heading}}
      </h1>
      <div>
        <div class="material-icon-cont">
          <a :href="emailAddressString" target="_blank">
            <i class="material-icons">email</i> Send an Email</a>
        </div> or use this form:
      </div>
      <br/>
      <form class="form-horizontal">
        <fieldset>
          <div class="form-group" :class="{'has-warning' : !isEmailValid}">
            <div class="col-lg-6 col-lg-offset-3">
              <input type="text" class="form-control" placeholder="Your Email Address" v-model="email" :readonly="loading" id="txt_email">
            </div>
          </div>
          <div class="form-group" :class="{'has-warning' : !isMessageValid}">
            <div class="col-lg-6 col-lg-offset-3">
              <textarea type="text" class="form-control" placeholder="Message" v-model="message" rows="7" :readonly="loading"></textarea>
            </div>
          </div>
          <div class="form-group submit">
            <div class="col-lg-6 col-lg-offset-3">
              <button type="button" class="btn btn-success btn-block" :disabled="loading" @click.prevent.stop="submit">
                <transition name="slide-left" appear mode="out-in">
                  <span v-if="loading">
                    <i class="material-icons animate-spin">sync</i> Sending
                  </span>
                  <span v-else>
                    <i class="material-icons">send</i> Send
                  </span>
                </transition>
              </button>
              <br/>
              <transition name="slide-up" appear mode="out-in">
                <div class="alert alert-dismissible alert-warning hide" ref="alertWarn">
                  <h4>Warning!</h4>
                  <p>There was an error trying to send your message.</p>
                </div>
              </transition>
              <transition name="slide-up" appear mode="out-in">
                <div class="alert alert-dismissible alert-success hide" ref="alertSuccess">
                  <h4>Thank you!</h4>
                  <p>Your message has been successfully received. I will contact you very soon!</p>
                </div>
              </transition>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        email: '',
        message: '',
        loading: false,
        submitted: false
      }
    },
    computed: {
      ...mapGetters(['sections', 'info']),
      emailAddressString () {
        return `mailto:${this.info
          .email}?Subject=Hey Muhammad Ubaid, I would like to talk to you about this great opportunity!`
      },
      isEmailValid () {
        return this.submitted
          ? /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
          : true
      },
      isMessageValid () {
        return this.submitted ? this.message.length > 10 : true
      }
    },
    methods: {
      submit () {
        this.submitted = true

        if (!this.isEmailValid || !this.isMessageValid) return
        this.loading = true

        axios
          .post(this.info.formspreeURL, {
            email: this.email,
            message: this.message
          })
          .then(() => {
            this.$refs.alertSuccess.classList.toggle('hide')
            this.submitted = false
            this.email = ''
            this.message = ''
          })
          .catch(() => {
            this.$refs.alertWarn.classList.toggle('hide')
          })
          .then(() => {
            this.loading = false
          })
      }
    }
  }
</script>
<style>
  .contact-form {
    margin-top: 46px;
    margin-bottom: 75px;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
  }

  .contact-form h1 {
    margin-top: 0;
  }

  .contact-form .submit {
    text-align: left;
  }

  .contact-form .submit .btn i {
    float: right;
  }

  .material-icon-cont {
    display: inline-block;
  }
</style>
