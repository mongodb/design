import { useEffect, useState } from "react";
import { getEntryById } from "utils/getContentfulResources";
import renderEntry from "./renderEntry";

const renderLinkedEntry = (sysId) => {
  const [entry, setEntry] = useState<any>();
  useEffect(() => {
    getEntryById(sysId).then((entry) => {
      setEntry(entry);
    }).catch((error) => {
      console.error(error)
    })
  }, [sysId])

  if (!entry) {
    return <>Loading...</>
  } else {
    return renderEntry(entry)
  }
}

export default renderLinkedEntry;