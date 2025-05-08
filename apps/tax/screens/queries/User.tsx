import gql from 'graphql-tag'

export const GET_USER_QUERY = gql`
  query GetUser($id: Float!) {
    user(id: $id) {
      id
      firstName
      lastName
      ssn
      streetAndHouseNumber
      postalCode
      city
      email
      phone
      taxReturns {
        id
        userId
        year
        status
        assets {
          id
          taxReturnId
          value
          type
          assetId
          address
        }
        incomes {
          id
          taxReturnId
          source
          amount
          type
          subtype
        }
        liabilities {
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
    }
  }
`

export const GET_USER_BY_PHONE_QUERY = gql`
  query GetUserByPhone($phone: String!) {
    userByPhone(phone: $phone) {
      id
      firstName
      lastName
      ssn
      streetAndHouseNumber
      postalCode
      city
      email
      phone
      taxReturns {
        id
        userId
        year
        status
        assets {
          id
          taxReturnId
          value
          type
          assetId
          address
        }
        incomes {
          id
          taxReturnId
          source
          amount
          type
          subtype
        }
        liabilities {
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
    }
  }
`
