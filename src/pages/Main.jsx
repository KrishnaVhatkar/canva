import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { BsGrid1X2 } from 'react-icons/bs'
import { FaFolder, FaImage, FaShapes } from 'react-icons/fa'
import { BsFillCloudUploadFill } from "react-icons/bs";
import { RxTransparencyGrid } from 'react-icons/rx';
import { TfiText } from 'react-icons/tfi';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import TemplateDesign from "../component/main/TemplateDesign.jsx"
import MyImages from '../component/MyImages.jsx';
import Project from '../component/Project.jsx';
import Image from '../component/Image.jsx';
import CreateComponent from '../component/CreateComponent.jsx';

const Main = () => {
    const [state,setState]= useState("")
    const [currentComponent,setCurrentComponent] = useState("")
    const [color,setColor] = useState("")
    const [image,setImage] = useState("")
    const [rotate,setRotate] = useState(0);
    const [left,setLeft] = useState('');
    const [top,setTop] = useState('');
    const [height,setHeight] = useState('');
    const [width,setWidth] = useState('');
    const [padding,setPadding] =useState("")
    const [font,setFont] = useState("")
    const [weight,setWeight] = useState("")
    const [opacity,setOpacity] =useState("");
    const [zIndex,setZIndex] =useState("");
    const [title,setTitle] =useState("");
    const [radius,setRadius] =useState(0);
    const [show,setShow] = useState({
        status:true,
        name:""
    })
    const setElements = (type,name)=>{
        setState(type)
        setShow({
            status:false,
            name
        })
    }
    const moveElement = (id,currentInfo)=>{
        // console.log("move",currentInfo,id)
        setCurrentComponent(currentInfo);

        let isMoving =true;
        const currentDiv = document.getElementById(id);

        const mouseMove = ({movementX,movementY})=>{
            const getStyle = window.getComputedStyle(currentDiv);
            const left = parseInt(getStyle.left)
            const top = parseInt(getStyle.top)
            console.log(left);
            if (isMoving){
                currentDiv.style.left = `${left + movementX}px`
                currentDiv.style.top = `${top + movementY}px`
            }
            // console.log(movementX,movementY)
        }
        const mouseUp = (e)=>{
            isMoving=false
            window.removeEventListener('mousemove',mouseMove)
            window.removeEventListener('mouseup',mouseUp)
            setLeft(parseInt(currentDiv.style.left))
            setTop(parseInt(currentDiv.style.top))
        }

        window.addEventListener('mousemove',mouseMove)
        window.addEventListener('mouseup',mouseUp)

    }
    const addText = (name,type)=>{
        const style = {
            id:component.length+1,
            name:name,
            type:type,
            left:10,
            top:10,
            opacity:1,
           padding:6,
           font:22,
           weight:400,
           title:"Add a text",
            rotate,
            z_index:10,
            color:"#3c3c3d",
            setCurrentComponent : (a)=>setCurrentComponent(a),
           
            moveElement,
            resizeElement,
            rotateElement
        }
        setWeight("")
        setFont("")
        setCurrentComponent(style)
        setComponent([...component,style])
    }
    const resizeElement = (id,currentInfo)=>{
          // console.log("move",currentInfo,id)
          setCurrentComponent(currentInfo);

          let isMoving =true;
          const currentDiv = document.getElementById(id);
  
          const mouseMove = ({movementX,movementY})=>{
              const getStyle = window.getComputedStyle(currentDiv);
              const width = parseInt(getStyle.width)
              const height = parseInt(getStyle.height)
            //   console.log(left);
              if (isMoving){
                  currentDiv.style.width = `${width + movementX}px`
                  currentDiv.style.height = `${height + movementY}px`
              }
              // console.log(movementX,movementY)
          }
          const mouseUp = (e)=>{
              isMoving=false
              window.removeEventListener('mousemove',mouseMove)
              window.removeEventListener('mouseup',mouseUp)
              setHeight(parseInt(currentDiv.style.height))
              setWidth(parseInt(currentDiv.style.width))
          }
  
          window.addEventListener('mousemove',mouseMove)
          window.addEventListener('mouseup',mouseUp)
    }
    const rotateElement = (id,currentInfo)=>{
        setCurrentComponent("");
        setCurrentComponent(currentInfo);
        const target = document.getElementById(id);

        const mouseMove = ({movementX,movementY})=>{
            const getStyle = window.getComputedStyle(target);
            const trans = getStyle.transform
            
            const values = trans.split("(")[1].split(")")[0].split(",")

            const angle = Math.round(Math.atan2(values[1],values[0])*(180/Math.PI))
            let deg = angle<0?angle+360:angle;

            if(movementX){
                deg = deg+movementX
            }
            target.style.transform = `rotate(${deg}deg)`
        }
        const mouseUp = (e)=>{
            document.removeEventListener('mousemove',mouseMove)
            document.removeEventListener('mouseup',mouseUp)
              const getStyle = window.getComputedStyle(target);
              const trans = getStyle.transform
              
              const values = trans.split("(")[1].split(")")[0].split(",")
  
              const angle = Math.round(Math.atan2(values[1],values[0])*(180/Math.PI))
            //   console.log(angle);
              let deg = angle<0?angle+360:angle;
              setRotate(deg)
        }
        document.addEventListener('mousemove',mouseMove)
        document.addEventListener('mouseup',mouseUp)
    }

    const [component,setComponent] = useState([{
        name:"main_frame",
        type:"react",
        id:Math.floor((Math.random()*100) +1),
        height:450,
        width:650,
        z_index:1,
        color:"#fff",
        image:"",
        opacity:1,
        setCurrentComponent : (a)=>setCurrentComponent(a)

        
    }])

    const removeComponent = (id)=>{
        const temp = component.filter(c=>c.id!==id);
        setCurrentComponent('');
        setComponent(temp)
        console.log('removeComponent')
    }
 
    // console.log(currentComponent);
    const removeBackground = () => {
        if (!currentComponent || !currentComponent.id) {
          console.error("No current component selected.");
          return;
        }
      
        // Find the component with the matching ID
        const index = component.findIndex(c => c.id === currentComponent.id);
        if (index === -1) {
          console.error("Component not found in the list.");
          return;
        }
      
        // Create a copy of the component and update its image
        const updatedComponent = { ...component[index], image: '' };
      
        // Update the component list
        const updatedComponents = [...component];
        updatedComponents[index] = updatedComponent;
      
        // Update the state
        setImage(""); // Clear the image state
        setComponent(updatedComponents); // Update the component array
        setCurrentComponent(updatedComponent); // Update the currentComponent state
      };

    const createShape = (name,type)=>{
        const style = {
            id:component.length+1,
            name:name,
            type:type,
            left:10,
            top:10,
            opacity:1,
            width:200,
            height:200,
            rotate,
            z_index:2,
            color:"#3c3c3d",
            setCurrentComponent : (a)=>setCurrentComponent(a),
            removeBackground:()=>setImage(""),
            moveElement,
            resizeElement,
            rotateElement


        }
        setComponent([...component,style])
    }
    const opacityHandle = (e) => {
        const newOpacity = parseFloat(e.target.value);
      
        // Update the `currentComponent`
        const updatedCurrentComponent = {
          ...currentComponent,
          opacity: newOpacity,
        };
      
        // Find the index of the current component in the array
        const index = component.findIndex((c) => c.id === currentComponent.id);
      
        if (index !== -1) {
          // Update the component array immutably
          const updatedComponents = [...component];
          updatedComponents[index] = updatedCurrentComponent;
      
          // Update the state
          setComponent(updatedComponents);
          setCurrentComponent(updatedCurrentComponent); // Keep it in sync
        }
      
        setOpacity(newOpacity);
      };
    const handleFontWeight = (e) => {
        const newOpacity = parseFloat(e.target.value);
      
        // Update the `currentComponent`
        const updatedCurrentComponent = {
          ...currentComponent,
          weight: newOpacity,
        };
      
        // Find the index of the current component in the array
        const index = component.findIndex((c) => c.id === currentComponent.id);
      
        if (index !== -1) {
          // Update the component array immutably
          const updatedComponents = [...component];
          updatedComponents[index] = updatedCurrentComponent;
      
          // Update the state
          setComponent(updatedComponents);
          setCurrentComponent(updatedCurrentComponent); // Keep it in sync
        }
      
        setWeight(newOpacity);
      };
    const handleTitleChange = (e) => {
        const newOpacity = (e.target.value);
      
        // Update the `currentComponent`
        const updatedCurrentComponent = {
          ...currentComponent,
          title: newOpacity,
        };
      
        // Find the index of the current component in the array
        const index = component.findIndex((c) => c.id === currentComponent.id);
      
        if (index !== -1) {
          // Update the component array immutably
          const updatedComponents = [...component];
          updatedComponents[index] = updatedCurrentComponent;
      
          // Update the state
          setComponent(updatedComponents);
          setCurrentComponent(updatedCurrentComponent); // Keep it in sync
        }
      
        setTitle(newOpacity);
      };
    const handleTextSize = (e) => {
        const newOpacity = parseFloat(e.target.value);
      
        // Update the `currentComponent`
        const updatedCurrentComponent = {
          ...currentComponent,
          font: newOpacity,
        };
      
        // Find the index of the current component in the array
        const index = component.findIndex((c) => c.id === currentComponent.id);
      
        if (index !== -1) {
          // Update the component array immutably
          const updatedComponents = [...component];
          updatedComponents[index] = updatedCurrentComponent;
      
          // Update the state
          setComponent(updatedComponents);
          setCurrentComponent(updatedCurrentComponent); // Keep it in sync
        }
      
        setFont(newOpacity);
      };
    const handleTextPadding = (e) => {
        const newPadding = parseInt(e.target.value);
      
        // Update the `currentComponent`
        const updatedCurrentComponent = {
          ...currentComponent,
          padding: newPadding,
        };
      
        // Find the index of the current component in the array
        const index = component.findIndex((c) => c.id === currentComponent.id);
      
        if (index !== -1) {
          // Update the component array immutably
          const updatedComponents = [...component];
          updatedComponents[index] = updatedCurrentComponent;
      
          // Update the state
          setComponent(updatedComponents);
          setCurrentComponent(updatedCurrentComponent); // Keep it in sync
        }
      
        setPadding(newPadding);
      };
      const addImage = (img)=>{
        const style = {
            id:component.length+1,
            name:"image",
            type:"image",
            left:10,
            top:10,
            opacity:1,
            width:200,
            height:150,
            rotate,
            z_index:10,
            image:img,
            radius:0, 

            setCurrentComponent : (a)=>setCurrentComponent(a),
            removeBackground:()=>setImage(""),
            moveElement,
            resizeElement,
            rotateElement


        }
        setCurrentComponent(style)
        setComponent([...component,style])
      }
    const handleZIndex = (e) => {
        const newPadding = parseInt(e.target.value);
      
        // Update the `currentComponent`
        const updatedCurrentComponent = {
          ...currentComponent,
          z_index: newPadding,
        };
      
        // Find the index of the current component in the array
        const index = component.findIndex((c) => c.id === currentComponent.id);
      
        if (index !== -1) {
          // Update the component array immutably
          const updatedComponents = [...component];
          updatedComponents[index] = updatedCurrentComponent;
      
          // Update the state
          setComponent(updatedComponents);
          setCurrentComponent(updatedCurrentComponent); // Keep it in sync
        }
      
        setZIndex(newPadding);
      };
      
      
    console.log("current",currentComponent);
    useEffect(() => {

        if (!currentComponent) return;
        const index = component.findIndex(c => c.id === currentComponent.id);
       
        if(currentComponent.name!=="text"){
            component[index].height = height || currentComponent.height
            component[index].width = width || currentComponent.width
            component[index].rotate = rotate || currentComponent.rotate
        }
      
       
      console.log("name",currentComponent.name)
     

        if (currentComponent.name!=='main_frame'){
            console.log("not main")
            component[index].left = left || currentComponent.left
            component[index].top = top || currentComponent.top
            component[index].rotate = rotate || currentComponent.rotate
            component[index].opacity = opacity || currentComponent.opacity
            component[index].z_index = zIndex || currentComponent.z_index
            console.log( component[index].z_index );
        }

        const updatedComponent = {
            ...component[index],
            color: color || component[index].color,
            image: currentComponent.name === "main_frame" ? image || component[index].image : component[index].image,
          };
        
          const updatedComponents = [...component];
          updatedComponents[index] = updatedComponent;
      
        setComponent(updatedComponents);

        setTop("")
        setColor("")
        setLeft("")
        setHeight("")
        setWidth("")
        setRotate(0)
        setOpacity("")
      }, [color, image,left,top,width,height,rotate,opacity,zIndex]);
    //   console.log(opacity)
  return (
    <>
    <div className='min-w-screen h-screen bg-black '>

      <Header/>
      <div className='flex h-[calc(100%-60px)] w-screen scrollbar-hidden'>
        <div className='w-[80px] bg-[#18191B] z-50 h-full text-gray-400 overflow-y-hidden overflow-x-hidden  '>
            <div onClick={()=>setElements('design','design')} className={`w-full ${show.name==="design"?'bg-[#252627]':""} h-[80px] cursor-pointer flex flex-col items-center gap-1  hover:text-gray-100 justify-center`}>
                <span><BsGrid1X2/></span>
                <span>Design</span>
            </div>
            <div onClick={()=>setElements('shape','shape')} className={`w-full ${show.name==="shape"?'bg-[#252627]':""} h-[80px] cursor-pointer flex flex-col items-center gap-1  hover:text-gray-100 justify-center`}>
                <span><FaShapes/></span>
                <span>Shapes</span>
            </div>
            <div onClick={()=>setElements('upload','upload')} className={`w-full ${show.name==="upload"?'bg-[#252627]':""} h-[80px] cursor-pointer flex flex-col items-center gap-1  hover:text-gray-100 justify-center`}>
                <span><BsFillCloudUploadFill/></span>
                <span>Upload</span>
            </div>
            <div onClick={()=>setElements('text','text')} className={`w-full ${show.name==="text"?'bg-[#252627]':""} h-[80px] cursor-pointer flex flex-col items-center gap-1  hover:text-gray-100 justify-center`}>
                <span><TfiText/></span>
                <span>Text</span>
            </div>
            <div onClick={()=>setElements('project','project')} className={`w-full ${show.name==="project"?'bg-[#252627]':""} h-[80px] cursor-pointer flex flex-col items-center gap-1  hover:text-gray-100 justify-center`}>
                <span><FaFolder/></span>
                <span>Project</span>
            </div>
            <div onClick={()=>setElements('image','image')} className={`w-full ${show.name==="image"?'bg-[#252627]':""} h-[80px] cursor-pointer flex flex-col items-center gap-1  hover:text-gray-100 justify-center`}>
                <span><FaImage/></span>
                <span>Images</span>
            </div>
            <div onClick={()=>setElements('bg','bg')} className={`w-full ${show.name==="bg"?'bg-[#252627]':""} h-[80px] cursor-pointer flex flex-col items-center gap-1  hover:text-gray-100 justify-center`}>
                <span><RxTransparencyGrid/></span>
                <span>BackGround</span>
            </div>
        </div>
        <div className='h-full w-[calc(100%-75px)]'>
<div className={`${show.status?'p-0 -left-[350px]':'px-8 left-[75px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}>
    <div onClick={()=>setShow({status:true,name:""})} className='flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full '><MdKeyboardArrowLeft/></div>
{
    state==="design" &&
     <div className='grid grid-cols-2 gap-2'>
        <TemplateDesign/>
     </div>
}
{
    state==="shape" &&
     <div className='grid grid-cols-3 gap-2'>
        <div onClick={()=>createShape("shape","rect")} className='h-[90px] bg-[#3c3c3d] cursor-pointer '>
            </div>
        <div onClick={()=>createShape("shape","circle")} className='h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full'>
            </div>
            <div onClick={()=>createShape("shape","triangle")} style={{clipPath:"polygon(50% 0,100% 100%,0 100%)"}} className='h-[90px] bg-[#3c3c3d] cursor-pointer '>
            </div>
     </div>
}
{
    state==="upload" && <MyImages/>
}
{
    state==="text" &&
     <div className='grid grid-cols-1 gap-2'>
        <div onClick={()=>addText('text','title')} className='bg-[#3c3c3d] cursor-pointer font-bold p-3 text-white text-xl rounded-sm'>
            <h2>Add a text</h2>
        </div>
     </div>
}
{
    state==="project" && <Project/>
}
{
    state==="image" && <div className='h-[88vh] overflow-x-auto scrollbar-hide flex justify-start items-start'>
    <Image addImage= {addImage}/>
          </div>
}
{
    state==="bg" &&
    <div className='h-[88vh] overflow-x-auto scrollbar-hide flex justify-start items-start'>
    <div className='grid grid-cols-2 gap-2 '>
    {
  [1,2,3,4,2,4,6,7,8,4,32,4,23,45,34,23,45,5].map((item,index)=>(
  <div key={index} onClick={()=>setImage("https://placehold.co/600x400")} className='w-full overflow-hidden rounded-sm cursor-pointer h-[90px]'>
<img src="https://placehold.co/600x400" className='w-full h-full object-fill' alt=""/>
  </div>
))
}
    </div>
          </div>
}
</div>
<div className='w-full flex h-full'>
<div className={`flex justify-center relative items-center h-full ${!currentComponent?"w-full":"w-[calc(100%-250px)]"} overflow-hidden`}>
<div className='min-w-[650px] min-h-[480px] flex justify-center items-center overflow-hidden '>
<div id="main_design" className='w-auto relative h-auto overflow-hidden'>
{
    component.map((c,i)=><CreateComponent key={i} info={c} currentComponent={currentComponent} removeComponent={removeComponent}/>)
}
</div>
</div>
</div>
{
    currentComponent && <div className='h-full w-[250px]  bg-[#252627] text-gray-300 px-3 py-2 '>
<div className='flex gap-3 flex-col items-start h-full px-3 justify-start'>
<div className='flex gap-4 justify-start items-start'>
<span>Color: </span>
<label className='w-[30px] h-[30px] rounded-sm cursor-pointer' htmlFor='color' style={{background:`${currentComponent.color && currentComponent !=="#fff" ? currentComponent.color:"gray"}`}}></label>
<input onChange={(e)=>setColor(e.target.value)} type="color" className='invisible' id="color"/>
</div>
{
    (currentComponent.name==="main_frame" && image) && <div>
        <button className='p-[6px] text-white bg-slate-700 rounded-md' onClick={removeBackground}>Remove Background</button>
    </div>
}
{
    currentComponent.name!=="main_frame"  && <div className='flex gap-3 flex-col'>
<div className='flex gap-1 justify-start items-start'>
<span className='text-md w-[70px] '>Opcity: </span>
<input onChange={opacityHandle} type='number' className='w-[70px] border-gray-700 bg-transparent outline-none px-2 rounded-md ' step={0.1} min={0.1} max={1} value={currentComponent.opacity}/>
</div>
    </div>
}
{
    currentComponent.name!=="main_frame"  && <><div className='flex gap-6 flex-col'>
<div className='flex gap-1 justify-start items-start'>
<span className='text-md w-[70px] '>Z-Index: </span>
<input onChange={(e)=>setZIndex(parseInt(e.target.value))} type='number' className='w-[70px] border-gray-700 bg-transparent outline-none px-2 rounded-md ' step={1}  value={currentComponent.z_index}/>
</div>
    </div>
    {
        currentComponent.name==='text' && <>
         <div className='flex gap-6 flex-col'>
<div className='flex gap-1 justify-start items-start'>
<span className='text-md w-[70px] '>Padding: </span>
<input onChange={handleTextPadding} type='number' className='w-[70px] border-gray-700 bg-transparent outline-none px-2 rounded-md ' step={1}  value={currentComponent.padding}/>
</div>
    </div>
         <div className='flex gap-6 flex-col'>
<div className='flex gap-1 justify-start items-start'>
<span className='text-md w-[70px] '> Size: </span>
<input onChange={handleTextSize} type='number' className='w-[70px] border-gray-700 bg-transparent outline-none px-2 rounded-md ' step={1}  value={currentComponent.font}/>
</div>
    </div>
         <div className='flex gap-6 flex-col'>
<div className='flex gap-1 justify-start items-start'>
<span className='text-md w-[70px] '> Weight: </span>
<input onChange={handleFontWeight} type='number' className='w-[70px] border-gray-700 bg-transparent outline-none px-2 rounded-md ' step={100} min={100} max={900}  value={currentComponent.weight}/>
</div>
    </div>
         <div className='flex gap-8 flex-col'>
<div className='flex gap-1 justify-start items-start border-gray-400'>

<input onChange={handleTitleChange} type='text' className='border  border-gray-700 bg-transparent outline-none px-2 py-2 rounded-md 'value={currentComponent.title}/>
</div>
    </div>
        </>
    }
    </> 
}
</div>
    </div>
}
</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main
