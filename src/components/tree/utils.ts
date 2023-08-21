const append = (type: string, parent: Element, className?:string) => {
    const _obj = document.createElement(type)
    if (className) _obj.className = className
    parent.appendChild(_obj)

    return _obj
}

export {
    append
}