document.addEventListener('DOMContentLoaded', function() {
    console.log("Nothing to load");
    window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1})).promise.then(function() {window.amplitude.add(window.amplitudeAutocapturePlugin.plugin());window.amplitude.init('1dc04bc19b9e709dbc690b1f2e1d1381');});
});
