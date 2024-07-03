
export default function Button({children, className, size, ...props}) {
 
    const cssSize = {
        "small" :"px-2 py-1 text-lg",
        "medium" : 'px-3 py-1 text-xl',
        "large" : 'px-4 py-2 text-2xl',
    }

    let cssClassName = cssSize[size] + " " + className + " dark:bg-white dark:text-black border-[#4d148c] hover:bg-white dark:hover:bg-black dark:hover:text-white dark:hover:border-white dark:border-white hover:text-[#4d148c] bg-[#4d148c] ";
  return (
    <button className={`${cssClassName}`} {...props}>
        {children}
    </button>
  )
}
