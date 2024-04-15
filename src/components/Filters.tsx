// Отображение заголовков со ссылками из: меню шапки страницы, курса обмена, меню фильтров поиска

export interface FilterProps {
  title: string,
  titleHref?: string,
}

export function Filter(props: FilterProps) {
  return (
    <div className='card'>
      <a href={props.titleHref}>{props.title}</a>
    </div>
  )
}

export default function Filters(props: {array: FilterProps[]}){
  const array = props.array
  return (
   <ul className='filters'>
    {array.map((item: FilterProps, index: number) => (
      <li key={index}>
        <Filter {...item} />
      </li>
    ))}
   </ul>
  )
}