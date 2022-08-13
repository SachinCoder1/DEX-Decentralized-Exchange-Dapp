import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { userTypes } from './userTypes'
import { transactionTypes } from './transactionTypes'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    userTypes, transactionTypes

  ]),
})
