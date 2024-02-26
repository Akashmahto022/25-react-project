import React, { useState } from 'react';
import Modal from './Modal';

const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false)

    const onclose=()=>{
      setShowModalPopup(false)
    }

  return (
    <div className='m-4'>
      <button className='bg-blue-700 text-white hover:bg-black p-2 rounded' onClick={()=>setShowModalPopup(!showModalPopup)}>Open Modal</button>
      {showModalPopup && <Modal onclose={onclose}/>}
     </div>
  )
}

export default ModalTest
