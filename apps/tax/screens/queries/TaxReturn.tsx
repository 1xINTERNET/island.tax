import gql from 'graphql-tag'

export const GET_TAX_RETURN_QUERY = gql`
  query GetTaxReturn($id: Float!) {
    taxReturn(id: $id) {
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
`

export const CREATE_TAX_RETURN_MUTATION = gql`
  mutation CreateTaxReturn($taxReturn: CreateTaxReturnInput!) {
    createTaxReturn(taxReturn: $taxReturn) {
      userId
      year
      status
    }
  }
`

export const UPDATE_TAX_RETURN_MUTATION = gql`
  mutation UpdateTaxReturn($taxReturn: UpdateTaxReturnInput!) {
    updateTaxReturn(taxReturn: $taxReturn) {
      id
      userId
      year
      status
    }
  }
`

export const DELETE_TAX_RETURN_MUTATION = gql`
  mutation DeleteTaxReturn($id: Int!) {
    deleteTaxReturn(id: $id)
  }
`
