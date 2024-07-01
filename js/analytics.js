document.addEventListener('DOMContentLoaded', function() {
    console.log("Nothing to load");
    window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1})).promise.then(function() {window.amplitude.add(window.amplitudeAutocapturePlugin.plugin());window.amplitude.init('1dc04bc19b9e709dbc690b1f2e1d1381');});
    // Function to log button clicks
    function logButtonClick(buttonId) {
        console.log(`Button click logged: ${buttonId}`);
        const event = 'Product Added';
        const eventProperties = {
          product_id: '123445566',
          quantity: 1,
          source: 'Product List'
        };
        // Log the event with the properties
        console.log(`Logging Event`);
        try {
            amplitude.getInstance().logEvent(event, eventProperties);
        } catch(e) {
            console.error(e);
        }
    }

        // Add event listeners for button clicks
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            logButtonClick('add-to-cart');
        });
    }
});
