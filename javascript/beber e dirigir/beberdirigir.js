function db2 () {
function dirigirbeber (db) {
    var idade = db;
    if (idade > 17) {
        alert ("Com " + idade + " anos pode dirigir e beber");
    }
    else {
        alert ("Com " + idade + " anos não pode dirigir e nem beber");
    }
}

var db = prompt ("Digite a idade");
dirigirbeber (db);
}