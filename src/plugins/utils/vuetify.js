import { createVuetify } from "vuetify";
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import theme from "./theme";

export default createVuetify({
    theme,
    components,
    directives, 
})
