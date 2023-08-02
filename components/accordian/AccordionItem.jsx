import React from 'react';
import { Collapse } from 'react-collapse';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const AccordionItem = ({open, toggle, title, desc}) => {
  return (
    <div className='pt-[10px] rounded-lg'>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-5 px-5 flex justify-between items-center cursor-pointer' 
      onClick={toggle}>
        <p className='text-[22px] font-semibold'>{title}</p>
        <div className='text-[30px]'>
          {open ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className='bg-gradient-to-r from-amber-500 to-red-500 text-white px-[20px] py-[20px] '>{desc}</div>
      </Collapse>
    </div>
  )
}

export default AccordionItem