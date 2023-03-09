import { useRouter } from 'next/router'
import datas from '../api/data'

export default function portfolio(){
    const router = useRouter()
    const {name} = router.query
    const data = datas.find(data => data.name === name)

    
    return(<>
        <p>{data.name}</p>
    </>)
}