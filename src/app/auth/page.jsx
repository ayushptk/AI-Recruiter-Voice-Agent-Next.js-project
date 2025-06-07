
import Image from 'next/image';
import React from 'react';

function Login () {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
          <div className='flex flex-col items-center' >
           <div>
             <Image src="/logo.png" alt="Logo" width={400} height={100}  className='w-[180px]'/>
           </div>
            <div>
             <Image src="/loginimage.png" alt="Logo" width={400} height={400}  className='w-[400px] h-[200px]'/>
           </div>
           <h2>Welcome to AiCruiter</h2>
           

           </div>

        </div>
    );
} 

export default Login;
