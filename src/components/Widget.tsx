// Отрисовывает виджеты

interface CardProps {  
  title: string,
  titleHref?: string,
  description?: string[]  
}

function Card(props : CardProps) {
  return (
    <div className='card-view'>
      <div className='card-title'>
        <a href={props.titleHref}>{props.title}</a>
      </div>
        <ul>
          {props.description.map((item, index) => (
            <li className='descList' key={index}>{item}</li>
          ))}
        </ul>
    </div>
  )
}

export default function Widget(props: {array: CardProps[]}) {
    const array = props.array
  return (
    <div className='widgets'>
      {array.map((item, index) => (
        <div  key={index}>
          <Card {...item} />
        </div>
      ))}
    </div>  
  )
}
