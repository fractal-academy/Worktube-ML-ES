import { useEffect, useState } from 'react'

import { getDocument } from 'services/firestore'

export default function useCandidateProfileExperiences(candidateProfile) {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const promises = candidateProfile?.experiences?.map((experience) =>
        getDocument('experiences', experience)
      )
      const data = promises && (await Promise.all(promises))
      setExperiences(data)
      setLoading(false)
    }

    fetchData()
  }, [candidateProfile])

  return [experiences, loading]
}
