import useCollection from 'hooks/useCollection'

export default function useSkills(props) {
  const ref = 'skills'

  const [value, loading, error, next, loadingMore, loadMoreAvailable] =
    useCollection({
      ref,
      ...props
    })

  return [value, loading, error, next, loadingMore, loadMoreAvailable]
}
