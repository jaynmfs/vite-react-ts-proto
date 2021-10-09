/* eslint-disable @typescript-eslint/ban-ts-comment */
import { GetAllBy } from '@testing-library/dom'
import { buildQueries, queryHelpers } from '@testing-library/react'

// The queryAllByAttribute is a shortcut for attribute-based matchers
// You can also use document.querySelector or a combination of existing
// testing library utilities to find matching nodes for your query
const queryAllByDataCy: GetAllBy<any[]> = (...args) =>
  // @ts-ignore: Unreachable code error
  queryHelpers.queryAllByAttribute('data-cy', ...args)

const getMultipleError = (c: Element | null, dataCyValue: string) =>
  `Found multiple elements with the data-cy attribute of: ${dataCyValue}`
const getMissingError = (c: Element | null, dataCyValue: string) =>
  `Unable to find an element with the data-cy attribute of: ${dataCyValue}`

const [
  queryByDataCy,
  getAllByDataCy,
  getByDataCy,
  findAllByDataCy,
  findByDataCy,
] = buildQueries(queryAllByDataCy, getMultipleError, getMissingError)

export {
  findAllByDataCy,
  findByDataCy,
  getAllByDataCy,
  getByDataCy,
  queryAllByDataCy,
  queryByDataCy,
}
