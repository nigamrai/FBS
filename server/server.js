import app from "./app";
import { PORT } from "./config";
import connectToDB from "./config/DBConnect";
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dgbxiu8yj', 
  api_key: '212787435519848', 
  api_secret: 'PO3uBRUpGAulGKrw1hPbWxs3kHU' 
});
app.listen(PORT,()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
    connectToDB();
})
