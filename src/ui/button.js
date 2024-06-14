
export default function Button({children, className, size, ...props}) {
 
    const cssSize = {
        "small" :"px-2 py-1 text-lg",
        "medium" : 'px-3 py-1 text-xl',
        "large" : 'px-4 py-2 text-2xl',
    }

    let cssClassName = cssSize[size] + " " + className + " ";
  return (
    <button className={`${cssClassName}`} {...props}>
        {children}
    </button>
  )
}
