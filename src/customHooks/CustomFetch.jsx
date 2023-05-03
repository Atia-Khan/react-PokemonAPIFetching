import {useEffect, useState} from 'react';

function CustomFetch({url, name}) {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        let new_url = url;
        if(name){
            new_url = `${url}/${name}`;
        }
        fetch(new_url).then((response)=> response.json()).then((result)=> {
            setData(result);
            setLoading(false);
        });
    },[url,name]);
  return {data,loading};
}

export default CustomFetch