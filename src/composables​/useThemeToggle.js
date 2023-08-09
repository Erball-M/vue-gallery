import { onMounted, ref } from 'vue'

export function useThemeToggle() {
    const currentTheme = ref(document.body.dataset.theme ?? 'light')

    function changeTheme() {
        const newTheme = currentTheme.value === 'dark' ? 'light' : 'dark'
        currentTheme.value = newTheme
        document.body.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    }

    onMounted(() => {
        currentTheme.value = localStorage.getItem('theme')
    })

    return { currentTheme, changeTheme }
}