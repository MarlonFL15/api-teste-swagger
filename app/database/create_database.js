const Importer = require('mysql-import');
const {host, user, password, database} = require('./config.json')



const importer = new Importer({host, user, password});
importer.onProgress(progress=>{
    const percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
    console.log(`${percent}% Completed`);
});
    
importer.import('./app/database/sql.sql').then(()=>{
    const files_imported = importer.getImported();
    console.log('Arquivo importado com sucesso');
}).catch(err=>{
    console.error(err);
});