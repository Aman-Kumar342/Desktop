//  description for get all contacts 
//  routes for GEt /api/contacts 
//  acces to this api is public 


const getContacts=(req, res) => {
    res.status(200).json({
        "message": "Get all contacts"
    });
}
//  description  create the  contacts 
//  routes for post/api/contacts 
//  acces to this api is public 

const createContacts=(req, res) => {
    res.status(201).json({
        "message": "Create contact"
    });
}


/*
desc get contacts for id 
route GET/api/contacts/id
access is public 
*/

const getContact=(req, res) => {
    res.status(200).json({
        "message": `Get contact for ${req.params.id}`
    });
}
/*
desc updates contacts for id 
route PUT/api/contacts/id
access is public 
*/
const updateContacts=(req, res) => {
    res.status(200).json({
        "message": `Update contact for ${req.params.id}`
    });
}
/*
desc delete contacts for id 
route delete/api/contacts/id
access is public 
*/
const deleteContacts=(req, res) => {
    res.status(200).json({
        "message": `Delete contact for ${req.params.id}`
    });
}

module.exports  ={
    getContacts:getContacts,
    createContacts:createContacts,
    getContact:getContact,
    updateContacts:updateContacts,
    deleteContacts:deleteContacts
};