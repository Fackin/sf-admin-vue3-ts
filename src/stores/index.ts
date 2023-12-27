import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { parse, stringify } from 'zipson'


const pinia = createPinia()
// pinia 持久化
pinia.use(createPersistedState({
    key: id => `__sf__pinia__${id}`,
    serializer: {
        deserialize: parse,
        serialize: stringify,
    },
}))

export default pinia