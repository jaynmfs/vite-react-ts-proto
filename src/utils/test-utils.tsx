import { queries, render, RenderOptions } from '@testing-library/react'
import React, { FC, ReactElement } from 'react'

import * as customQueries from './custom-queries'

const AllTheProviders: FC = ({ children }) => {
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper' | 'queries'>
) =>
  render(ui, {
    wrapper: AllTheProviders,
    queries: { ...queries, ...customQueries },
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render }
