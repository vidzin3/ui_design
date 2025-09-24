import {getCurrentInstance,ComponentCustomProperties } from "vue"

const instance = getCurrentInstance()
const $myGlobalFunction = instance.appContext.config.globalProperties

type ImageToBase64 = undefined | {

}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $appName: string
    $sayHello: (name: string) => string
  }

  export interface ComponentCustomProperties {
    $image_to_base64: ImageToBase64
  }
}

