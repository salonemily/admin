import React, { SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Icon, Menu, MenuItemProps } from 'semantic-ui-react'
import { GetDress } from '../../../stateManagment/action/dataManagment/SalonDressActions/DressAction'
interface IPros {
  handleItemClick:(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: MenuItemProps) =>void,
  activeItem:string
}
const DressFilter:React.FC<IPros> = ({handleItemClick,activeItem}) => {
    return (
        <Menu stackable>
        <Menu.Item>
        <Icon  size='large' name='filter' circular/>
        </Menu.Item>

        <Menu.Item
          name='free'
          active={activeItem === 'free'}
          onClick={handleItemClick}
        >
          Wolne
        </Menu.Item>

        <Menu.Item
          name='rent'
          active={activeItem === 'rent'}
          onClick={handleItemClick}
        >
          Wypożyczone
        </Menu.Item>
        
        <Menu.Item
          name='rentp'
          active={activeItem === 'rentp'}
          onClick={handleItemClick}
        >
          W trakcie wypożyczenia
        </Menu.Item>
        
        <Menu.Item
          name='order'
          active={activeItem === 'order'}
          onClick={handleItemClick}
        >
          Zarezerwowane
        </Menu.Item>

        <Menu.Item
          name='sold'
          active={activeItem === 'sold'}
          onClick={handleItemClick}
        >
          Wyprzedane
        </Menu.Item>
      </Menu>
    )
}

export default DressFilter
