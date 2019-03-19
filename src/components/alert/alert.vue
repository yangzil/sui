<template>
  <transition name="s-fade-out">
    <div class="s-alert" :class="[
    type ? `s-alert--${type}` : ''
  ]" v-if="!hide">
      <div class="s-alert__title" :class="[
        textCenter ? 's-alert__title--center' : ''
      ]">
        <i v-if="showIcon" class="s-alert__title-icon" :class="icon || iconClasses[type]"></i>
        {{ content }}
      </div>
      <div class="s-alert__sub" v-if="sub">
        {{ sub }}
      </div>
      <template v-if="closable">
        <span class="s-alert__close s-alert__close-text" v-if="closeText" @click="$emit('alert-close')">{{ closeText }}</span>
        <i class="s-alert__close s-alert__close--icon fa fa-times" v-if="!closeText" @click="$emit('alert-close')"></i>
      </template>
    </div>
  </transition>
</template>

<script>
export default {
  name: 's-alert',

  props: {
    content: String,
    sub: String,
    type: String,
    closable: {
      type: Boolean,
      default: true
    },
    closeText: String,
    showIcon: Boolean,
    textCenter: Boolean,
    icon: String
  },

  data () {
    return {
      hide: false,
      iconClasses: {
        'success': 'fa fa-check-circle',
        'info': 'fa fa-info-circle',
        'danger': 'fa fa-times-circle',
        'warning': 'fa fa-exclamation-circle'
      }
    }
  },

  created () {
    this.$on('alert-close', this.closeHandler)
  },

  methods: {
    closeHandler () {
      this.hide = true
      this.$emit('close')
    }
  }
}
</script>
