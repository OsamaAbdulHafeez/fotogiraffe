const RedButton = ({children,className = ""}) => {
  return (
    <div className={`bg-redColor py-1 w-fit rounded-lg cursor-pointer hover:bg-darkRed ${className}`}>
      {children}
    </div>
  )
}

export default RedButton
