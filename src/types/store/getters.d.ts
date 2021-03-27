import { Getters as productGetters } from '@/store/modules/product'
import { Getters as categoryGetters } from '@/store/modules/category'

type Getters = productGetters & categoryGetters
