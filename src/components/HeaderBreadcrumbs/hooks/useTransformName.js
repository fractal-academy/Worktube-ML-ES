const useTransformName = () => {
  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

  const transformName = (name) => {
    const splittedName = name.split('_')
    const [domain, variant] = splittedName

    return variant === 'ALL' ? capitalize(domain) : capitalize(variant)
  }

  return transformName
}

export default useTransformName
