import gql from 'graphql-tag'

export const GET_LIABILITY_QUERY = gql`
  query GetLiability($id: Float!) {
    liability(id: $id) {
      id
      taxReturnId
      type
      subtype
      propertyAddress
      lenderName
      lenderSsn
      loanNumber
      loanStartDate
      loanTermYears
      annualPayment
      principalRepayment
      interestPaid
      remainingBalance
      details
      accountNumber
      issuer
    }
  }
`

export const CREATE_LIABILITY_MUTATION = gql`
  mutation CreateLiability($liability: CreateLiabilityInput!) {
    createLiability(liability: $liability) {
      taxReturnId
      type
      subtype
      propertyAddress
      lenderName
      lenderSsn
      loanNumber
      loanStartDate
      loanTermYears
      annualPayment
      principalRepayment
      interestPaid
      remainingBalance
      details
      accountNumber
      issuer
    }
  }
`

export const UPDATE_LIABILITY_MUTATION = gql`
  mutation UpdateLiability($liability: UpdateLiabilityInput!) {
    updateLiability(liability: $liability) {
      id
      type
      subtype
      propertyAddress
      lenderName
      lenderSsn
      loanNumber
      loanStartDate
      loanTermYears
      annualPayment
      principalRepayment
      interestPaid
      remainingBalance
      details
      accountNumber
      issuer
    }
  }
`

export const DELETE_LIABILITY_MUTATION = gql`
  mutation DeleteLiability($id: Int!) {
    deleteLiability(id: $id)
  }
`
