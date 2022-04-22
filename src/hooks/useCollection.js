import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

import firestore from 'services/firebase/firestore'

const useCollection = (props) => {
  const [value, setValue] = useState()
  const [loading, setLoading] = useState()
  const [loadingMore, setLoadingMore] = useState()
  const [error, setError] = useState()
  const [lastVisible, setLastVisible] = useState()
  const [loadMoreAvailable, setLoadMoreAvailable] = useState(true)

  useEffect(() => {
    if (props?.where?.length) {
      setLoadMoreAvailable(false)
    }
  }, [props?.where])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const documents = []
      try {
        const querySnapshot = props?.where?.length
          ? await getDocs(
              query(
                collection(firestore, props?.ref),
                ...props?.where.map((rule) => where(...rule))
              )
            )
          : await getDocs(
              query(
                collection(firestore, props?.ref),
                orderBy(props?.orderBy),
                limit(props?.limit)
              )
            )
        querySnapshot.forEach((doc) => {
          documents.push(doc)
        })
      } catch (err) {
        setError(err)
      }
      setValue(documents.map((doc) => doc.data()))
      setLastVisible(documents?.[documents?.length - 1])
      setLoading(false)
    }
    fetchData()
  }, [props?.where, props?.orderBy, props?.limit, props?.ref])

  const next = async () => {
    if (lastVisible) {
      setLoadingMore(true)
      const documents = []
      try {
        const querySnapshot = await getDocs(
          query(
            collection(firestore, props?.ref),
            orderBy(props.orderBy),
            startAfter(lastVisible),
            limit(props?.limit)
          )
        )
        querySnapshot.forEach((doc) => {
          documents.push(doc)
        })
        setLastVisible(querySnapshot[querySnapshot.length - 1])
      } catch (err) {
        setError(err)
      }
      setValue((oldValue) => [
        ...oldValue,
        ...documents.map((doc) => doc.data())
      ])
      setLastVisible(documents?.[documents?.length - 1])
      setLoadingMore(false)
    }
  }

  return [value, loading, error, next, loadingMore, loadMoreAvailable]
}

export default useCollection
