import {useEffect} from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList() {

    useEffect(()=>{
        getGenrelList()
    },[])
    const getGenrelList=()=>{
        GlobalApi.getGenrelList.then((resp)=>{
            console.log(resp.data.results)
        })
    }
  return (
    <div>GenreList ---</div>
  )
}

export default GenreList