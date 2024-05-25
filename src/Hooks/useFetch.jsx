import { useEffect, useState } from "react";


export default function useFetch({fileName}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`${fileName}`)
        .then(res => {
        //   if (!res.ok) {
        //     throw new Error('Network response was not ok');
        //   }
          return res.json();
        })
        .then(data => {
            setData(data);
        })
        .catch(error => {
          setError(error.message);
        });
    }, [fileName]);
  
    return [ fileName, data, error ];
  }
