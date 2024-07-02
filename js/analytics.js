document.addEventListener('DOMContentLoaded', function() {
    console.log("Nothing to load");
    window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1})).promise.then(function() {window.amplitude.add(window.amplitudeAutocapturePlugin.plugin());window.amplitude.init('1dc04bc19b9e709dbc690b1f2e1d1381');});

    function generateRandomId() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
    }
    
    // Function to log button clicks
    /*function logButtonClick(buttonId) {
        console.log(`Button click logged: ${buttonId}`);
        const event = 'Product Added';
        const eventProperties = {
          product_id: generateRandomId(),
          quantity: 1,
          source: 'Product List'
        };
        // Log the event with the properties
        console.log(`Logging Event`);
        try {
            amplitude.logEvent(event, eventProperties);
        } catch(e) {
            console.error(e);
        }
    }*/

    function logEventAmplitude(event, eventProperties) {
        // Log the event with the properties
        console.log(`Logging Event ${event}`);
        try {
            amplitude.logEvent(event, eventProperties);
        } catch(e) {
            console.error(e);
        }
    }

    // Add event listeners for button clicks
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            const event = 'Product Added';
            const eventProperties = {
              product_id: generateRandomId(),
              quantity: 1,
              source: 'Product List'
            };
            logEventAmplitude(event, eventProperties);
        });
    }

    // Add event listeners for viewing product details
    const proceedCheckout = document.getElementById('checkout');
    if (proceedCheckout) {
        proceedCheckout.addEventListener('click', function() {
            const event = 'Checkout';
            const eventProperties = {
              quantity: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
              price: Math.random() * (5000 - 0) + 0,
              source: 'Product Details'
            };
            logEventAmplitude(event, eventProperties);
        });
    }
});
