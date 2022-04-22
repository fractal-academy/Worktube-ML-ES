import { useEffect, useState } from 'react'

import { getDocument } from 'services/firestore'

export default function useCandidateProfileEducations(candidateProfile) {
  const [educations, setEducations] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const promises = candidateProfile?.educations?.map((education) =>
        getDocument('educations', education)
      )
      const data = promises && (await Promise.all(promises))
      setEducations(data)
      setLoading(false)
    }

    fetchData()
  }, [candidateProfile])

  return [educations, loading]
}
