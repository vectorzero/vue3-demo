
import { reactive } from 'vue'

function useAddItem(state) {
  let state2 = reactive({
    obj: {
      id: '',
      name: '',
      value: ''
    }
  })
  function addItem(e) {
    e.preventDefault()
    const item = Object.assign({}, state2.obj)
    state.list.push(item)
    state2.obj.id = ''
    state2.obj.name = ''
    state2.obj.value = ''
  }
  return { state2, addItem }
}

export default useAddItem