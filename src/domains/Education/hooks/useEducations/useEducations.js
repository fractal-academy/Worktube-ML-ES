import useCollection from 'hooks/useCollection'

export default function useEducations(props) {
  const ref = 'educations'

  const [value, loading, error, next, loadingMore, loadMoreAvailable] =
    useCollection({
      ref,
      ...props
    })

  return [value, loading, error, next, loadingMore, loadMoreAvailable]
}
