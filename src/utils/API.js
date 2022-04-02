class API {
    static #APIUrl = "https://api.fastforex.io"

    static Currencies = async () => await fetch(this.#APIUrl + "/fetch-all?api_key=fb2e799ccf-c26a397f58-r9o4vr")
        .then(res => res.json()).then(res => res["results"])
    static CurrenciesLabels = async () => await fetch(this.#APIUrl + "/currencies?api_key=fb2e799ccf-c26a397f58-r9o4vr")
        .then(res => res.json()).then(res => res["currencies"])
    static YesterdayCurrency = async () => await fetch(this.#APIUrl + `/historical?date=${new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString("en-GB").split('/').reverse().join('-')}&from=USD&api_key=fb2e799ccf-c26a397f58-r9o4vr`)
        .then(res => res.json()).then(res => res["results"])
    static CurrenciesSymbols = require("./CurrencySymbols.json")
}

export default API
