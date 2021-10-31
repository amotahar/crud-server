const express = require('express')
const cors = require('cors')
const app = express();

app.use (cors());
app.use(express.json());
// const port = process.env.PORT||3000;
const port = 5000;

app.get('/', (req, res)=>{

    res.send('node js is automatic resatr' )
});

const users = 

[
    { id:0, name: 'saba', email: 'saba@gamil.com', phone:'0178881434'},
    { id:1, name: 'shabana', email: 'shabana@gamil.com', phone:'0178881434'},
    { id:2, name: 'shbnur', email: 'sabnura@gamil.com', phone:'0178881434'},
    { id:3, name: 'shkuraa', email: 'shakurana@gamil.com', phone:'0178881434'},
    { id:4, name: 'shanaa', email: 'shana@gamil.com', phone:'0178881434'},
    { id:5, name: 'saberana', email: 'sabreaana@gamil.com', phone:'0178881434'},
  
]

app.get('/users', (req,res)=>{
    const search = req.query.search;
    // use query parameter
    if(search){
    const searchResult = users.filter(user=> user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult)
    }

    else{
        res.send(users)

    }
});


app.get('/fruits', (req, res) => {
    res.send(['Mango', 'Banana', 'pineapple',])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummmy Testy')
 
})

//app.Method
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res)=> {
    const id = req.params.id;
    const user = users[id];
    res.send(user);

})

app.listen(port, ()=>{
    console.log('listen to port', port);
})