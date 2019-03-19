<template>
    <div class="s-loading" :class="[
      type === 'inbox' ? 's-loading--inbox' : ''
    ]">
      <transition name="t-fade-out">
      <div class="s-loading__mask" v-if="isShow"
        :style="{
          backgroundColor: maskBgColor ? maskBgColor : ''
        }"
      ></div>
      </transition>

        <transition name="t-fade-out">
      <div class="s-loading__wrapper" v-if="isShow">
        <div class="s-loading__container"
         :style="{
           backgroundColor: contentBgColor ? contentBgColor : '',
           width: width ? `${width}px` : '',
           height: height ? `${height}px` : '',
          }"
        >
          <i class="s-loading__icon"
           :class="[
              iconClass
            ]"
           :style="{
              color: iconColor ? iconColor : '',
              lineHeight: height ? `${(height - 20) / 2}px` : '',
              fontSize: iconSize ? iconSize : ''
            }"
          ></i>
          <p class="s-loading__text"
           :style="{
             color: textColor ? textColor : '',
             lineHeight: height ? `${(height - 20) / 2}px` : '',
             fontSize: textSize ? textSize : ''
            }"
          >{{ text }}</p>
        </div>
      </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 's-loading',

  props: {
    maskBgColor: String,
    contentBgColor: String,
    iconColor: String,
    textColor: String,
    width: Number,
    height: Number,
    text: {
      type: String,
      default: 'Loading ...'
    },
    iconClass: {
      type: String,
      default: 'fa fa-circle-notch fa-spin'
    },
    iconSize: String,
    textSize: String,

    //  not user api
    isShow: false,
    type: String
  }
}
</script>
