 // Отрисовка поля ввода в поиске, фильтров поиска, логотипа поисковой системы

import Filters from './Filters'
    
export default function Input({...props}) {
  return (
    <>
      <Filters array={props.array}/>
      <div className='input-box'>
        <div className='logo' >Yandex logo</div>
        <input type='text' />
      </div>
    </>
  )
}