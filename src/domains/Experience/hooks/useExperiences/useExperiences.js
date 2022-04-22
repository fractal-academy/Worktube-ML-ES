import useCollection from 'hooks/useCollection'

export default function useExperiences(props) {
  const ref = 'experiences'

  const [value, loading, error, next, loadingMore, loadMoreAvailable] =
    useCollection({
      ref,
      ...props
    })

  return [value, loading, error, next, loadingMore, loadMoreAvailable]
}
