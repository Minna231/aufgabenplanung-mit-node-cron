// Datei: scheduler.js

const cron = require('node-cron');
const chalk = require('chalk'); // Optional: Für schönere Konsolenausgabe
const fs = require('fs');

console.log(chalk.yellow.bold("-----------------------------------------"));
console.log(chalk.yellow.bold("🇩🇪 Node-Cron: Aufgabenplaner gestartet!"));
console.log(chalk.yellow.bold("-----------------------------------------"));


// --- 1. Aufgabe: Wiederkehrender Job (Alle 10 Sekunden) ---
// Syntax: Sekunde Minute Stunde Tag_im_Monat Monat Tag_in_der_Woche
// (Syntax: Second Minute Hour Day_of_Month Month Day_of_Week)

// * /10 * * * * * -> Läuft jede 10. Sekunde
const auftragSekunden = cron.schedule('*/10 * * * * *', () => {
    const zeitpunkt = new Date().toLocaleTimeString('de-DE');
    
    // Simuliert das Protokollieren einer Aktivität (logging)
    console.log(chalk.green(`[${zeitpunkt}] 🕒 Sekundäres Protokoll: Diese Nachricht erscheint alle 10 Sekunden.`));
}, {
    scheduled: true, // Sicherstellen, dass der Job sofort gestartet wird
    timezone: "Europe/Berlin" // Oder Ihre lokale Zeitzone
});


// --- 2. Aufgabe: Einmal pro Minute (Minute 0 jeder Stunde) ---

// 0 * * * * * -> Läuft in der 0. Sekunde jeder Minute
const auftragMinuten = cron.schedule('0 * * * * *', () => {
    const zeitpunkt = new Date().toLocaleTimeString('de-DE');
    
    // Simuliert eine wichtige Wartungsaufgabe (maintenance)
    console.log(chalk.red.bold(`\n[${zeitpunkt}] 🛑 WARTUNG: Wichtige Aufgabe wird ausgeführt (Jede Minute)!`));
    
    // Beispiel: Schreibe ein Protokoll in eine Datei
    fs.appendFileSync('wartungsprotokoll.log', `Wartung ausgeführt um ${zeitpunkt}\n`);
    
}, {
    scheduled: true,
    timezone: "Europe/Berlin"
});


// Optional: Job nach 30 Sekunden stoppen, um Ressourcen zu sparen
// setTimeout(() => {
//     auftragSekunden.stop();
//     console.log(chalk.magenta("\nJob für 10-Sekunden-Intervalle wurde gestoppt."));
// }, 30000); 

// Halten Sie den Node.js-Prozess am Laufen
console.log("Die Planer-Prozesse laufen im Hintergrund. Drücken Sie Strg+C zum Beenden.");
