# ⏰ Aufgabenplanung mit Node-Cron (Task Scheduler)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Cron](https://img.shields.io/badge/Scheduler-Node--Cron-0077B6?style=flat-square)
![Typ](https://img.shields.io/badge/Typ-Automatisierung-red)

## Projektübersicht
Dieses Projekt demonstriert die wesentliche Backend-Funktion der **Aufgabenplanung** (*Task Scheduling*) in Node.js mithilfe der beliebten Bibliothek **`node-cron`**.

Es ermöglicht die Definition von Code-Blöcken, die nach einem spezifischen **Cron-Format** zeitgesteuert ausgeführt werden. Dies ist entscheidend für Automatisierungsaufgaben wie E-Mail-Versand, Datenbereinigung oder Berichterstellung. 

## 🛠️ Verwendete Technologien
* **Node.js**
* **node-cron**: Die Bibliothek zur Interpretation und Ausführung von Cron-Befehlen.
* **Cron-Syntax**: Das Standardformat zur Definition von Zeitintervallen.
* **fs (File System)**: Optional für die Protokollierung von Wartungsereignissen.

## 🔑 Hauptfunktionalitäten
* **Sekundäre Intervalle:** Der Job `auftragSekunden` verwendet die Syntax `*/10 * * * * *`, um alle 10 Sekunden zu laufen (für feinkörniges Logging).
* **Minütliche Ausführung:** Der Job `auftragMinuten` läuft einmal pro Minute zur vollen Sekunde (simuliert einen Wartungsjob).
* **Zeitzonen-Unterstützung:** Der Scheduler wird mit einer bestimmten Zeitzone konfiguriert, um Zeitfehler zu vermeiden.

## ⚙️ Installation und Ausführung

Dieses Projekt ist in einer einzigen Datei enthalten (`scheduler.js`).

1.  **Dateien erstellen:** Erstellen Sie die Datei `scheduler.js` in Ihrem Projektordner.

2.  **Abhängigkeiten installieren:**
    ```bash
    npm install node-cron chalk
    ```

3.  **Planer starten:**
    ```bash
    node scheduler.js
    ```
    Das Skript läuft im Hintergrund, bis es manuell mit `Strg+C` beendet wird. Beobachten Sie die Konsole, um die geplanten Ausführungen zu sehen.
    Wenn Sie mehr erfahren möchten, besuchen Sie https://motox3m2.com/

