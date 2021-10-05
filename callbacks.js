const resolvedPromise = () => {
   
        setTimeout(() => {
           let success={'message':'resolved promise!'}
        console.log(success)
                }, 500)
 }

const rejectedPromise=()=>  {
            setTimeout(() => {
            try{
               throw new Error('error')
            }
            catch(e){
                      console.log({'error': 'rejected promise!'})}
        }, 500)
           }
    
resolvedPromise()
rejectedPromise()