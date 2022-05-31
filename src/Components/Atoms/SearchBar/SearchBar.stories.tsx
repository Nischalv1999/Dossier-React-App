import { SearchBar, searchBarProps } from './SearchBar'
import { ComponentProps } from 'react'
import { Story } from '@storybook/react'

export default {
  title: 'Atoms/SearchBar',
  component: SearchBar,
}

const Template: Story<ComponentProps<typeof SearchBar>> = (
  args: searchBarProps,
) => <SearchBar {...args} />

export const searchBar = Template.bind({})

searchBar.args = {}
