const { gql } = require('apollo-server')

module.exports = gql`
  extend type Query {
    getCrops: [Crop]
  }

  type Crop @key(fields: "id") {
    id: ID!
    name: String!
  }
`