const mongoose = require("mongoose");
const credentials = require("./credentials.develop.json");
const user100 = require('./models/user')
const employeesCollection = require('./models/employee')
//...................product Table import...........
const productTable = require('./models/products');
const { connectionString } = credentials.mongo;


mongoose.connect(connectionString);
const db = mongoose.connection;

db.once("open", () =>{
    console.log('Mongodb connection has established');
});


const createUser = async ()=>{
    const userCreation = await user100.create(
        {
        firstName:"smith",
        lastName:"michael",
        userName:"SM",
        password: "1234"
        },

        {
         firstName:"john",
         lastName:"alx",
        userName:"AJ",
         password: "5678"
        },

        {
                firstName:"caterlon",
                lastName:"max",
                userName:"MC",
                password: "9123"
        }  
    )

    console.log("Inserted data: ",userCreation);
    return userCreation;
}

const getvalue = async ()=>{
    const tblData = await user100.find().lean();
    //console.log(tblData);
    return tblData;
}
//.......................................employee insertion....................................
const createEmployee = async (a,b,c,d) =>{
const employeeCreation = await employeesCollection.create(
    {
        fullName:a,
        email:b,
        phone:c,
        city: d
        }
)
console.log("Data Inserted in table", employeeCreation);
return employeeCreation;
}

const getEmployees = async() =>{
    const employees = await employeesCollection.find({}).lean();
    return employees;
}

// employee update method
const getEmployeeById = async (id) =>{
    const employee = await employeesCollection.findById({_id:id}).lean();
    return employee;
}

const updateEmployee = async (req)=>{
    console.log("Req: ",req.body)
const updateResult = await employeesCollection.updateOne({ _id: req.body._id }, req.body, {upsert: true})
//console.log("Update: ",updateResult)
return updateResult
}

// employee delete method
const deleteEmployee = async (particularId)=>{
    console.log("ID: to be deleted: ",particularId)
    const res = await employeesCollection.findByIdAndRemove(particularId);
    console.log("Delete: ",res)
    return res;
}
// .......................................product Insertion in product table........................

const createproduct = async (productName, model, price, quantity) =>{
    const productcreation = await productTable.create(
        {
            productName: productName,
            model:  model,
            price: price,
            quantity: quantity
        }
        
    )
    return productcreation;
}

const getProducts = async() =>{
    const products = await productTable.find({}).lean();
    return products;
}
// delete method
const deleteProduct = async (delItem)=>{
    const response = await productTable.findByIdAndRemove(delItem);
    console.log("Delete: ",response)
    return response;
}

//update method
const getProductById = async (id) =>{
    const product = await productTable.findById({_id:id}).lean();
    return product;
}

const updateProduct = async (req)=>{
    console.log("Req: ",req.body)
const updateResult = await productTable.updateOne({ _id: req.body._id }, req.body, {upsert: true})
//console.log("Update: ",updateResult)
return updateResult
}
 module.exports = {createproduct,getProducts,deleteProduct,getProductById,createEmployee, createUser, getvalue, getEmployees, deleteEmployee, getEmployeeById, updateEmployee,updateProduct};
