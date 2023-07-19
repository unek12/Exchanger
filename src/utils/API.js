class API {
    static #APIUrl = "https://api.fastforex.io"
    static #APIKey = "7f3cf67202-78c70631da-rc4jiu"

    static Currencies = async () => await fetch(this.#APIUrl + "/fetch-all?api_key=" + this.#APIKey)
        .then(res => res.json()).then(res => res["results"])
    static CurrenciesLabels = async () => await fetch(this.#APIUrl + "/currencies?api_key=" + this.#APIKey)
        .then(res => res.json()).then(res => res["currencies"])
    static YesterdayCurrency = async () =>
      await fetch(this.#APIUrl
        + `/historical?date=${new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString("en-GB").split('/').reverse().join('-')}&from=USD&api_key=`
        + this.#APIKey)
        .then(res => res.json()).then(res => res["results"])
    static CurrenciesSymbols = require("./CurrencySymbols.json")
}

export default API
