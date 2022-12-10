export { default as UsersLoginVue } from '../..\\components\\users\\LoginVue.vue'
export { default as UsersRegisterVue } from '../..\\components\\users\\RegisterVue.vue'
export { default as UsersUsuariosVue } from '../..\\components\\users\\UsuariosVue.vue'
export { default as DashboardAquieditasJudith } from '../..\\components\\dashboard\\AquieditasJudith.vue'
export { default as DashboardDrawer } from '../..\\components\\dashboard\\Drawer.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
