import useCollection from 'hooks/useCollection'

export default function useLanguages(props) {
  const ref = 'languages'

  const [value, loading, error, next, loadingMore, loadMoreAvailable] =
    useCollection({
      ref,
      ...props
    })

  return [value, loading, error, next, loadingMore, loadMoreAvailable]
}
