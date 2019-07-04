import { useEffect } from 'react'

function useDocumentTitle (count) {
  useEffect(() => {
    // Check that the window and document are defined
    if (typeof window !== 'undefined' && document) {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    }
  })
}

export default useDocumentTitle