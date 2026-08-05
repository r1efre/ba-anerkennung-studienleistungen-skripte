var m = scope.model;
if (scope.situation === 'SEARCH') return;

m.modulbezeichnung.onchange = praezedenzfallSuchen;
m.refherkunftshochschule.onchange = praezedenzfallSuchen;

// Text normalisieren (klein, Leerzeichen zusammenfassen, trimmen)
function normalisieren(text) {
  if (!text) return '';
  return ('' + text).toLowerCase().replace(/\s+/g, ' ').trim();
}

function praezedenzfallSuchen() {
  var modul = m.modulbezeichnung.value;
  var hochschule = m.refherkunftshochschule.value;
  if (!modul || !hochschule) return;

  scope.api.dms.getResult({ refherkunftshochschule: hochschule }, 'aequivalenzfall').then(
    function (result) {
      var treffer = null;
      result.forEach(function (row) {
        if (normalisieren(row.data.modulbeschreibung) === normalisieren(modul)) {
          treffer = row;
        }
      });
      if (treffer) {
        m.refhtwmodul.value = treffer.data.refhtwmodul;
        m.ergebnis.value    = treffer.data.anerkennbar ? 'anerkannt' : 'nicht anerkannt';
        m.begruendung.value = 'Übernommen aus Präzedenzfall: ' + (treffer.data.begruendung || '');
        scope.api.util.notifier.info('Präzedenzfall gefunden', 'Frühere Entscheidung übernommen.');
      } else {
        scope.api.util.notifier.info('Kein Präzedenzfall', 'Keine passende Entscheidung – bitte prüfen.');
      }
    },
    function (error) { scope.api.util.notifier.error('Fehler bei der Suche', error + ''); }
  );
}
