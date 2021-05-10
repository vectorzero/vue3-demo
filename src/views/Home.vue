<template>
  <div>
    <form>
      <input v-model="state2.obj.id" />
      <input v-model="state2.obj.name" />
      <input v-model="state2.obj.value" />
      <button type="submit" @click="addItem">新增</button>
    </form>
    <ul>
      <li v-for="(item, index) in state.list" :key="index" @click="removeItem(index)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Home',
  setup() {
    const { state, removeItem } = useRemoveItem()
    const { state2, addItem } = useAddItem(state)
    return { state, removeItem, state2, addItem }
  }
}

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
</script>

<style scoped lang="scss"></style>
