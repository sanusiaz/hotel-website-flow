// Google Translate Init
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

// Multi-Currency Logic
document.addEventListener('DOMContentLoaded', () => {
    const currencySelector = document.getElementById('currency-selector');
    if (!currencySelector) return;

    // Default currency symbols
    const symbols = {
        USD: '$',
        EUR: '€',
        GBP: '£',
        JPY: '¥'
    };

    let rates = {};

    // Fetch exchange rates from free API
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(response => response.json())
        .then(data => {
            if (data && data.rates) {
                rates = data.rates;
                // If there's a saved currency in localStorage, apply it
                const savedCurrency = localStorage.getItem('selectedCurrency');
                if (savedCurrency && rates[savedCurrency]) {
                    currencySelector.value = savedCurrency;
                    updatePrices(savedCurrency);
                }
            }
        })
        .catch(err => console.error('Error fetching exchange rates:', err));

    // Handle currency change
    currencySelector.addEventListener('change', (e) => {
        const selectedCurrency = e.target.value;
        localStorage.setItem('selectedCurrency', selectedCurrency);
        updatePrices(selectedCurrency);
    });

    function updatePrices(currency) {
        if (!rates[currency]) return;
        
        const rate = rates[currency];
        const symbol = symbols[currency] || currency + ' ';

        const priceElements = document.querySelectorAll('.price-display');
        priceElements.forEach(el => {
            const usdValue = parseFloat(el.getAttribute('data-usd-value'));
            if (!isNaN(usdValue)) {
                let convertedValue = usdValue * rate;
                
                // Format the number: JPY usually has no decimals
                let formattedValue;
                if (currency === 'JPY') {
                    formattedValue = Math.round(convertedValue).toLocaleString();
                } else {
                    formattedValue = convertedValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                }

                el.textContent = `${symbol}${formattedValue}`;
            }
        });
        
        // Dispatch a custom event so other scripts (like PayPal) know the currency changed
        window.dispatchEvent(new CustomEvent('currencyChanged', { detail: { currency, rate } }));
    }
});
