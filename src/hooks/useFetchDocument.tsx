import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";



export const useFetchDocument = (docCollection: any, id: any) => {
  const [document, setDocument] = useState<boolean | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean | null>(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadDocument() {
      if (cancelled) return;
      setLoading(true);

      try {
        const docRef = await doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);

        setDocument(docSnap.data());
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(true);
      }
    }

    loadDocument();
  }, [docCollection, id, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { document, loading, error };
};
