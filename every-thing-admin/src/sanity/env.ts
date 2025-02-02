export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-02'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skQ6qSCPtLM7Y6FvkjQfgmDN8ZmSoyMNj61T3m7k6TLDccCP7Riu26cKlMi4VjLc9xKQ1zJLW4c0zJCQjS5t5Z0dgie7CzodVlR80Y8cKwGrwJJO5RS7IPUb7PTlDJw1Ex8ikr3qj9JqkwvZf6wOaab37zJCyWLuuIAJ6G8S9TjLcr722XPy"
  ,'Missing environment variable: SANITY_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
