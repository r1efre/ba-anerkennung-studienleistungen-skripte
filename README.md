# Anerkennung von Studienleistungen - Prototyp in yuuvis® RAD

Software-Artefakte zur Bachelorarbeit "Analyse und Optimierung des Prozesses der
Anerkennung von Studienleistungen an der HTW unter Einsatz von yuuvis® RAD
Rapid Application Development".

- Autorin: Margarita Efremova
- Betreuer: Prof. Dr. Birte Malzahn, Thorsten Präßler
- Hochschule: HTW Berlin, FB 4, Studiengang Wirtschaftsinformatik
- Jahr: 2026

## 1. Softwarepaket 
Dieses Repository enthält die im Rahmen der Bachelorarbeit entwickelten
Software-Artefakte zur prototypischen Umsetzung des Anerkennungsprozesses in
yuuvis® RAD (Version 10.12.2). Es handelt sich nicht um eine eigenständig lauffähige
Anwendung, sondern um Skripte, die innerhalb der yuuvis®-RAD-Plattform in
Prozessen und Formularen ausgeführt werden.

Bestandteile:
- Serverseitige Prozessskripte (BPM Scripting API, JavaScript): Bedingungen
  (Schleife, Startbedingungen) und Statusfortschreibung.
- Clientseitiges Formularskript (JavaScript): Präzedenzfallsuche am Objekttyp
  Fremdmodul.
  
Die zugehörigen Word-Vorlagen und Prozessmodelle sind nicht Bestandteil dieses
Repositories; sie sind der Bachelorarbeit als Anhang bzw. als Abbildungen
beigefügt.

Programmiersprache: JavaScript (yuuvis®-RAD-Skripting). Sprache der Kommentare
und Bezeichner: Deutsch/Englisch.

## 2. Datenursprung 
Die Artefakte wurden von der Autorin erstellt. Das clientseitige Formularskript
(praezedenzfallsuche.js) wurde mit Unterstützung des KI-Assistenten Claude
(Anthropic) entwickelt. Es wurden keine fremden Datensätze verwendet.
Lizenz: siehe Datei LICENSE (MIT-Lizenz).

## 3. Zeitraum
Entwicklung im Zeitraum Juni-August 2026.

## 4. Formate und Größe
.js (Skripte)
Gesamtgröße < [X] MB.

## 5. Werkzeuge
- yuuvis® RAD 10.12.2 – designer, management-studio, client.

## 6. Einbindung der Artefakte
- skripte/bedingungen.js – Schleifenbedingung der „Vollständigkeitsprüfung"
  (REPEAT-UNTIL) sowie Startbedingung der Aktivität „Fehlende Unterlagen
  anfordern".
- skripte/startbedingung_sprachpruefung.js – Startbedingung der Aktivität
  „Sprachprüfung".
- skripte/statusfortschreibung.js – Ereignis BeforeStartActivity der
  Aktivitäten (Statusfortschreibung).
- skripte/praezedenzfallsuche.js – Formularskript am Objekttyp Fremdmodul
  (Situationen Anlegen/Bearbeiten).

## 7. Qualitätssicherung
Der Prototyp wurde anhand von sechs Anwendungsfällen validiert (vgl. Kapitel 6.3
der Arbeit). Es wurden ausschließlich fiktive Testdaten verwendet.

## 8. Datenschutz
Das Repository enthält keine personenbezogenen oder sensiblen Echtdaten, für
Tests wurden ausschließlich fiktive Daten verwendet.

## 9. Ablageort
Repository: [GitHub-URL]. Ordnerstruktur: skripte/.
