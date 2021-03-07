function tags (copyiedStr) {
  let str = ''

  copyiedStr.split('\n').forEach(
    (elem) => {
      str += elem.split('\t')[1] + ' '
    }
  )

  return str
}
