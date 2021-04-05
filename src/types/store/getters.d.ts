import { Getters as productGetters } from '@/store/modules/product'
import { Getters as categoryGetters } from '@/store/modules/category'
import { Getters as swipeGetters } from '@/store/modules/swipe'

type Getters = productGetters & categoryGetters & swipeGetters
