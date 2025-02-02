import { createClient } from 'next-sanity'

import { projectId, dataset, token } from "../env"

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  token,
  apiVersion: "2025-01-17", 
})
