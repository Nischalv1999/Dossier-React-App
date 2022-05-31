import { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import { TemplateList, templateListProps } from './TemplateList'
import template1 from 'assets/Template1.svg'
import template2 from 'assets/Template2.svg'
import template3 from 'assets/Template3.svg'
import template4 from 'assets/Template4.svg'

export default {
  title: 'Organisms/TemplateList',
  component: TemplateList,
}

const Template: Story<ComponentProps<typeof TemplateList>> = (args:templateListProps) => (
 <TemplateList {...args} />
)

export const Primary = Template.bind({})

const templates=[
    template1,template2,template3,template4
]

Primary.args={
    imageListSrc: templates
}

