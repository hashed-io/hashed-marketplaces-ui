/* eslint-disable no-useless-call */
import MarketApplyForm from '../../../../components/marketplace/details/market-apply-form'
import { action } from '@storybook/addon-actions'
// import { expect } from '@storybook/jest'
// import { userEvent, within } from '@storybook/testing-library'
import { userEvent, within } from '@storybook/testing-library'
import image from '../../../assets/colors.svg'
export default {
  title: 'Marketplace/MarketApplyForm',
  component: MarketApplyForm,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    submit: { action: action('submit') }
  }
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MarketApplyForm },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  data () {
    return {
      form: {
        notes: undefined,
        files: undefined
      },
      marketInfo: {
        owner: '',
        taxCredits: ''
      }
    }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<MarketApplyForm v-bind="args" @submit="onSubmitApplyForm"/>',
  methods: {
    onSubmitApplyForm (e) {
      action('submit').call(null, e)
      this.data = e
      console.log('data', this.data)
    }
  }
})

// Base component
export const Base = Template.bind({})
// Sucess submit
export const SuccessSubmitted = Template.bind({})
// Failed submit
export const FailedSubmitted = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Base.args = {
  market: {
    id: '0',
    label: "Afloat's marketplace",
    administrator: '5GEEZx22MqCvBDKtFPgTiKAVkoHp1vMTsw8e7fjtRH8Ldzsu'
  },
  participantsNumber: 2
}

// Success Submitted
SuccessSubmitted.args = {
  market: {
    id: '0',
    label: "Afloat's marketplace",
    administrator: '5GEEZx22MqCvBDKtFPgTiKAVkoHp1vMTsw8e7fjtRH8Ldzsu'
  },
  participantsNumber: 2
}
SuccessSubmitted.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByTestId('notes_input'), 'Reason for applying')
  await userEvent.type(canvas.getByTestId('name_file'), 'This file contains my reason for applying')
  const file = new File([image], 'colors.svg', { type: 'image/svg+xml' })
  await userEvent.upload(canvas.getByTestId('qFile'), file)
  await userEvent.click(canvas.getByTestId('submit_apply_btn'))
}
// FailedSubmitted
FailedSubmitted.args = {
  market: {
    id: '0',
    label: "Afloat's marketplace",
    administrator: '5GEEZx22MqCvBDKtFPgTiKAVkoHp1vMTsw8e7fjtRH8Ldzsu'
  },
  participantsNumber: 6
}
FailedSubmitted.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByTestId('notes_input'), 'Fails if you don\'t fill the file')
  await userEvent.type(canvas.getByTestId('name_file'), 'This file contains my reason for applying')
  await userEvent.click(canvas.getByTestId('submit_apply_btn'))
}
