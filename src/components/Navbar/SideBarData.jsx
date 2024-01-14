import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as CgIcons from 'react-icons/cg'
import * as GrIcons from 'react-icons/gr'

export const SideBarData = [
    {
        title: 'About',
        path: '#about',
        icon: <CgIcons.CgProfile/>,
        cName: 'nav-text'
    },
    {
        title: 'Experience',
        path: '#experience',
        icon: <FaIcons.FaCode/>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '#projects',
        icon: <GrIcons.GrProjects/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '#contact',
        icon: <MdIcons.MdImportContacts/>,
        cName: 'nav-text'
    },
]