import { reactive } from 'vue'

function useRemoveItem() {
  let state = {
    list: reactive([
      { id: 1, name: 'a', value: 12 },
      { id: 2, name: 'b', value: 13 },
      { id: 3, name: 'c', value: 14 }
    ])
  }
  function removeItem(index) {
    state.list.splice(index, 1)
  }
  return { state, removeItem }
}

export default useRemoveItem