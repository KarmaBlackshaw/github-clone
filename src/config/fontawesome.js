import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const solidIcons = require('@fortawesome/free-solid-svg-icons')

// const brandIcons = require('@fortawesome/free-brands-svg-icons')
// const regularIcons = require('@fortawesome/free-regular-svg-icons')
// const icons = {
//   ...solidIcons
//   // ...regularIcons,
//   // ...brandIcons
// }

// const toLower = str => String(str).toLowerCase()
// const checker = Object.keys(icons).filter(x => toLower(x).includes('star'))
// console.log(checker)

library.add(solidIcons.faBars)
library.add(solidIcons.faBell)
library.add(solidIcons.faBook)
library.add(solidIcons.faStar)

export default FontAwesomeIcon
