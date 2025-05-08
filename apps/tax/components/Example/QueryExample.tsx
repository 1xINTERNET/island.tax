import {
  useMutation,
  useLazyQuery,
} from "@apollo/client";

import {GetUserByPhoneQuery} from '../../graphql/schema'
import { withApollo } from "../../graphql/withApollo";
import {
  GET_USER_BY_PHONE_QUERY,
  CREATE_TAX_RETURN_MUTATION,
  CREATE_ASSET_MUTATION,
  CREATE_INCOME_MUTATION,
  CREATE_LIABILITY_MUTATION,
} from "../../screens/queries";



const QueryExample = () => {
  const [fetchUser, { data, loading, error, refetch }] = useLazyQuery<GetUserByPhoneQuery>(GET_USER_BY_PHONE_QUERY);

  const [createTaxReturn] = useMutation(CREATE_TAX_RETURN_MUTATION);
  const [createAsset] = useMutation(CREATE_ASSET_MUTATION);
  const [createIncome] = useMutation(CREATE_INCOME_MUTATION);
  const [createLiability] = useMutation(CREATE_LIABILITY_MUTATION);

  console.log(data);

  const onFetchUserByPhone = async () => {
    await fetchUser({
      variables: {
        phone: "772-8391",
      },
    });
  }

  const onCreateTaxReturn = async () => {
    if (data) {
      await createTaxReturn({ variables: { taxReturn: {userId: Number(data.userByPhone.id), year: 2025, status: 'draft' }}});
      refetch();
    }
  }

  const onCreateAsset = async () => {
    if (data) {
      await createAsset({ variables: { asset: {taxReturnId: 3, value: 10000, type: 'vehicle', assetId: '123', address: 'street' }}});
      refetch();
    }
  }

  const onCreateIncome = async () => {
    if (data) {
      await createIncome({ variables: { income: {taxReturnId: 3, source: 'employment', amount: 2000, type: 'salary' }}});
      refetch();
    }
  }

  const onCreateLiability = async () => {
    if (data) {
      await createLiability({ variables: { liability: {taxReturnId: 3, type: 'mortgage', interestPaid: 400, remainingBalance: 300000 }}});
      refetch();
    }
  }

  return (
    <div>
      <button onClick={onFetchUserByPhone}>onFetchUserByPhone</button><br />
      <button onClick={onCreateTaxReturn}>onCreateTaxReturn</button><br />
      <button onClick={onCreateAsset}>onCreateAsset</button><br />
      <button onClick={onCreateIncome}>onCreateIncome</button><br />
      <button onClick={onCreateLiability}>onCreateLiability</button><br />
    </div>
  );
}

export default withApollo(QueryExample);
