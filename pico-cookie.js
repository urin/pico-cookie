const cookie = new Proxy(
  Object.fromEntries(
    document.cookie.split(';').map(
      entry => entry.split('=').map(e => decodeURIComponent(e.trim()))
    )
  ),
  {
    set(_, key, value) {
      document.cookie = `${ encodeURIComponent(key) }=${ encodeURIComponent(value) }`
      return Reflect.set(...arguments)
    },
    deleteProperty(_, key) {
      document.cookie = `${ encodeURIComponent(key) }=; max-age=0`
      return Reflect.deleteProperty(...arguments)
    }
  }
)
Object.defineProperty(cookie, 'put', {
  value(key, value, attributes) {
    document.cookie = `${ encodeURIComponent(key) }=${ encodeURIComponent(value) }` + (
      attributes ? '; ' + Object.entries(attributes).map(
        pair => pair.map(p => encodeURIComponent(p)).join('=')
      ).join('; ') : ''
    )
    this[key] = value
    return this
  },
})

