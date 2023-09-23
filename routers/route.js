import express from 'express';
import { saveSentEmails,getEmails,moveEmailsToBin,deleteEmails,toggleStarredEmail} from '../controllers/email-controller.js';
const routes=express.Router();

routes.post('/save',saveSentEmails)
routes.post('/save-draft',saveSentEmails)
routes.get('/emails/:type',getEmails)
routes.post('/starred', toggleStarredEmail);
routes.delete('/delete', deleteEmails);
routes.post('/bin',moveEmailsToBin);
export default routes;