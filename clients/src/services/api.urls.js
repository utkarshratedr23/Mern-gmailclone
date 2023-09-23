export const API_URLS={
    saveSentEmail:{
        endpoint:'save',
        method:'POST'
    },
    getEmailFromType:{
        endpoint:'emails',
        method:'GET'
    },
    saveDraftEmails:{
        endpoint:'save-draft',
        method:'POST'
    },
    deleteEmails: {
        endpoint: 'delete',
        method: 'DELETE'
    },
    toggleStarredMails: {
        endpoint: 'starred',
        method: 'POST'
    },
    moveEmailsToBin:{
        endpoint:'bin',
        method:'POST'
    }
}