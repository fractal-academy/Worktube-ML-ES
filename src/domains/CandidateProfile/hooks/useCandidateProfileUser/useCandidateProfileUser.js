import { useEffect, useState } from 'react'

import { getDocument } from 'services/firestore'

export default function useCandidateProfileUser(candidateProfile) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const document = await getDocument('user', candidateProfile?.user)
      document && setUser(document)
      setLoading(false)
    }
    fetchData()
  }, [candidateProfile?.user])

  return [user, loading]
}
