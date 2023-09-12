import React, { useState } from 'react';
import "./index.scss";
import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import {useStore} from "./store";
import Checkbox from '@mui/material/Checkbox';
import ButtonCross from './flowcomponents/ButtonCross';

export default function EmailBar(){
    const [inputObj, setInputObj] = useState({
      name: '',
      subject: '',
      from: '',
      sender: ''
    })
  
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


    const handleOnClick = ()=>{
      useStore.getState().handlePopupName({
        type: "HANDLE_POPUP_NAME", popUpName: 'right'
      })
    }
    
    
      const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className='flex flex-col justify-between items-start py-[32px] bg-white drop-shadow-lg h-[100vh]'>
          <div className='my-0 flex flex-col w-full items-center space-y-[24px]'>
            <div className='flex items-end justify-between w-full px-[24px]'>
            <Typography sx={{
              fontSize: '14px'
            }}>Step</Typography>
            <ButtonCross onClick={handleOnClick}/>
            </div>
            <div className='w-full h-[1px] rounded-full bg-[#343638] opacity-[10%]'/>
          </div>

          <div className='flex flex-col items-start pt-[24px] px-[24px] space-y-[24px] overflow-y-auto'>
            <div>
              <Typography sx={{
                fontSize: '14px',
              }}>Name</Typography>
              <TextField
                  value={inputObj.name}
                  onChange={handleChangeName}
                  sx={{
                    width: '320px',
                    paddingRight: '0',
                    marginRight: '0',
                  }}
                  size="normal"
                  variant="outlined"
              />
            </div>
            <div>
              <Typography sx={{
                fontSize: '14px',
              }}>Subject</Typography>
              <TextField
                  value={inputObj.subject}
                  onChange={handleChangeSub}
                  sx={{
                    width: '320px',
                    paddingRight: '0',
                    marginRight: '0',
                  }}
                  size="normal"
                  variant="outlined"
              />
            </div>
            <div>
              <Typography sx={{
                fontSize: '14px',
              }}>Who is it from?</Typography>
              <TextField
                  value={inputObj.from}
                  onChange={handleChangeFrom}
                  sx={{
                    width: '320px',
                    paddingRight: '0',
                    marginRight: '0',
                  }}
                  size="normal"
                  variant="outlined"
              />
            </div>
            <div>
              <Typography sx={{
                fontSize: '14px',
              }}>Sender Mail</Typography>
              <TextField
                  value={inputObj.sender}
                  onChange={handleChangeSender}
                  sx={{
                    width: '320px',
                    paddingRight: '0',
                    marginRight: '0',
                  }}
                  size="normal"
                  variant="outlined"
              />
            </div>
            <div className='flex flex-col w-full'>
              <Typography sx={{
                fontSize: '14px',
              }}>Email Content</Typography>
              <Button variant="contained" disableElevation size="large">Design Email</Button>
            </div>
            <div>
              <Typography sx={{
                fontSize: '16px',
              }}>Opens tracking</Typography>
              <div className='flex items-start space-x-[8px] w-[320px]'>
              <Checkbox {...label} size='large' disableRipple sx={{
                padding: 0,
                margin: 0
              }}/>
              <Typography sx={{
                fontSize: '14px',
              }}>Track opens with an invisible beacon embedded in your email.</Typography>
              </div>
            </div>
            <div>
              <Typography sx={{
                fontSize: '14px',
              }}>UTM Tags</Typography>
              <div className='flex items-start space-x-[8px] w-[320px]'>
              <Checkbox {...label} size='large' disableRipple sx={{
                padding: 0,
                margin: 0
              }}/>
              <Typography sx={{
                fontSize: '14px',
              }}>Add parameters to your URLs to track newsletter traffic on web analytics platforms.</Typography>
              </div>
            </div>
            <div>
              <Typography sx={{
                fontSize: '14px',
              }}>Language</Typography>
              <Select sx={{
                width: '320px'
              }} size='large'>
                <MenuItem value='English'>English</MenuItem>
                <MenuItem value='Hindi'>Hindi</MenuItem>
                <MenuItem value='Espanol'>Espanol</MenuItem>
                <MenuItem value='French'>French</MenuItem>
                <MenuItem value='German'>German</MenuItem>
                <MenuItem value='Spanish'>Spanish</MenuItem>
              </Select>
            </div>
          </div>
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