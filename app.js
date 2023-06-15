const express = require('express');const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json({extended: true}));
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/api/auth', authRouter);
// app.use('/api/links', linksRouter);
app.get('/', (req, res)=>{
    res.send('hey, its me');
});

// if(process.env.NODE_ENV==='production') {
//     app.use('/', express.static(path.join(__dirname, 'client', 'build')));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })
// }
// function connectToDataBase() {
//     mongoose.connect(mongoUri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }, (res)=>{
//         console.log('database res', res);
//     });
// }


async function start() {
    try {
        // await connectToDataBase();
        // await mongoose.connect(mongoUri, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // });
        app.listen(PORT, () => {
            console.log('server started on port', PORT);
        });
    } catch (e) {
        console.log(e)
        process.exit(1);
    }
}

start();

console.log('app');