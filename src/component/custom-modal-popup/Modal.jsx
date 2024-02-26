import React, { useRef } from "react";

const Modal = ({ onclose, heading = "Give your heading" }) => {
  const handleref = useRef();

  const closepopup = (e) => {
    if (handleref.current === e.target) {
      
      onclose();
    }
  };

  return (
    <div
      ref={handleref}
      onClick={closepopup}
      className="fixed inset-0 bg-black bg-opacity-45 flex justify-center items-center"
    >
      <div className="w-[800px] h-[500px] bg-slate-600 rounded-xl px-[120px] py-4">
        <div className="flex justify-end items-end">
          <button
            onClick={onclose}
            className="bg-blue-700 px-4 py-2 rounded-xl hover:bg-black text-white"
          >
            X
          </button>
        </div>
        <div className="flex justify-center items-center p-2">
          <h1 className="text-3xl text-white">{heading}</h1>
        </div>
        <div>
          <p className="text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            eveniet labore animi eum debitis corrupti ipsum impedit iste neque
            non, atque, iure quaerat accusantium qui possimus suscipit tempora
            incidunt voluptatibus autem cum doloribus. Deleniti doloribus,
            libero ad adipisci asperiores quam ipsa error architecto quisquam
            laborum aliquam ea est harum molestias! Sapiente in non voluptates
            quod at velit eos ea expedita, aliquid dolore facilis, sit, tempora
            voluptatum? Ex odio dicta cumque illo, voluptas rerum consequuntur
            dolore minima corrupti vel dolorum laborum sapiente quia unde! Vero
            illo assumenda doloremque at in sed aspernatur quo doloribus
            exercitationem. Quo at natus reiciendis voluptates facere pariatur
            ipsa ratione! Consequatur, repellendus molestias quod temporibus
            laudantium ut numquam veniam qui et vitae possimus nesciunt ea
            quidem? Repudiandae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
