const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Server response on / route");
})

let cards = [
    {
        id: 1,
        pinCode: 1234,
        cartNumber: "4832121234346565"
    },
    {
        id: 2,
        pinCode: 2345,
        cartNumber: "2343465654832121"
    },
    {
        id: 3,
        pinCode: 3456,
        cartNumber: "4843236546532121"
    },
    {
        id: 4,
        pinCode: 4567,
        cartNumber: "1234346564832125"
    },
    {
        id: 5,
        pinCode: 5678,
        cartNumber: "4834345656212123"
    }
];

// TASK EXPRESS MODULE 5.3
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
    fs.writeFile("result.txt", employeesJson, function (err, result) {
        if (err) console.log('error', err);
    });
})

app.get('/card', (req, res) => {
    res.send("Bu route kartlar üçün cavabdehdir");
})

app.get('/client', (req, res) => {
    res.send("Bu marşrut müştərilər üçün cavabdehdir");
})

// TASK EXPRESS MODULE 5.4

//teqdimat
app.get('/cards', (req, res) => {
    res.json(cards);
})

app.get('/cards/:id', (req, res) => {
    // res.send(JSON.stringify(cards.find((u) => u.id == req.params.id)));
    const id = parseInt(req.params.id);
    const cart = cards.find((u) => u.id === id);
    if (!cart) {
        res.status(404).send("Not Valid id!");
    }
    else {
        res.status(200).json(cart);
    }
})
// tapsiriq
let storeData = [
    {
        id: 1,
        name: "bread",
        amount: 22,
        coast: 0.6
    },
    {
        id: 2,
        name: "milk",
        amount: 44,
        coast: 3.6
    },
    {
        id: 3,
        name: "apple",
        amount: 33,
        coast: 0.6
    },
    {
        id: 4,
        name: "chips",
        amount: 32,
        coast: 2.6
    },
    {
        id: 5,
        name: "butter",
        amount: 23,
        coast: 12.9
    }
]

app.get('/store', (req, res) => {
    res.json(storeData);
});

app.get('/store/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = storeData.find((p) => p.id === id);

    if (!product) {
        res.status(404).send("Product not found!");
    } 
    else {
        res.status(200).json(product);
    }
})

app.listen(3000, () => {
    console.log("Server started on 3000 port.")
})