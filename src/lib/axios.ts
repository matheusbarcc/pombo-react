import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJwb21ibyIsInN1YiI6InVzZXIxQHVzZXIuY29tIiwiZXhwIjoxNzMyMTk2MjA1LCJpYXQiOjE3MzIxNjAyMDUsInVzZXJJZCI6ImVkOGY1NmE0LTEyY2QtNDRiNS04Zjk5LTRiMWQ4NzYxZDNiOSIsInJvbGVzIjoiVVNFUiJ9.UTuKaLOQ7EeOiVwuC1xeznHtUL-OXhyoYWu3v1_B8FRgtp3SgUErxzKUvv8XDdDHqN7gtVwnDH3IajnC5F4ou_POfnWvQ-pnjUQ6hAMn0XUf3JLWm_ysgWbH_sPwIv6ykuC5uUJ9XLtqex36UTSlTI8hqZoLA0xClnmuSNuiEIiPsByGv0RGRRx63H-oVITHhj7bghRmu1TMnrW4DO0E82NT_laRgoibMUEtt4MGKl0JSraWdt20fH1yn-J1fWAqJxXCDQy_yaY0Zm2-U9PSNTA7BZfgfK9h23I58jFU5mDbpyMAe55rmNGK0Chlr0IW33-h1Akq6huACSJmSiEGtA`,
  },
})
