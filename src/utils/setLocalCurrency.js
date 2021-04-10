import numeral from "numeral";

function registerLocalCurrency(country = "Bangladesh", currencySymbol = "৳") {
  // Register numeral for locale
  numeral.register("locale", country, {
    delimiters: {
      thousands: ",",
      decimal: ".",
    },
    abbreviations: {
      thousand: "k",
      million: "m",
      billion: "b",
      trillion: "t",
    },
    currency: {
      symbol: currencySymbol,
    },
  });
  numeral.locale(country);
}

function setLocalCurrency() {
  // Consult https://blog.logrocket.com/detect-location-and-local-timezone-of-users-in-javascript-3d9523c011b9/
  fetch("https://extreme-ip-lookup.com/json/")
    .then((res) => res.json())
    .then(({ countryCode }) => {
      return fetch(`https://restcountries.eu/rest/v2/name/${countryCode}`);
    })
    .then((res) => res.json())
    .then(([country]) => {
      const currencySymbol = country.currencies[0].symbol;
      registerLocalCurrency(country.alpha3Code, currencySymbol);
    })
    .catch((error, status) => {
      throw new Error(error);
    });
}

export default setLocalCurrency;
