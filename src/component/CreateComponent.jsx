import React from 'react'
import { TbTrash } from 'react-icons/tb';
import Element from './Element';

const CreateComponent = ({info,currentComponent,removeComponent}) => {
    const randValue = Math.floor(Math.random()*100)
    let html = "";
    if (info.name==="main_frame"){
        html = <div onClick={()=>info.setCurrentComponent(info)} className='hover:border-[2px] hover:border-indigo-500 shadow-md' style={{
            height:info.height +"px",
            width:info.width +"px",
            background:info.color,
            zIndex:info.z_index
        }}>
            {
                info.image && <img src={info.image} className='w-full h-full' alt="image"/>
            }
        </div>
    }
    if (info.name==="shape" && info.type==="rect"){
        html = <div id={randValue} onClick={()=>info.setCurrentComponent(info)}
        style={{
            width:info.width+"px",
            height:info.height+"px",
            background:info.color,
            opacity:info.opacity,
            left:info.left +"px",
            top:info.top +"px",
            zIndex:info.z_index,
            transform:info.rotate?`rotate(${info.rotate}deg)`:"rotate(0deg)",




        }} className='absolute group hover:border-[2px] hover:border-indigo-500'>
            <Element id={randValue} info={info} exId=""/>
            {
                currentComponent.id===info.id && <div onClick={()=>removeComponent(info.id)} className='px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md'><TbTrash/></div>
            }

        </div>
    }
    if (info.name==="shape" && info.type==="circle"){
        html = <div id={randValue} onClick={()=>info.setCurrentComponent(info)}
        style={{
           
           
            left:info.left +"px",
            top:info.top +"px",
            zIndex:info.z_index,
            transform:info.rotate?`rotate(${info.rotate}deg)`:"rotate(0deg)",




        }} className='absolute group hover:border-[2px] hover:border-indigo-500'>
         
            <Element id={randValue} info={info} exId=""/>
            <div id={`${randValue}c`} className='rounded-full' 
            style={{
                width:info.width+"px",
                height:info.height+"px",
                background:info.color,
                opacity:info.opacity,
            }}
            >

            </div>
            {
                currentComponent.id===info.id && <div onClick={()=>removeComponent(info.id)} className='px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md'><TbTrash/></div>
            }

        </div>
    }
    if(info.name==="text"){
        html =  <div id={randValue} onClick={()=>info.setCurrentComponent(info)}
        style={{
           
           
            left:info.left +"px",
            top:info.top +"px",
            zIndex:info.z_index,
            padding:info.padding+"px",
            color:info.color,
            opacity:info.opacity,

            transform:info.rotate?`rotate(${info.rotate}deg)`:"rotate(0deg)",




        }} className='absolute group hover:border-[2px] hover:border-indigo-500'>
         
            <Element id={randValue} info={info} exId=""/>
            <h2 style={{fontSize:info.font+"px",fontWeight:info.weight+"px",}} className='w-full h-full'>{info.title}</h2>
            {
                currentComponent.id===info.id && <div onClick={()=>removeComponent(info.id)} className='px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md'><TbTrash/></div>
            }

        </div>
    }
    if (info.name==='image'){
        html =  <div id={randValue} onClick={()=>info.setCurrentComponent(info)}
        style={{
           
           
            left:info.left +"px",
            top:info.top +"px",
            zIndex:info.z_index,
           
            opacity:info.opacity,

            transform:info.rotate?`rotate(${info.rotate}deg)`:"rotate(0deg)",




        }} className='absolute group hover:border-[2px] hover:border-indigo-500'>
         
            <Element id={randValue} info={info} exId={`${randValue}img`}/>
            <div id={`${randValue}img`} className='rounded-full' 
            style={{
                width:info.width+"px",
                height:info.height+"px",
                borderRadius:`${info.radius}%`
            }}
            >
                <img className='w-full h-full' src={info.image} alt='img'/>

            </div>
            {
                currentComponent.id===info.id && <div onClick={()=>removeComponent(info.id)} className='px-3 py-2 bg-white absolute top-0 hidden group-hover:block cursor-pointer rounded-md'><TbTrash/></div>
            }

        </div>
    }
  return html
}

export default CreateComponent
