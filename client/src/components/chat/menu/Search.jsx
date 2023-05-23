import {Search as SearchIcon} from "@mui/icons-material";
import {InputBase} from "@mui/material";
import {Box,styled} from "@mui/material";


const Component = styled(Box)`
background:#fff;
height:45px;
display:flex;
align-items:center;
border-bottom:1px solid #F2F2F2;
`

const Wrapper=styled(Box)`
background-color:#f0f2f5;
position:relative;
margin:0 13px;
width:100%;
border-radius:8px;
`
const Icon=styled(Box)`
position: absolute;
height:100%;
padding:5px 10px;
color:#919191;
`
const InputField=styled(InputBase)`
width:100%;
padding:16px;
padding-left:65px;
height:15px;
font-size:14px;
`

const Search=({setText})=>{
    return(
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon
                        fontSize="small"
                    />
                </Icon>
                <InputField
                    placeholder="search or start new chat"
                    onChange={(e)=>setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    )
}
export default Search;