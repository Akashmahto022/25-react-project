import React, { useState } from 'react';
import Modal from './Modal';

const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false)

    const handleClick = ()=>{
        setShowModalPopup(!showModalPopup)
    }

  return (
    <div className='m-4'>
      <button className='bg-blue-700 text-white hover:bg-black p-2 rounded' onClick={handleClick}>Open Modal</button>
      {showModalPopup && <Modal/>}
     </div>
  )
}

export default ModalTest
