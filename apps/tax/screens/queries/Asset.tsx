import gql from 'graphql-tag'

export const GET_ASSET_QUERY = gql`
  query GetAsset($id: Float!) {
    asset(id: $id) {
      id
      taxReturnId
      value
      type
      assetId
      address
    }
  }
`

export const CREATE_ASSET_MUTATION = gql`
  mutation CreateAsset($asset: CreateAssetInput!) {
    createAsset(asset: $asset) {
      taxReturnId
      value
      type
      assetId
      address
    }
  }
`

export const UPDATE_ASSET_MUTATION = gql`
  mutation UpdateAsset($asset: UpdateAssetInput!) {
    updateAsset(asset: $asset) {
      id
      value
      type
      assetId
      address
    }
  }
`

export const DELETE_ASSET_MUTATION = gql`
  mutation DeleteAsset($id: Int!) {
    deleteAsset(id: $id)
  }
`
