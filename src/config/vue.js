import Vue from 'vue'

// external libraries
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import fontawesome from './fontawesome'

// components
const requireComponent = require.context('../components/', false, (/Base[A-Z]\w+\.(vue|js)$/))
requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(camelCase(fileName.split('/').pop().replace(/\.\w+$/, '')))

  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.component('Icon', fontawesome)

// configurations
Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info) {
  console.error('Vue error: ', err)
}

export default Vue
