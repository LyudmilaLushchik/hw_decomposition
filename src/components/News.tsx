// Отрисовка новостей из шапки страницы

interface NewsHeaderProps {
  title: string,
  titleHref?: string,
  icon?: string
}

function NewsHeader(props: NewsHeaderProps ){
  return (
    <div className='card'>
      <img src={props.icon} alt='' />
      <a href={props.titleHref}>{props.title}</a>      
    </div>
  )   
}

export default function News(props: {array: NewsHeaderProps[]}){
  const array = props.array
  return (
   <ul className='list-news'>
    {array.map((item: NewsHeaderProps, index: number) => (
      <li className='new-item' key={index}>
        <NewsHeader {...item} />
      </li>
    ))}
   </ul>
  )
}