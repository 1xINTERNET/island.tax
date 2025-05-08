import gql from 'graphql-tag'

export const GET_INCOME_QUERY = gql`
  query GetIncome($id: Float!) {
    income(id: $id) {
      id
      taxReturnId
      source
      amount
      type
      subtype
    }
  }
`

export const CREATE_INCOME_MUTATION = gql`
  mutation CreateIncome($income: CreateIncomeInput!) {
    createIncome(income: $income) {
      taxReturnId
      source
      amount
      type
      subtype
    }
  }
`

export const UPDATE_INCOME_MUTATION = gql`
  mutation UpdateIncome($income: UpdateIncomeInput!) {
    updateIncome(income: $income) {
      id
      source
      amount
      type
      subtype
    }
  }
`

export const DELETE_INCOME_MUTATION = gql`
  mutation DeleteIncome($id: Int!) {
    deleteIncome(id: $id)
  }
`
