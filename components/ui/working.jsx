function Working({ children, ...props }) {
  return (
    <div className='flex flex-col gap-2' {...props}>
      <div>
        <h4 className='scroll-m-20 text-lg font-semibold tracking-tight text-yellow-500'>
          I&apos;m currently working on...
        </h4>
      </div>
      <div className='rounded-lg border-2 border-dashed border-yellow-500 p-2'>
        {children}
      </div>
    </div>
  )
}

export default Working
