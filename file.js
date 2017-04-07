var fs = require('fs');

//escrita de arquivo
fs.writeFile('data.txt', 'Hello world from nodejs', function(err){
    if(err){
        throw err;
    }
});

//leitura de arquivo
fs.readFile('data.txt', function(err, data){
    if(err){
        throw err;
    }

    console.log(data.toString('utf8'));
});

//leitura de diretório
fs.readdir('.', function(err, files){
    if(err){
        throw err;
    }

    for(file in files){
        console.log(files[file]);
    }
});

//leitura sincrona de diretórios com filter
fs
    .readdirSync('.')
    .filter(function(file) {
        return (file.endsWith('.js'))  
    })
    .forEach(function(file) {
        console.log(file);
    });
