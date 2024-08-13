function group() {
  console.log('Export named non-inline (grouped)')
}

function exportDefault() {
  console.log('Export default non-inline')
}

export { group }

export default exportDefault;