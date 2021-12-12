const Importer = require('mysql-import');
const {host, user, password} = require('./config.json')

const importer = new Importer({host, user, password});
importer.onProgress(progress=>{
    const percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
    console.log(`${percent}% completo`);
});
    
importer.import('./app/database/sql.sql').then(()=>{
    
    console.log('Arquivo importado com sucesso');
}).catch(err=>{
    console.error(err);
});