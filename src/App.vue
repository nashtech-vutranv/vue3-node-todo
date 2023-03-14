<script setup lang="ts">
import { ref, reactive } from 'vue'
import TextAreaField from './components/molecules/TextAreaField.vue'
import InputField from './components/molecules/InputField.vue'
import SelectField from './components/molecules/SelectField.vue'
import CheckboxField from './components/molecules/CheckboxField.vue'

const inputFieldVal = ref('')
const textAreaFieldVal = ref('')
const selectFieldOptions = reactive([
  {
    label: 'normal',
    value: 'normal'
  },
  {
    label: 'high',
    value: 'high'
  }
])
const selectField = ref('')
const checkboxField = ref<boolean>(false)

function handleChangeSelectValue(event: any) {
  selectField.value = event.target.value
  if (event.target.value !== '') {
    event.target.classList.add('custom-select')
  }
}

function handleUpdateCheckBoxValue(value: boolean) {
  checkboxField.value = value
}
</script>

<template>
  <input-field
    id="name"
    v-model="inputFieldVal"
    tag="span"
    label="Name"
    placeholder="Enter name"
    name="name"
  />
  <br />
  <br />

  <text-area-field
    label="Address"
    id="address"
    name="address"
    placeholder="Enter address"
    tag="span"
    v-model="textAreaFieldVal"
  />
  <br />
  <br />

  <select-field
    tag="span"
    label="Priority"
    id="select"
    name="select"
    placeholder="Select priority"
    :options="selectFieldOptions"
    :model-value="selectField"
    @change-select-val="handleChangeSelectValue"
  />

  <br />
  <br />

  <checkbox-field
    id="checkbox"
    name="checkbox"
    tag="span"
    :model-value="checkboxField"
    label="Tick or remove ur selection"
    @update-checkbox-val="handleUpdateCheckBoxValue"
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
