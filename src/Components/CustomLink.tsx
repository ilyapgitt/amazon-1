export const CustomLink = ({ text, link }: {text: string, link: string}) => {
  return (
    <a
      className='text-colorLink hover:text-red-500 hover:border-b hover:border-red-500'
      href={link}
    >
      {text}
    </a>
  )
}