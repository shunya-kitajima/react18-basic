import { useQuery } from 'react-query'
import axios from 'axios'
import { delay } from '../../utils/fetchDelay'

export const useQueryComments = () => {
  const getComments = async (): Promise<any> => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/comments?_limit=3'
    )
    await delay(1000)
    return data
  }

  return useQuery({
    queryKey: ['comments'],
    queryFn: getComments,
  })
}
