import { QueryClient, QueryClientProvider } from 'react-query';

interface QueryProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
