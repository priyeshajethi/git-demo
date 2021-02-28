#!/usr/bin/env node


// CREATE A IIFE FUNCTION TO TAKE USER INPUT AS THE NAME OF THE FOLDER AND HOW MANY SUCH FOLDERS ARE TO BE CREATED

/* Key instructions

1. if n (number of folders to be created) is not a number, or less than 0, print "invalid input"
2. if name is not a string, (although any input you give with process.argv is a string so this check
    is irrelevent) print "invalid input"
3. if folders of the name mentioned already exist, delet those folders
4. if they dont, create the folders.
5. create a global variable myMkdir

*/
let fs= require("fs");

//create IIFE
(function() {
    let n= process.argv[2];
    let name= process.argv[3];

    if(!Number.isInteger(+n) || n<=0){
        console.log("invalid Input");
        return;
    }

    if(fs.existsSync(`${name} - 0`)){
        for(let i=0; i<n; i++){
            fs.rmdir(`${name} - ${i}`);
        }
    }
    else{
        for(let i=0; i<n; i++){
            fs.mkdirSync(`${name}-${i}`);
        }
    }
}) ();


    