// Startbedingung der Aktivität "Sprachprüfung" (Nachbildung des inklusiven Gateways):
// Der Zweig wird nur erzeugt, wenn ein Fremdsprachenmodul enthalten ist.
function eval() {
  // Please include the condition in the writable area between the brackets.
  // example: return true;
  return $.file.get()[0].data.fremdsprachenmodul === true;
}
