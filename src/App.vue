<script setup lang="ts">
import { reactive } from 'vue'
import AddButton from './components/atoms/AddButton.vue'
import AddInput from './components/atoms/AddInput.vue'
import AddTextArea from './components/atoms/AddTextArea.vue'
import AddText from './components/atoms/AddText.vue'
import AddSelect from './components/atoms/AddSelect.vue'
import TextAreaField from './components/molecules/TextAreaField.vue'
import InputField from './components/molecules/InputField.vue'

const testing = reactive({
  inputValue: '',
  textAreaValue: '',
  selectValue: '',
  inputField: '',
  textAreaFieldValue: ''
})
const options = [
  {
    label: 'normal',
    value: 'normal'
  },
  {
    label: 'high',
    value: 'high'
  }
]

const handleChangeAddInputVal = (value: string) => {
  console.log({ value })
  testing.inputValue = value
}
</script>

<template>
  <AddText tag="h1">New Task</AddText>
  <AddButton type="button">Testing</AddButton>
  <AddInput
    placeholder="Enter something..."
    :model-value="testing.inputValue"
    @change-val="handleChangeAddInputVal"
  />
  <AddTextArea
    placeholder="Enter description"
    v-model="testing.textAreaValue"
  />
  <AddSelect :options="options" v-model="testing.selectValue" />
  <p>{{ testing }}</p>

  <input-field id="data-test-input-id" v-model="testing.inputField" />

  <text-area-field
    label="Address"
    id="address"
    name="address"
    placeholder="Enter smth"
    v-model="testing.textAreaFieldValue"
  />
</template>

<style scoped>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
