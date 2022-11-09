import { useQuery } from 'react-query'
import axios from 'axios'
import { delay } from '../utils/fetchDelay'

export const useQueryUsers = () => {
  const getUsers = async (): Promise<any> => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users?_limit=3'
    )
    await delay(3000)
    return data
  }

  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: Infinity,
  })
}
