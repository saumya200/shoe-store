import React from 'react'
import CollectionsIcon from '@mui/icons-material/Collections';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
// import CloseIcon from '@mui/icons-material/Close';

export const HeaderData = [
    {
        title:"Collections",
        icon:<CollectionsIcon/>,
        url: "/collections"
       
    },
    {
        title:"Men",
        icon:<ManIcon/>,
        url:"/men"
    },
    {
        title:"Women",
        icon:<WomanIcon/>,
        url:"/women"
    },
    {
         title:"About",
         icon:<InfoIcon/>,
         url:"/about"
    },
    {
        title:"Contact",
        icon:<CallIcon/>,
        url:"/contact"
    }
    
];
