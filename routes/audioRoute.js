import express from "express";
const route = express.Router();
import path from 'path';
import fs from 'fs';
import consonantOptions from '../audiofiles/auditory/audassoc/consonants/options.js'
import syllablesOptions from '../audiofiles/auditory/audassoc/syllables/options.js'
import vowelsOptions from '../audiofiles/auditory/audassoc/vowels/options.js'
import wordsOptions from '../audiofiles/auditory/audassoc/words/options.js'


route.post("/getaudio", (req,res)=>{
    const filenameWithPath = req.body.filenameWithPath;       
    console.log("getaudio", path.resolve('./audiofiles/' + filenameWithPath))
    res.sendFile(path.resolve('./audiofiles/' + filenameWithPath));             
});

route.get('/getOptions', (req,res)=>{    
    console.log(vowelsOptions);
    const {module} = req.query;
    let optionList= [];

    switch (module) {
        case "consonants":
            optionList = consonantOptions;
            break;
        case "syllables":
            optionList = syllablesOptions;
            break;
        case "vowels":
            optionList = vowelsOptions;
            break;    
        case "words":
            optionList = wordsOptions;
            break; 
    }   
    
    console.log(module, optionList);

    res.json(optionList);
});

route.post('/getPictures', (req,res)=>{   
    const filenameWithPath = req.body.filenameWithPath;       
    console.log("NodejsFilePath", path.resolve('./audiofiles/' + filenameWithPath))
    res.sendFile(path.resolve('./audiofiles/' + filenameWithPath));  
})


route.get("/ga", (req,res)=>{   
    res.sendFile(path.resolve('./audiofiles/auditory/audassoc/consonants/one.wav'));    
});

route.post("/ga", (req,res)=>{       
    res.sendFile(path.resolve('./audiofiles/auditory/audassoc/consonants/one.wav'));    
});

route.post("/gae", (req,res)=>{       
    const filenameWithPath = req.body.filenameWithPath;       
    console.log("gae", path.resolve('./audiofiles/' + filenameWithPath))
    res.sendFile(path.resolve('./audiofiles/' + filenameWithPath));  
})




route.get("/filecount", (req,res)=>{    
    const folderName = req.query.folderPath;
    const folderPath = "./audiofiles/" + folderName;    
    console.log("filecount", folderPath);
  
    fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.error('Error reading folder:', err);
          return res.status(500).json({ error: 'Error reading folder' });
        }
            res.json(files.length);
    });   
});



export default route;