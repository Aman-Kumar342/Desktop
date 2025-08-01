const asyncHandler=require("express-async-handler")


const Contact=require("../models/contactModel");



//  description for get all contacts 
//  routes for GEt /api/contacts 
//  acces to this api is public 


const getContacts=  asyncHandler(async(req, res) => {

    const contacts= await Contact.find();
     

    res.status(200).json({
        //  we can pass the contacts as the json 

        // "message": "Get all contacts"
        contacts
    });
});
//  description  create the  contacts 
//  routes for post/api/contacts 
//  acces to this api is public 

const createContacts=asyncHandler( async (req, res) => {
    console.log("The request body id :",req.body);
    const{
        name,email,phone
    }=req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("Please add all fields");
    }

    
    const contact=await Contact.create({
        name,email,phone
    });
    res.status(201).json({
        // "message": "Create contact",
        contact
    });

});

/*
desc get contacts for id 
route GET/api/contacts/id
access is public 
*/

const getContact=asyncHandler(async (req, res) => {
    res.status(200).json({
        "message": `Get contact for ${req.params.id}`
    });
});
/*
desc updates contacts for id 
route PUT/api/contacts/id
access is public 
*/
const updateContacts= asyncHandler(async (req, res) => {
    res.status(200).json({
        "message": `Update contact for ${req.params.id}`
    });
});
/*
desc delete contacts for id 
route delete/api/contacts/id
access is public 
*/
const deleteContacts=asyncHandler(async (req, res) => {
    res.status(200).json({
        "message": `Delete contact for ${req.params.id}`
    });
});

module.exports  ={
    getContacts,
    createContacts,
  getContact,
   updateContacts,
   deleteContacts
};