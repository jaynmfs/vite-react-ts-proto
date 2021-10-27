import React from 'react'

const PageNotFound: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <img
        alt="Page Not Found"
        id="error"
        src="./src/404.svg"
        style={{ maxWidth: '100vh' }}
      />
    </div>
  )
}

export default PageNotFound
