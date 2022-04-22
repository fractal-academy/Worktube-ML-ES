import useCollection from 'hooks/useCollection'

export default function useCandidateProfiles(props) {
  const ref = 'candidateProfiles'

  const [value, loading, error, next, loadingMore, loadMoreAvailable] =
    useCollection({
      ref,
      ...props
    })

  return [value, loading, error, next, loadingMore, loadMoreAvailable]
}
