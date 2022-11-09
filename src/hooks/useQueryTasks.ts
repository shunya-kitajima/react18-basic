import { useQuery } from 'react-query'
import axios from 'axios'
import { delay } from '../utils/fetchDelay'

export const useQueryTasks = () => {
  const getTasks = async (): Promise<any> => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=3'
    )
    await delay(5000)
    return data
  }

  return useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })
}
