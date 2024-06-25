import { ReactNode } from "react"

const Wrapper = ({children, className}: {children: ReactNode, className?: string}) => {
    return (
      <div className={`h-full headfont-regular mx-auto w-full max-w-screen px-4 lg:px-64 ${className}`}>
          {children}
      </div>
    )
  }
  
  export default Wrapper