import React from 'react'

interface MobileNavProps {
  visible?: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ visible }) => {
  if (!visible) {
    return null
  }

  return (
    <div className='bg-black w56 absolute top-0 left-0 py-5'>

    </div>
  )
}

export default MobileNav