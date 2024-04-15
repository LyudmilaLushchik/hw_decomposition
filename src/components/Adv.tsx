// Отображение картинки с рекламой

interface AdvProps {
  img: string
}

export default function Adv({img}: AdvProps) {
  return (
    <div className='adv'>
      <img src={img} alt='' />
    </div>
  )
}