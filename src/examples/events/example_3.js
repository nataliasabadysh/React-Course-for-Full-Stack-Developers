
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export function EventExample3(){


    // const handleKeyPress = (e) => {

    //     if (e.code === 'Enter') {
    //         toast.info(`event "onKeyPress" `)
    //     }
    // }

    const handleKey = (e) => { 
        if (e.code === 'Enter') {
            toast.success(`Enter`)
        }

    }

    useEffect(() => {
        window.addEventListener('keydown', handleKey);

         return () => {
            window.removeEventListener('keydown', handleKey);
         }
    }, [])


    return (
        <> 
            {/* <label htmlFor="nameId"> Name</label>
            <input onKeyPress={handleKeyPress} type="text" placeholder="Enter your name"  id="nameId" /> */}
        </>
    )
}

/*
  const [counter, setCounter] = useState(0);

  const increase = (prevCounter) => prevCounter + 1;

  useEffect(() => {
    const id = setInterval(() => {
      setCounter(increase);
    }, 1000);

    return () => {
      clearInterval(id);
    }
  }, [counter]);

  */
 