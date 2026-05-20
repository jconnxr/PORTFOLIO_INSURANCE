export function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId)
  if (!target) return

  const navOffset = document.querySelector('header')?.offsetHeight ?? 72
  const top =
    target.getBoundingClientRect().top + window.scrollY - navOffset

  window.scrollTo({ top, behavior: 'smooth' })
}
