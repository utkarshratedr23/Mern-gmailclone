import { useEffect,useState } from "react";
import { useOutletContext,useParams } from "react-router-dom";
import {API_URLS} from "../services/api.urls"
import useApi from "../hooks/useApi";
import {Box,List,Checkbox} from '@mui/material'
import {  DeleteOutline } from "@mui/icons-material";
import Email from "./Email";
import NoMails from "./common/NoMails";
import { EMPTY_TABS } from "../constants/constant";

const Emails=()=>{
    const [selectedEmails,setSelectedEmails]=useState([]);
    const [refreshScreen,setRefreshScreen]=useState(false);
    const {openDrawer} =useOutletContext();
    const {type}=useParams();
    const getEmailService=useApi(API_URLS.getEmailFromType);
    const deleteEmailsService = useApi(API_URLS.deleteEmails);
    const moveEmailsToBinService=useApi(API_URLS.moveEmailsToBin);
    useEffect(()=>{
     getEmailService.call({},type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[type,refreshScreen]);

    const selectAllEmails=(e)=>{
        if(e.target.checked){
          const emails=  getEmailService?.response?.map(email=>email._id);
          setSelectedEmails(emails);
        }
        else{
            setSelectedEmails([]);
        }
    }
    const deleteSelectedEmails=()=>{
    if(type==='bin'){
        deleteEmailsService.call(selectedEmails);
    } else{
        moveEmailsToBinService.call(selectedEmails);
    }
    setRefreshScreen(prevState=>!prevState)
    }
    return(
        <Box style={openDrawer?{marginLeft:250,width:'calc(100%-250px)'}:{width:'100%'}}>
            <Box style={{padding:'20px 10px 0px 10px',display:'flex',alignItems:'center'}}>
                <Checkbox size="small" onChange={(e)=> selectAllEmails(e)}/>
                <DeleteOutline onClick={(e)=>deleteSelectedEmails(e)}/>
            </Box>
            <List>
                {
                   getEmailService?.response?.map(email => (
                    <Email 
                       key={email.id}    
                       email={email}  
                       selectedEmails={selectedEmails}
                       setSelectedEmails={setSelectedEmails}
                       setRefreshScreen={setRefreshScreen}
                    />))
                    }
            </List>
            <List>
                {
                    getEmailService?.response?.length===0 &&
                    <NoMails message={EMPTY_TABS[type]}/>
                }
            </List>
        </Box>
    )
}
export default Emails;