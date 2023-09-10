import { FormControl, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

const EmailCondition = ({handleDelete, id, flag}) => {
    const [activity, setActivity] = useState('')

    const handleChange = (e) => {
        setActivity(e.target.value)
    }

    return (
    <div className='my-[24px] p-[12px] rounded-[5px] border-[#343638] border w-[320px] flex flex-col border-opacity-10'>
                <div className='flex flex-row justify-between items-center px-[8px]'>
                    <button>Condition</button>
                    {flag > 1 && <button className='px-[8px] py-[2px] bg-[#d3d6d9] rounded-md flex flex-row items-center justify-between cursor-pointer font-inter text-[12px]' id={id} onClick={handleDelete}>Delete</button>}
                </div>
                <FormControl size="large">
                    <Select value={activity} onChange={handleChange}>
                        <MenuItem value='Campaign activity'>Campaign activity</MenuItem>
                        <MenuItem value='Workflow activity'>Workflow activity</MenuItem>
                        <MenuItem value='Custom fields'>Custom fields</MenuItem>
                        <MenuItem value='Group membership'>Group membership</MenuItem>
                        <MenuItem value='Segment membership'>Segment membership</MenuItem>
                    </Select>
                </FormControl>
                </div>
)
}

export default EmailCondition