import { lazy } from "react";// lazy used for importing child componentsin routes
const Main=lazy(()=>import ('../pages/Main'));
const Emails=lazy(()=>import ('../components/Emails'));
const ViewEmail=lazy(()=>import('../components/ViewEmail'));
const routes={
    main:{
        path:'/',
        element:Main
    },
    emails:{
        path:'/email',
        element:Emails
    },
    view:{
        path:'/view',
        element:ViewEmail
    },
    invalid:{
        path:'/*',
        element:Emails
    },
    
}
export {routes};
