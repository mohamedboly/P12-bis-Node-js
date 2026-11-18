function displayName() {
    console.log("----------- Nom du fichier ---------")
    console.log(__filename);
    console.log("----------- Nom du dossier ---------")
    console.log(__dirname)
}



const PAYS = 'Senegal';

// module.exports = displayName; // exporter un seul element?

module.exports = {PAYS, displayName} // exporter pluseurs elements
