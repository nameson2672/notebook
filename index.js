import { stdout, stderr } from 'process';
import dotenv from "dotenv";
import child_process from 'child_process';

 dotenv.config();

// getting port  
const port = process.env.PORT;


// Running the serve commadn on vli and passing the port from heroku
child_process.exec(`mdbook serve -p ${port} -n 127.0.0.1`,(e, stdout, stderr)=>{
    console.log(stdout);
    console.log(stderr);
});