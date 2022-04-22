import { useEffect, useState } from 'react'

import { getDocument } from 'services/firestore'

export default function useCandidateProfileSkills(candidateProfile) {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const promises = candidateProfile?.skills?.map((skill) =>
        getDocument('skills', skill)
      )
      const data = promises && (await Promise.all(promises))
      setSkills(data)
      setLoading(false)
    }

    fetchData()
  }, [candidateProfile])

  return [skills, loading]
}
