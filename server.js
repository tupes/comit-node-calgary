const express = require("express");
//To create a express server
const app = express();
//Adding body parser
const bodyParser = require('body-parser');
//middleware
const path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

// for handle bar setting we need three basic lines
const exphs = require('express-handlebars');
app.engine('handlebars', exphs({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
//only for database and mongoose connectivity
const {createUser, getvalue,createEmployee, getEmployees, deleteEmployee, getEmployeeById, updateEmployee,getProducts,createproduct, deleteProduct,getProductById,updateProduct}= require('./db.js');
const user100 = require("./models/user.js");
const { Console } = require("console");
app.get('/createUser', async (req,res) =>{
    const res1 = await createUser();
    console.log("RES: ",res1)
    res.render('login', {title:'Inserted successful'});
});

//renderig with default router
app.get('/', (req, res) =>{
    res.render('index', {title: 'home page'});
    });
    
// rendering login page
app.get('/login', (req, res) =>{
res.render('login', {title:'Login page'});
});
//for client side display use post 
app.post('/login', async (req, res) =>{
    const name= req.body.name;
    const password = req.body.password;
    console.log(`name: ${name}, password: ${password}`);
    const userData = await getvalue();
    //console.log("response", userData);
    const data = userData.filter(d => d.userName === name && d.password === password)// data return array with 1 object(all attribute)
    console.log("data: ",data)

    if(data.length > 0)
    {
        console.log("inside if: ",data[0])
        res.render('dashboard', {title: 'dashboard'} );
    }
    else{
        res.render('login')
    };
    }); 

//........................................Employee add or edit...................................
app.get('/addOrEdit', (req, res)=>{
res.render('addOrEdit',{title:'view page'});
});

app.get('/list', async (req,res) =>{
    const listOfEmployees = await getEmployees();
    res.render('list',{
        list: listOfEmployees
    })
})

app.post('/employee', async(req, res)=>{
    if(!req.body._id){
        console.log("response:", req.body);
        const createEntry = await createEmployee(req.body.fullName,req.body.email,req.body.phone,req.body.city)
        res.redirect('list')
    }else{
        const updteEmployee = await updateEmployee(req)
        res.redirect('list')
    }

    });
// employee update
app.get('/update/:id', async (req,res)=>{
    const doc = await getEmployeeById(req.params.id)
    console.log("Get one employee: ",doc)
    res.render('addOrEdit',{
        viewTitle: "Update Employee",
        employee: doc
    })
})
// employee delete
app.get('/delete/:id', async (req,res) =>{
    const delEmployee = await deleteEmployee(req.params.id)
    console.log("ID of the delete employee", delEmployee);
    res.redirect('/list')
})

// //........................................product...........................................................

app.get('/addOrEditProducts', (req, res)=>{
    res.render('addOrEditProducts');
});


// app.post('/product', async(req, res)=>{
//     if(!req.body._id){
//         console.log("response:", req.body);
//         const createEntry = await createproduct(req.body.fullName,req.body.email,req.body.phone,req.body.city)
//         res.redirect('productList')
//     }else{
//         const updteProduct = await updateProduct(req)
//         res.redirect('productList')
//     }

//     });

app.get('/productList', async (req,res) =>{
    const listOfProducts = await getProducts();//  getProduct() func printing value  in the list table
    //console.log("listofProducts:",listOfProducts);
    res.render('productList',{
        items: listOfProducts
    })
});

app.post('/product', async(req, res)=>{
    if(!req.body._id){
        const productsEntry = await createproduct(req.body.productName,req.body.model,req.body.price,req.body.quantity);// value pass to the createproduct() in db.js
        res.redirect('productList');
    }
    else{
        const product1 = await updateProduct(req)
        res.redirect('productList');
    }
 //console.log("product req:", req.body);
    
    });

//update
    app.get('/updateProduct/:id', async (req,res)=>{
        const product = await getProductById(req.params.id)
        console.log("Get one product: ",product)
        res.render('addOrEditProducts',{
            viewTitle: "Update Product",
            product: product
        })
    })
// ....Delete from Product table.......

app.get('/deleteProduct/:id', async (req,res) =>{
    const deleteProduct1= await deleteProduct(req.params.id)
    res.redirect('/productList');
})

app.get('/signout', (req, res) =>{
    res.render('index', {title: 'home page'});
    });

app.get('/home', (req, res) =>{
        res.render('dashboard', {title: 'home page'});
        });
    

app.listen(4000, () =>{
console.log("server is running on port ");
});

