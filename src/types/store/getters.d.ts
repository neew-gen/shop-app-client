import { Getters as cartGetters } from '@/store/modules/product'
import { Getters as variablesGetters } from '@/store/modules/variables'

type Getters = cartGetters & variablesGetters
