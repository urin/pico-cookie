const encode = encodeURIComponent
const decode = decodeURIComponent
export default Object.defineProperty(
  new Proxy(
    Object.fromEntries(
      document.cookie.split(';').map(
        entry => entry.split('=').map(e => decode(e.trim()))
      )
    ),
    {
      set(_, key, value) {
        document.cookie = `${ encode(key) }=${ encode(value) }`
        return Reflect.set(...arguments)
      },
      deleteProperty(_, key) {
        document.cookie = `${ encode(key) }=; max-age=0`
        return Reflect.deleteProperty(...arguments)
      }
    }
  ),
  'put',
  {
    value(key, value, attributes) {
      document.cookie = `${ encode(key) }=${ encode(value) }` + (
        attributes ? '; ' + Object.entries(attributes).map(
          pair => pair.map(p => encode(p)).join('=')
        ).join('; ') : ''
      )
      this[key] = value
      return this
    }
  }
)

