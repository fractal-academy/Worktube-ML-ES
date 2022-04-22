import { useEffect, useState } from 'react'

import { getDocument } from 'services/firestore'

export default function useCandidateProfileLanguages(candidateProfile) {
  const [languages, setLanguages] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const promises = candidateProfile?.languages?.map((language) =>
        getDocument('languages', language)
      )
      const data = promises && (await Promise.all(promises))
      setLanguages(data)
      setLoading(false)
    }

    fetchData()
  }, [candidateProfile])

  return [languages, loading]
}
