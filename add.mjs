import fs from 'fs'
process.chdir("Logs")

let x=0
for(x ; x < 10; x++) 
{    const file = `log${x}.txt`
      fs.writeFile(file, `Hello! I am file number ${x}.`, (err) => {
              if (err) {
               throw err
        }
    });
      console.log(file)
}