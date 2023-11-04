import express from "express";
const route = express.Router();
import path from 'path';
import fs from 'fs';
// import consonantOptions from '../audiofiles/auditory/audassoc/consonants/options.js'
// import syllablesOptions from '../audiofiles/auditory/audassoc/syllables/options.js'
// import vowelsOptions from '../audiofiles/auditory/audassoc/vowels/options.js'
// import wordsOptions from '../audiofiles/auditory/audassoc/words/options.js'


route.post("/getaudio", (req,res)=>{
    const filenameWithPath = req.body.filenameWithPath;       
    console.log("getaudio", path.resolve('./audiofiles/' + filenameWithPath))
    res.sendFile(path.resolve('./audiofiles/' + filenameWithPath));             
});

route.get('/getOptions', (req,res)=>{    
    // console.log(vowelsOptions);
    const {module} = req.query;
    let optionList= [];

    const consonantOptions = ["ಕೊ-ಕೈ-ಕೌ","ಕಿ-ಕ-ಕು","ಕೈ-ಕಿ-ಕೌ","ಕೆ-ಕೈ-ಕು","ಕೆ-ಕಿ-ಕೌ"];
    const syllablesOptions = ["ಕೊ-ಕೈ-ಕೌ","ಕಿ-ಕ-ಕು","ಕೈ-ಕಿ-ಕೌ","ಕೆ-ಕೈ-ಕು","ಕೆ-ಕಿ-ಕೌ","ಕ-ಕಿ-ಕೈ","ಕಿ-ಕೌ-ಕು","ಗೈ-ಗ-ಗಿ","ಗು-ಗೋ-ಗ","ಗೋ-ಗಿ-ಗು","ಗೈ-ಗೈ-ಗು","ಗೋ-ಗೈ-ಗ","ಗು-ಗೆ-ಗಿ","ಚೆ-ಚಿ-ಚೋ","ಚು-ಚ-ಚಾ","ಚು-ಚ-ಚಿ","ಚೆ-ಚು-ಚ","ಚಾ-ಚೆ-ಚೋ","ಜು-ಜೈ-ಜಿ","ಜೈ-ಜಿ-ಜು","ಜು-ಜೆ-ಜೃ","ಜೊ-ಜೀ-ಜೆ","ಜ-ಜಾ-ಜೃ","ಣು-ಣ-ಣೀ","ಣ-ಣು-ಣೆ","ಣು-ಣೌ-ಣಿ","ಣಿ-ಣೈ-ಣೊ","ಣು-ಣ-ಣೆ","ಣೆ-ಣೋ-ಣೌ","ತೀ-ತ-ತೆ","ತಿ-ತೈ-ತೇ","ತೌ-ತೂ-ತ","ತಿ-ತೆ-ತೋ","ತು-ತೌ-ತೃ","ತು-ತೇ-ತೋ","ದಿ-ದೀ-ದ","ದು-ದಿ-ದೈ","ದೆ-ದು-ದೀ","ದು-ದೈ-ದೊ","ದೆ-ದ-ದೀ","ನ-ನೆ-ನಿ","ನೃ-ನ-ನೊ","ನೆ-ನಿ-ನೇ","ಪು-ಪಿ-ಪೆ","ಪಿ-ಪೋ-ಪ","ಪೈ-ಪ-ಪೆ","ಪೋ-ಪ-ಪು","ಪೈ-ಪಿ-ಪೋ","ಪೋ-ಫಿ-ಫು","ಫಿ-ಫೆ-ಫೇ","ಫು-ಫೊ-ಫ","ಫೌ-ಫೊ-ಫೆ","ಬೈ-ಬ-ಬೆ","ಬೊ-ಬ-ಬೈ","ಬ-ಬು-ಬಿ","ಬಿ-ಬು-ಬೆ","ಬು-ಬೆ-ಬೊ","ಬೆ-ಬ-ಬಿ","ಮೋ-ಮ-ಮೆ","ಮ-ಮೌ-ಮಿ","ಮೌ-ಮಿ-ಮು","ಮೋ-ಮೆ-ಮು","ಮೋ-ಮೆ-ಮಿ","ಯ-ಯೌ-ಯಿ","ಯಿ-ಯೈ-ಯು","ಯು-ಯೊ-ಯ","ಯು-ಯೊ-ಯೆ","ಯೆ-ಯ-ಯಿ","ರ-ರೊ-ರಿ","ರು-ರೇ-ರ","ರೈ-ರು-ರೊ","ರ-ರೆ-ರಿ","ರೆ-ರೌ-ರೈ","ಲಾ-ಲೌ-ಲು","ಲಾ-ಲಿ-ಲು","ಲು-ಲೈ-ಲ","ಲೋ-ಲು-ಲಿ","ಲೋ-ಲೈ-ಲೆ","ಲೌ-ಲೆ-ಲೈ","ಲ-ಲಾ-ಲಿ","ವೇ-ವು-ವ","ವಿ-ವ-ವೂ","ವಿ-ವೈ-ವು","ವೋ-ವೈ-ವ","ವೋ-ವೊ-ವೇ","ಶೋ-ಶು-ಶ","ಶ-ಶಿ-ಶೈ","ಶು-ಶಿ-ಶೌ","ಶು-ಶೆ-ಶೋ","ಶೋ-ಶೆ-ಶೌ","ಸು-ಸ-ಸಿ","ಸೈ-ಸೋ-ಸಿ","ಸು-ಸ-ಸೌ","ಸ-ಸೋ-ಸೆ","ಸೋ-ಸ-ಸೆ","ಹ-ಹೃ-ಹಿ","ಹಿ-ಹು-ಹೃ","ಹೋ-ಹು-ಹೈ","ಹೋ-ಹೆ-ಹೌ","ಹೆ-ಹೈ-ಹ"]; 
    const vowelsOptions =  ["ಕೊ-ಕೈ-ಕೌ","ಕಿ-ಕ-ಕು","ಕೈ-ಕಿ-ಕೌ","ಕೆ-ಕೈ-ಕು","ಕೆ-ಕಿ-ಕೌ"];
    const wordsOptions = ["ಅಪ್ಪ-ಅರಸ-ಐವತ್ತು","ಅಪ್ಪ-ಅರಸ-ಐವತ್ತು","ಅಪ್ಪ-ಅರಸ-ಐವತ್ತು","ಆಟ-ಒಗ್ಗಟು-ಐವತ್ತು","ಆಟ-ಒಗ್ಗಟು-ಅರಸ"];
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
    
    // console.log(module, optionList);

    res.json(optionList);
});

route.post('/getPictures', (req,res)=>{   
    const filenameWithPath = req.body.filenameWithPath;       
    console.log("NodejsFilePath", path.resolve('./audiofiles/' + filenameWithPath))
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


//testing endpoing
route.get("/test1", (req,res)=>{   
    res.sendFile(path.resolve('./audiofiles/auditory/audassoc/consonants/one.wav'));    
});

route.post("/test2", (req,res)=>{       
    const filenameWithPath = req.body.filenameWithPath;       
    console.log("gae", path.resolve('./audiofiles/' + filenameWithPath))
    res.sendFile(path.resolve('./audiofiles/' + filenameWithPath));  
})


export default route;