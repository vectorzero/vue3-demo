<template>
  <div>
    测试
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
import useRemoveItem from './remove'
import useAddItem from './add'

export default {
  name: 'Home',
  setup() {
    const { state, removeItem } = useRemoveItem()
    const { state2, addItem } = useAddItem(state)
    return { state, removeItem, state2, addItem }
  }
}
</script>

<style scoped lang="scss"></style>
