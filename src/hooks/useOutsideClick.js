const { useEffect, useCallback } = require('react')

const useOutsideClick = (contentRef = undefined, callback = () => {}, defaultClosing = true) => {
    const handleClickOutside = useCallback(
        (e) => {
            if (!contentRef.current) return
            const root = contentRef.current
            const isClickInside = root.contains(e.target)
            if (!isClickInside) {
                callback()
            }
        },
        [contentRef, callback],
    )

    useEffect(() => {
        defaultClosing && window.addEventListener('mousedown', handleClickOutside)
        return () => {
            window.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
}

export default useOutsideClick
