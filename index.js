const express = require("express");

const app = express();

app.get('/', (req, res) => 
{
    res.send("Server response on / route");
})

app.get('/employees', (req, res) => {
    let employees = [
        {
            name: 'Someone',
            lastName: 'SomeOnevich',
            status: 'developer'
        },
        {
            name: 'Someone1',
            lastName: 'SomeOnevich1',
            status: 'developer'
        },
        {
            name: 'Someone2',
            lastName: 'SomeOnevich2',
            status: 'developer'
        }
    ]
    res.json(employees);

    var employeesJson = JSON.stringify(employees);
    var fs = require('fs');
    fs.writeFile("result.txt", employeesJson, function(err, result) {
    if(err) console.log('error', err);
});
})

app.get('/card', (req, res) => 
{
    res.send("Bu route kartlar üçün cavabdehdir");
})

app.get('/client', (req, res) => 
{
    res.send("Bu marşrut müştərilər üçün cavabdehdir");
})

app.listen(3000, () => {
    console.log("Server started on 3000 port.")
})