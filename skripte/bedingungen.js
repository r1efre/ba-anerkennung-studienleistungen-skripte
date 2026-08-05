// Bedingungsskripte der Vollständigkeitsprüfung

// (a) Schleifenbedingung der Schleife "Vollständigkeitsprüfung" (REPEAT-UNTIL):
//     Austritt, sobald die Unterlagen vollständig sind
function eval() {
  // Please include the condition in the writable area between the brackets.
  // example: return true;
  var d = $.file.get()[0].data;
  return d.notenuebersicht === true && d.modulbeschreibungen === true;
}

// (b) Startbedingung der Aktivität "Fehlende Unterlagen anfordern":
//     wird nur bei unvollständigen Unterlagen erzeugt
function eval() {
  // Please include the condition in the writable area between the brackets.
  // example: return true;
  var d = $.file.get()[0].data;
  return !(d.notenuebersicht === true && d.modulbeschreibungen === true);
}
