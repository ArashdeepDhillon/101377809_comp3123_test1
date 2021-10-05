import fs from 'fs'
import path from 'path'

fs.readdir("Logs", (x, log_files) => {

for (const file of log_files) { 
 const location = path.join("Logs", file)
 
fs.unlink(location, error => {
 if (x) throw error
            });
          
console.log(`delete files...${file}`)
  }
     
    });
