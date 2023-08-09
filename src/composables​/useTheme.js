import { onMounted } from 'vue'

export function useTheme() {
    onMounted(() => {
        const theme = localStorage.getItem('theme') ?? 'light'
        localStorage.setItem('theme', theme)
        document.body.setAttribute('data-theme', theme)
    })
}