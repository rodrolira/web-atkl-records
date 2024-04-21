import { QueryClient } from 'react-query'

export default new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
    mutations: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})
