import React, { forwardRef, useState } from 'react';
import { IconPlus } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group, Switch,Divider, Title, Avatar, Text, Select, Flex, TextInput, Checkbox} from '@mantine/core';
import "./index.scss";


export default function RightPanel(){
    const [label,setLabel] = useState('When subscriber joins group(s)')
    const data = [
        {
          image: 'https://img.icons8.com/fluency-systems-regular/48/user--v1.png',
          label: 'When subscriber joins group(s)',
          value: 'When subscriber joins group(s)',
          description: 'Workflow triggered when a subscriber joins your subscriber group(s)',
        },
      
        {
          image: 'https://img.icons8.com/fluency-systems-regular/48/stack.png',
          label: 'When subscriber completes a form',
          value: 'When subscriber completes a form',
          description: 'Workflow triggered when a person subscribes to a form',
        },
        {
          image: 'https://img.icons8.com/ios/50/cursor--v1.png',
          label: 'When subscriber clicks a link',
          value: 'When subscriber clicks a link',
          description: 'Workflow triggered when a subscriber clicks a link in any campaign or automation workflow',
        },
        {
          image: 'https://img.icons8.com/ios-glyphs/30/create-new.png',
          label: 'Updated field',
          value: 'Updated field',
          description: 'Workflow triggered when a subscriber field is updated',
        },
        {
          image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
          label: 'The anniversary of a date',
          value: 'The anniversary of a date',
          description: 'Workflow triggered every year on specific dates (great for birthdays, wedding anniversary,etc.)',
        },
        {
          image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
          label: 'The exact match of a date',
          value: 'The exact match of a date',
          description: 'Workflow triggered on a specific date (great for subscriptions, free trials, etc.)',
        },
      ];
      
    //   interface extends React.ComponentPropsWithoutRef<'div'> {
    //     image: string;
    //     label: string;
    //     description: string;
    //   }
      
    //   const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    //     ({ image, label, description, ...others }: ItemProps, ref) => (
    //       <div ref={ref} {...others}>
    //         <Group noWrap>
    //           <Avatar src={image} />
      
    //           <div>
    //             <Text size="sm">{label}</Text>
    //             <Text size="xs" opacity={0.65}>
    //               {description}
    //             </Text>
    //           </div>
    //         </Group>
    //       </div>
    //     )
    //   );
    const SelectItem = React.forwardRef(function ItemProps({ image, label, description, ...others }, ref) {
        return (
          React.createElement('div', { ref, ...others },
            React.createElement(Group, { noWrap: true },
              React.createElement('div', {className: 'flex flex-row justify-between items-start space-x-[8px]'},
                React.createElement('img', { src: image, className: 'w-[16px] h-[16px] object-contain opacity-80' }),
                React.createElement('div', {className:'flex flex-col'},
                  React.createElement('h1', {className: 'font-inter font-semiBold text-[12px]'}, label),
                  React.createElement('h1', {className: 'font-inter font-light text-[10px]'}, description)
                )
              )
            )
          )
        );
      });      

      const handleTriggerMenu = () =>{
        return (
            <div className='rightPanel'>
                  <Divider my="xs" label="OR" />
                  <Select
      label="Trigger"
      placeholder="Choose a trigger"
      itemComponent={SelectItem}
      data={data}
      searchable
      maxDropdownHeight={400}
      nothingFound="Nobody here"
      filter={(value, item) =>
        item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
                  <Divider my="xs" label="OR" />

            </div>
        )
      }
      
    return (
        <div className='flex flex-col justify-between items-center py-[32px] bg-white drop-shadow-lg'>
          <div className='flex flex-col'>
            <div className='px-[24px]'>
              <Switch size="md" color="indigo" />
            </div>
            <div className='w-full h-[1px] rounded-full bg-[#343638] my-[32px] opacity-[10%]'/>
            <div className='flex flex-col justify-between items-start space-y-[5px] max-w-[340px] px-[24px]'>
              <h1 className= 'font-semiBold text-black font-inter text-[16px]'>Create Workflow Trigger</h1>
              <p className='font-normal font-inter text-[12px]'>Add upto 3 triggers. Define which actions will start your subscriber journey</p>
            </div>
            <div className='mx-[24px] my-[24px] p-[12px] rounded-[5px] border-[#343638] border w-[350px] flex flex-col border-opacity-10'>
              <div className='mb-[16px]'>
                <Select
                label="Trigger"
                placeholder="Choose a trigger"
                itemComponent={SelectItem}
                data={data}
                searchable
                maxDropdownHeight={400}
                nothingFound="Nobody here"
                filter={(value, item) =>
                  item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
                  item.description.toLowerCase().includes(value.toLowerCase().trim())
                }/>

              </div>
            </div>
            <div className='mx-[24px] px-[8px] py-[2px] bg-[#d3d6d9] rounded-md w-[150px] flex flex-row items-center justify-between'>
              <img src="https://img.icons8.com/android/24/plus.png" className='w-[12px] h-[12px]'/>
              <button className='text-black font-inter text-[12px]' onClick={handleTriggerMenu}>Add another trigger</button>
            </div>
            <div className='max-w-[350px] mx-[24px] my-[24px]'>
              <Checkbox
                label="Allow subscribers to repeat the workflow"
                description="When enabled, subscribers can trigger the workflow once every 24 hours. Valid for trigger types: 
                Joins a group, Completes a form, Clicks a link and Field updated."
                color="indigo"
                size="md"
              />
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