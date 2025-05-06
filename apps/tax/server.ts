import { bootstrap } from '@island.is/infra-next-server'

bootstrap({
  name: 'tax',
  appDir: 'apps/tax',
  externalEndpointDependencies: (nextConfig) => {
    const { graphqlEndpoint } = nextConfig.serverRuntimeConfig
    return [graphqlEndpoint]
  },
})
