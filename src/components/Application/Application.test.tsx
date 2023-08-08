import React from 'react'
import {render} from '@testing-library/react'
import { Application } from './Application'

it('should pass', () => {
  const { getByText } = render(<Application />)
  getByText(/ts react starter/i)
})
