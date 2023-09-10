import React, { useRef, useState } from 'react';
import "./index.scss";
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Button, FormControl, Input, MenuItem, Select, TextField, Typography } from '@mui/material';
import MultipleOptions from './components/MultipleOptions';
import {useStore} from "./store";
import Checkbox from '@mui/material/Checkbox';
import EmailCondition from './components/EmailCondition';

export default function ConditionBar(){
  const ref = useRef(null)
  const [count,setCount] = useState({
    id1: true,
    id2: false,
    id3: false,
    id4: false,
    id5: false
  })
    const [inputObj, setInputObj] = useState({
      name: '',
      subject: '',
      from: '',
      sender: ''
    })
    const [activity, setActivity] = React.useState('');

    const handleChange = (event) => {
      setActivity(event.target.value);
    };
  
    const [flag,setFlag] = useState(1)
    //   const reactFlowInstance = useReactFlow();
    //   const onClick = useCallback(() => {
    //     const id = `${++nodeId}`;
    //     const newNode = {
    //       id,
    //       position: {
    //         x: 0,
    //         y: 0,
    //       },
    //       data: {
    //         title: "Trigger",
    //         description: `${labelObj.label1} || ${labelObj.label2} || ${labelObj.label3}`,
    //         stats: {
    //           started: 0,
    //         },
    //       },
    //     };
    //     reactFlowInstance.addNodes(newNode);
    //   }, []);
   

    // const initialElements= [
    //   {
    //     id: "1",
    //     data: { label: `${labelObj.label1 || labelObj.label2 || labelObj.label3}` },
    //     style: {
    //       fontSize: "var(--font-16)",
    //       fontWeight: "500",
    //     },
    //     position: { x: 0, y: 0 },
    //   },
    //   {
    //     id: "2",
    //     data: { label: "Node 3" },
    //     type: "selectorNode",
    //     position: { x: 0, y: 0 },
    //   },
    //   {
    //     id: "1-2",
    //     source: "1",
    //     target: "2",
    //     type: "smoothedge",
    //   },
    // ]
    // const handleAddTrigger = ()=>{
    //   console.log('handleAddTrigger')
    //   useStore.getState().handleNode({
    //     type: "INITIAL_ELEMENTS",
    //     initialElements: initialElements,
    //   })
    // }
    console.log(count.length)
    const handleChangeName = (event)=>{
      setInputObj({ ...inputObj,
        name: event.target.value})
    }
    const handleChangeSub = (event)=>{
      setInputObj({ ...inputObj,
        subject: event.target.value})
    }
    const handleChangeFrom = (event)=>{
      setInputObj({ ...inputObj,
        from: event.target.value})
    }
    const handleChangeSender = (event)=>{
      setInputObj({ ...inputObj,
        sender: event.target.value})
    }

    const handleClick = ()=>{
      if(!count.id1){
        setCount({...count, id1: true})
        setFlag(state => state + 1)
        return
      }
      if(!count.id2){
        setCount({...count, id2: true})
        setFlag(state => state + 1)
        return
      }
      if(!count.id3){
        setCount({...count, id3: true})
        setFlag(state => state + 1)
        return
      }
      if(!count.id4){
        setCount({...count, id4: true})
        setFlag(state => state + 1)
        return
      }
      if(!count.id5){
        setCount({...count, id5: true})
        setFlag(state => state + 1)
        return
      }
    }

    
    const handleDelete = (e) => {
      console.log(e.target.id, count)
      switch(e.target.id){
        case '1':
          setCount({...count, id1: false})
          setFlag(state => state - 1)
          return
        case '2':
          setCount({...count, id2: false})
          setFlag(state => state - 1)
          return
        case '3':
          setCount({...count, id3: false})
          setFlag(state => state - 1)
          return
        case '4':
          setCount({...count, id4: false})
          setFlag(state => state - 1)
          return
        case '5':
          setCount({...count, id5: false})
          setFlag(state => state - 1)
          return
      }
    }

      const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#627dde',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#E9E9EA',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));
    
      const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className='flex flex-col justify-between items-start py-[32px] bg-white drop-shadow-lg h-[100vh]'>
          <div className='my-0 flex flex-col w-full items-center space-y-[24px]'>
            <Typography sx={{
              fontSize: '14px'
            }}>Step</Typography>
            <div className='w-full h-[1px] rounded-full bg-[#343638] opacity-[10%]'/>
          </div>

          <div className='flex flex-col items-start pt-[24px] px-[24px] space-y-[24px] overflow-y-auto'>
            <div className='w-[320px]'>
              <Typography sx={{
                      fontSize: '14px'
                    }}>Add up to 5 conditions. Define whether any or all of them must be applicable, for the condition to be met.</Typography>
            </div>
            <div className='flex-col w-[260px]'>
                <div className='flex items-start'>
                  <Checkbox sx={{
                    padding: 0,
                    margin: 0
                  }}/>
                  <div className='flex flex-col'>
                    <Typography sx={{
                      fontSize: '14px'
                    }}>Any Rule</Typography>
                    <Typography sx={{
                      fontSize: '14px'
                    }}>Select one or a few conditions where ANY rule can match the criteria</Typography>
                  </div>
                </div>
                <div className='flex items-start'>
                  <Checkbox sx={{
                    padding: 0,
                    margin: 0
                  }}/>
                  <div className='flex flex-col'>
                    <Typography sx={{
                      fontSize: '14px'
                    }}>All Rules</Typography>
                    <Typography sx={{
                      fontSize: '14px'
                    }}>Select one or a few conditions where ALL rules must match the criteria.</Typography>
                  </div>
                </div>
              {count.id1 && <div>
                <EmailCondition flag={flag} id={1} handleDelete={handleDelete}/>
              </div>}
            </div>
            {count.id2 && <>
              <div className='flex flex-row space-x-[8px] px-[24px] items-center justify-between'>
                  <h1 className='font-inter opacity-[60%] text-[12px]'>OR</h1>
                  <div className='w-full h-[1px] rounded-full bg-[#4e89c4] opacity-[50%]'></div>
                </div>
            <EmailCondition flag={flag} id={2} handleDelete={handleDelete}/>
            </>}
            {count.id3 && <>
                <div className='flex flex-row space-x-[8px] px-[24px] items-center justify-between'>
                  <h1 className='font-inter opacity-[60%] text-[12px]'>OR</h1>
                  <div className='w-full h-[1px] rounded-full bg-[#4e89c4] opacity-[50%]'></div>
                </div> 
                <EmailCondition flag={flag} id={3} handleDelete={handleDelete}/>
                </>}
            {count.id4 && <>
              <div className='flex flex-row space-x-[8px] px-[24px] items-center justify-between'>
                  <h1 className='font-inter opacity-[60%] text-[12px]'>OR</h1>
                  <div className='w-full h-[1px] rounded-full bg-[#4e89c4] opacity-[50%]'></div>
                </div>
            <EmailCondition flag={flag} id={4} handleDelete={handleDelete}/>
            </>}
            {count.id5 && <>
              <div className='flex flex-row space-x-[8px] px-[24px] items-center justify-between'>
                  <h1 className='font-inter opacity-[60%] text-[12px]'>OR</h1>
                  <div className='w-full h-[1px] rounded-full bg-[#4e89c4] opacity-[50%]'></div>
                </div>
            <EmailCondition flag={flag} id={5} handleDelete={handleDelete}/>
            </>}
              {count.id5 ? <div className='mx-[24px] px-[8px] py-[2px] bg-[#e9eaeb] text-[#929496] rounded-md w-[150px] flex flex-row items-center justify-between opacity-50 cursor-not-allowed'>
              <img src="https://img.icons8.com/android/24/plus.png" className='w-[12px] h-[12px]' alt=''/>
              <button className='text-black font-inter text-[12px] cursor-not-allowed'>Add another trigger</button>
            </div> : <div className='px-[8px] py-[2px] bg-[#d3d6d9] rounded-md w-[150px] flex flex-row items-center justify-between cursor-pointer'>
              <img src="https://img.icons8.com/android/24/plus.png" className='w-[12px] h-[12px]' alt=''/>
              <button className='text-black font-inter text-[12px]' onClick={handleClick}>Add another trigger</button>
            </div>
            }
            <div>

            </div>
          </div>
          {/* <div className='flex flex-col overflow-y-auto pt-[32px]'>
            <div className='flex flex-col justify-between items-start space-y-[5px] max-w-[340px] px-[24px]'>
              <h1 className= 'font-semiBold text-black font-inter text-[12px]'>Create Workflow Trigger</h1>
              <p className='font-normal font-inter text-[12px]'>Add upto 3 triggers. Define which actions will start your subscriber journey</p>
            </div>
            <div className='mx-[24px] my-[24px] p-[12px] rounded-[5px] border-[#343638] border w-[350px] flex flex-col border-opacity-10'>
              <div className='flex flex-row justify-between items-center px-[8px]'>
                <button>Trigger</button>
                {count > 1 && <button className='px-[8px] py-[2px] bg-[#d3d6d9] rounded-md flex flex-row items-center justify-between cursor-pointer font-inter text-[12px]' onClick={handleDelete}>Delete</button>}
              </div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select value={labelObj.label1} onChange={handleChange1}
                renderValue={(selected) => {
                            return <em>{labelObj.label1}</em>
                        }} 
                >
                  {data.map((item)=>{
                    return(
                        <MenuItem value = {item.value}>
                          <div className='flex flex-row justify-between items-start whitespace-normal space-x-[8px]'>
                            <img className='w-[16px] h-[16px]' src={item.image} alt=''/>
                            <div className='flex flex-col w-[300px]'>
                              <h1 className='font-semiBold font-inter text-[12px]'>{item.value}</h1>
                              <p className='font-inter text-[10px] opacity-80'>{item.description}</p>
                            </div>
                          </div>
                        </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <MultipleOptions label={labelObj.label1}/>
            </div>
            {count >= 2 && <>
              <div className='flex flex-row space-x-[8px] px-[24px] items-center justify-between'>
              <h1 className='font-inter opacity-[60%] text-[12px]'>OR</h1>
              <div className='w-full h-[1px] rounded-full bg-[#343638] opacity-[10%]'></div>
            </div>
            <div className='mx-[24px] my-[24px] p-[12px] rounded-[5px] border-[#343638] border w-[350px] flex flex-col border-opacity-10'>
              <div className='flex flex-row justify-between items-center px-[8px]'>
                <button>Trigger</button>
                <button className='px-[8px] py-[2px] bg-[#d3d6d9] rounded-md flex flex-row items-center justify-between cursor-pointer font-inter text-[12px]' onClick={handleDelete}>Delete</button>
              </div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select value={labelObj.label2} onChange={handleChange2}
                renderValue={(selected) => {
                            return <em>{labelObj.label2}</em>
                        }}
                >
                  {data.map((item)=>{
                    return(
                        <MenuItem value={item.value}>
                          <div className='flex flex-row justify-between items-start whitespace-normal space-x-[8px]'>
                            <img className='w-[16px] h-[16px]' src={item.image} alt=''/>
                            <div className='flex flex-col w-[300px]'>
                              <h1 className='font-semiBold font-inter text-[12px]'>{item.value}</h1>
                              <p className='font-inter text-[10px] opacity-80'>{item.description}</p>
                            </div>
                          </div>
                        </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <MultipleOptions label={labelObj.label2}/>
            </div>
            </>}
            {count >= 3 && <>
              <div className='flex flex-row space-x-[8px] px-[24px] items-center justify-between'>
              <h1 className='font-inter opacity-[60%] text-[12px]'>OR</h1>
              <div className='w-full h-[1px] rounded-full bg-[#343638] opacity-[10%]'></div>
            </div>
            <div className='mx-[24px] my-[24px] p-[12px] rounded-[5px] border-[#343638] border w-[350px] flex flex-col border-opacity-10'>
              <div className='flex flex-row justify-between items-center px-[8px]'>
                <button>Trigger</button>
                <button className='px-[8px] py-[2px] bg-[#d3d6d9] rounded-md flex flex-row items-center justify-between cursor-pointer font-inter text-[12px]' onClick={handleDelete}>Delete</button>
              </div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select 
                value={labelObj.label3} 
                onChange={handleChange3}
                renderValue={(selected) => {
                            return <em>{labelObj.label3}</em>
                        }} 
                >
                  {data.map((item)=>{
                    return(
                        <MenuItem value = {item.label}>
                          <div className='flex flex-row justify-between items-start whitespace-normal space-x-[8px]'>
                            <img className='w-[16px] h-[16px]' src={item.image} alt=''/>
                            <div className='flex flex-col w-[300px]'>
                              <h1 className='font-semiBold font-inter text-[12px]'>{item.value}</h1>
                              <p className='font-inter text-[10px] opacity-80'>{item.description}</p>
                            </div>
                          </div>
                        </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <MultipleOptions label={labelObj.label3}/>
            </div>
            </>}
            {count >= 3 ? <div className='mx-[24px] px-[8px] py-[2px] bg-[#e9eaeb] text-[#929496] rounded-md w-[150px] flex flex-row items-center justify-between opacity-50 cursor-not-allowed'>
              <img src="https://img.icons8.com/android/24/plus.png" className='w-[12px] h-[12px]' alt=''/>
              <button className='text-black font-inter text-[12px] cursor-not-allowed'>Add another trigger</button>
            </div> : <div className='mx-[24px] px-[8px] py-[2px] bg-[#d3d6d9] rounded-md w-[150px] flex flex-row items-center justify-between cursor-pointer'>
              <img src="https://img.icons8.com/android/24/plus.png" className='w-[12px] h-[12px]' alt=''/>
              <button className='text-black font-inter text-[12px]' onClick={handleClick}>Add another trigger</button>
            </div>
            }
            
            <div className='max-w-[350px] mx-[24px] my-[24px]'>
              
            </div>
          </div> */}
          <div className='flex flex-col w-full'>
            <div className='w-full h-[1px] rounded-full bg-[#343638] my-[32px] opacity-[10%]'/>
            <div className='flex flex-row space-x-[24px] justify-center items-center mx-[24px]'>
              <button className='px-[24px] py-[8px] text-[14px] rounded-sm font-inter'>Cancel</button>
              <button className='px-[24px] py-[8px] text-[14px] bg-[#627dde] text-white rounded-md font-inter'>Save</button>
            </div>
          </div>
        </div>

    )
}