import { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
  Query,
} from "firebase/firestore";
import { db } from "../firebase";

interface Channel {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channel[]>([]);

  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const documentsResults: Channel[] = [];
      querySnapshot.docs.forEach((doc) =>
        documentsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(documentsResults);
    });
  }, []);

  return { documents };
};

export default useCollection;
