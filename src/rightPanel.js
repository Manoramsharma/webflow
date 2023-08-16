import React, { forwardRef } from 'react';
import { IconPlus } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group, Switch,Divider, Title, Avatar, Text, Select} from '@mantine/core';
import "./index.scss";


export default function RightPanel(){
    const data = [
        {
          image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
          label: 'Bender Bending Rodríguez',
          value: 'Bender Bending Rodríguez',
          description: 'Fascinated with cooking',
        },
      
        {
          image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
          label: 'Carol Miller',
          value: 'Carol Miller',
          description: 'One of the richest people on Earth',
        },
        {
          image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
          label: 'Homer Simpson',
          value: 'Homer Simpson',
          description: 'Overweight, lazy, and often ignorant',
        },
        {
          image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
          label: 'Spongebob Squarepants',
          value: 'Spongebob Squarepants',
          description: 'Not just a sponge',
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
              React.createElement(Avatar, { src: image }),
              React.createElement('div', null,
                React.createElement(Text, { size: "sm" }, label),
                React.createElement(Text, { size: "xs", opacity: 0.65 }, description)
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
        <div className='rightPanel'>
        <Switch/>
        <Divider my="sm" />
        <Title order={3}> Create workflow Trigger</Title>
        <Title order={4}> Add upto 3 triggers. Define which actions will start your subscriber journey</Title>
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
     <Button onClick={handleTriggerMenu} leftIcon={<IconPlus size='0.9rem'/>} variant="white" size='0.9rem'>
      Add another trigger
    </Button>
        </div>

    )
}