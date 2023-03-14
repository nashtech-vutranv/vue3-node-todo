import type { PropType } from 'vue'
import type { ButtonTypes } from '@/interface/Button'
import type { InputTypes } from '@/interface/Input'
import type { SelectType } from '@/interface/Select'

const commonStrNoRequired = {
  type: String,
  required: false
}

const buttonProps = {
  type: {
    type: String as PropType<ButtonTypes>,
    required: false,
    default: 'button',
    validator: (value: string) => {
      const buttonTypes = ['button', 'submit', 'reset']
      return buttonTypes.includes(value)
    }
  }
}

const inputProps = {
  type: {
    type: String as PropType<InputTypes>,
    required: false,
    default: 'text',
    validator: (value: string) => {
      const inputTypes = ['text', 'email', 'password', 'checkbox', 'radio']
      return inputTypes.includes(value)
    }
  },
  id: commonStrNoRequired,
  name: commonStrNoRequired,
  placeholder: commonStrNoRequired,
  classes: commonStrNoRequired,
  modelValue: commonStrNoRequired
}

const selectProps = {
  id: commonStrNoRequired,
  name: commonStrNoRequired,
  classes: commonStrNoRequired,
  modelValue: commonStrNoRequired,
  options: {
    type: Array<SelectType>,
    default: true
  },
  placeholder: commonStrNoRequired
}

const checkboxProps = {
  id: commonStrNoRequired,
  name: commonStrNoRequired,
  classes: commonStrNoRequired,
  modelValue: {
    type: Boolean,
    required: true
  }
}

const textProps = {
  tag: {
    type: String,
    required: true,
    default: 'p',
    validator: (value: string) => {
      const tagTypes = ['h1', 'h2', 'h3', 'p', 'label', 'span']
      return tagTypes.includes(value)
    }
  },
  for: commonStrNoRequired
}

const textAreaProps = {
  id: commonStrNoRequired,
  name: commonStrNoRequired,
  placeholder: commonStrNoRequired,
  classes: commonStrNoRequired,
  modelValue: commonStrNoRequired
}

export default {
  buttonProps,
  inputProps,
  selectProps,
  checkboxProps,
  textProps,
  textAreaProps,
  commonStrNoRequired
}
