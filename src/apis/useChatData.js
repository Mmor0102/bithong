import { QueryClient, QueryClientProvider,
   useQuery } from 'react-query'

export default function useChatData() {
  
  
  return useQuery("chatData", () =>
    fetch("https://638b643281df38ab3467feab.mockapi.io/account1").then((r) =>
      r.json()
    )



  );
}
