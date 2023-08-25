
export  const navigate = (href) => {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event('pushstate')
    window.dispatchEvent(navigationEvent)
} 