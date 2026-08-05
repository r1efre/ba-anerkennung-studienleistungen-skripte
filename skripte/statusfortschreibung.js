// Serverskript zur Statusfortschreibung.
// Ereignis BeforeStartActivity der jeweiligen Aktivität (Beispiel: Route "Protokoll erzeugen").
var file = $.file.get();
file[0].data.status = 'Protokoll erstellt';
file[0].save('Status automatisch auf "Protokoll erstellt" gesetzt');

// Status-Zuordnung je Aktivität (BeforeStartActivity):
//   unterlagenPruefen    -> 'Vollständigkeitsprüfung'
//   unterlagenAnfordern  -> 'Unterlagen unvollständig'
//   Verzweigung          -> 'Äquivalenzprüfung läuft'
//   protokollErzeugen    -> 'Protokoll erstellt'
//   ergebnisseEintragen  -> 'Abgeschlossen'   (BeforeEndActivity!)
