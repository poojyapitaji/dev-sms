const { useEffect, useCallback } = require('react')

const useOutsideClick = (containerRef = undefined, contentRef = undefined, callback = () => {}) => {
    const handleClickOutside = useCallback(
        (e) => {
            if (!contentRef.current) return
            const link = containerRef.current
            const isLinkClick = link.contains(e.target)
            const root = contentRef.current
            const isClickInside = root.contains(e.target)
            if (!isClickInside && !isLinkClick) {
                callback()
            }
        },
        [contentRef, containerRef, callback],
    )

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside)
        return () => {
            window.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
}

export default useOutsideClick
