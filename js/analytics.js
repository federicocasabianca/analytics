document.addEventListener('DOMContentLoaded', function() {
    console.log("Nothing to load");
    
    // Function to log button clicks
    function logButtonClick(buttonId) {
        console.log(`Button click logged: ${buttonId}`);
        $.ajax({
            url: 'https://api2.amplitude.com/2/httpapi',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
        },
        success: function () {
            console.log(JSON.stringify({
                "api_key": "1dc04bc19b9e709dbc690b1f2e1d1381",
                "events": [{
                    "device_id": localStorage.getItem('deviceId'),
                    "event_type": "Product Added",
                    "event_property":[{
                        "product_id":"23413123",
                        "quantity":3,
                        "source":"Product List"
                    }]
                }]
            }));
        }
    })
    }

        // Add event listeners for button clicks
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            logButtonClick('add-to-cart');
        });
    }
});
