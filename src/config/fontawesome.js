import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const solidIcons = require('@fortawesome/free-solid-svg-icons')
// const brandIcons = require('@fortawesome/free-brands-svg-icons')
// const regularIcons = require('@fortawesome/free-regular-svg-icons')

// console.log(Object.keys(solidIcons).filter(x => x.includes('book')))
library.add(solidIcons.faBars)
library.add(solidIcons.faBell)
library.add(solidIcons.faBook)

export default FontAwesomeIcon
