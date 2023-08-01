import express from "express";
const route = express.Router();
import path from 'path';
import fs from 'fs';
import consonantOptions from '../audioFiles/Auditory/AudAssoc/Consonants/options.js'
import syllablesOptions from '../audioFiles/Auditory/AudAssoc/Syllables/options.js'
import vowelsOptions from '../audioFiles/Auditory/AudAssoc/Vowels/options.js'

route.post("/getaudio", (req,res)=>{
    const filenameWithPath = req.body.filenameWithPath;       
    // console.log("NodejsFilePath", './audiofiles/' + filenameWithPath)
    res.sendFile(path.resolve('./audiofiles/' + filenameWithPath));             
});

route.get('/getOptions', (req,res)=>{    
    const {module} = req.query;
    let optionList= [];

    switch (module) {
        case "Consonants":
            optionList = consonantOptions;
            break;
        case "Syllables" :
            optionList = syllablesOptions;
            break;
        case "Vowels":
            optionList = vowelsOptions;
            break;    
    }   
    
    res.json(optionList);
});

route.post('/getPictures', (req,res)=>{   
    const filenameWithPath = req.body.filenameWithPath;       
    console.log("NodejsFilePath", path.resolve('./audiofiles/' + filenameWithPath))
    res.sendFile(path.resolve('./audiofiles/' + filenameWithPath));  
})


route.get("/", (req,res)=>{   
    res.sendFile(path.resolve('./audiofiles/numbers/One.wav')); 
});

route.get("/filecount", (req,res)=>{    
    const folderName = req.query.folderPath;
    const folderPath = "./audioFiles/" + folderName;    
      
  
    fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.error('Error reading folder:', err);
          return res.status(500).json({ error: 'Error reading folder' });
        }
            res.json(files.length);
    });   
});



export default route;