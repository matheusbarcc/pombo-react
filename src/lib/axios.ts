import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJwb21ibyIsInN1YiI6InVzZXIxQHVzZXIuY29tIiwiZXhwIjoxNzMyNDU1MTM4LCJpYXQiOjE3MzI0MTkxMzgsInVzZXJJZCI6ImVkOGY1NmE0LTEyY2QtNDRiNS04Zjk5LTRiMWQ4NzYxZDNiOSIsInJvbGVzIjoiVVNFUiJ9.gjcQXpxkEJN4aQHEl-dfJ0dzocxwVyJc-FJgpmjJaLb13V4iNvQ0SPpWgQa5EI6uh6bEncNE9Ik2xJCKvGGn51bS0hGXMmsjOJJg1xxj6tF_CT5iebDo0ZnAbZFHAghdCXbkQ2tx-FLQbNdP59Z5p1nD0GB7cqhBVox8UJwN-o58qDaYEzIK3otZQv91TDlzfI491j5hRyZAzRUKMbb2bQrRKq488HPU4SWKIkiqnh-CG3IFeDfC0eZN_slvtfF9-Yczduq_WeJlC_23YYjdnWATFW5gq10ahyVZrlueNWFGAsy5IabaU_DDE7r0amsk7OMONsfNidvFDYrzqVoXFg`,
  },
})
