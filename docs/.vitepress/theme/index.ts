import DefaultTheme from 'vitepress/theme'
import { h, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'

// Reading time estimation for Chinese text
function estimateReadingTime(text: string): number {
  // Chinese reading speed: ~400-500 chars/min, use 450
  // English reading speed: ~200-250 words/min, use 225
  const chineseChars = (text.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length
  const englishWords = text.replace(/[\u4e00-\u9fff\u3400-\u4dbf]/g, ' ').split(/\s+/).filter(w => w.length > 0).length
  const minutes = Math.ceil(chineseChars / 450 + englishWords / 225)
  return Math.max(1, minutes)
}

function insertReadingTime() {
  // Only on article pages, not home or index
  const content = document.querySelector('.vp-doc')
  if (!content) return

  const isHome = document.querySelector('.VPHome')
  if (isHome) return

  // Remove old reading time badge if exists
  document.querySelectorAll('.reading-time-badge').forEach(el => el.remove())

  const h1 = content.querySelector('h1')
  if (!h1) return

  const text = content.textContent || ''
  const minutes = estimateReadingTime(text)
  const charCount = text.length

  const badge = document.createElement('div')
  badge.className = 'reading-time-badge'
  badge.innerHTML = `<span class="reading-time-icon">⏱</span> 约 ${minutes} 分钟阅读 · ${charCount > 1000 ? Math.round(charCount / 1000) + 'k' : charCount} 字`
  h1.insertAdjacentElement('afterend', badge)
}

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    onMounted(() => {
      nextTick(insertReadingTime)
    })

    watch(() => route.path, () => {
      nextTick(() => {
        setTimeout(insertReadingTime, 100)
      })
    })
  },
}
