import { Box,styled } from "@mui/material";

import { useContext, useState } from "react";

import DonutLargeIcon from '@mui/icons-material/DonutLarge';

import {Chat as MessageIcon} from "@mui/icons-material";

import { AccountContext } from "../../../context/AccountProvider";

import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component=styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;
`

const Wrapper=styled(Box)`

margin-left:auto;
& > * {
    margin-left:2px;
    padding:8px;
    color:#000;
    cursor:pointer;
};

& : first-child{
    font-size:22px;
    margin-top:3px;
    margin-right:8px;
}
`

const Image=styled('img')({
    height:40,
    width:40,
    borderRadius:'50%',
    cursor:'pointer'
})

const Header=()=>{

    const [openDrawer, setOpenDrawer]=useState(false);

    const {account}=useContext(AccountContext);

    const toggleDrawer=()=>{
        setOpenDrawer(true);
    }

    return(
        <>
        <Component>
            <Image src={account.picture} alt="dp" onClick={()=> toggleDrawer()}/>
            <Wrapper>
                <DonutLargeIcon/>
                <MessageIcon/>
                <HeaderMenu/>
            </Wrapper>
        </Component>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}

export default Header;