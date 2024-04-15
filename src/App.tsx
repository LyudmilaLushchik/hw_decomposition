/*App - компонент, в котором формируется отображаемая страница
Содержит три основных блока с классами:
header (Новострой блок со ссылками на на главные новости, информационное поле с данными биржи и баннер с рекламой)
main (Поисковая строка с фильтрами, лого и рекламным большим рекламным баннером)
footer (Плитка виджитов для отображения дополнительной информации, новостей, сводок)

В качестве источника информации принимаются списки в формате json с объектами в которых поля стандартизированы.
Основным компонентом для отображения является TextLink, который примает объект и в зависимости от 
указанного типа отрисовывает ту или иную новость.

CurrentDate отображение текущей даты в формате чч.мммм.гггг
Filters отрисовывает список заголовков в горизонтали
Lists отображает список заголовков с картиной при наличии в вертикали
Adv отрисовка блока с рекламой в виде картинки
Input поля поисковика с отображением логотипа и большого рекламного баннера
Cards отрисовывает информацию в виде плиток с заголовком и картинкой, а также
может отображать иформацию в виде списка
*/

import './App.css'
import Filters from './components/Filters'
import CurrentDate from './components/Date'
import News from './components/News'
import menuHeaderDb from './db/menuHeader'
import newsHeaderDb from './db/newsHeader'
import currencyDb from './db/currency'
import searchFiltersDb from './db/searchFilters'
import widgetsDb from './db/widgets'
import Adv from './components/Adv'
import Input from './components/Input'
import Widget from './components/Widget'


function App() {
  
  return (
    <>
      <div className='header'>
        <div className='news-block'>
          <div className='header-menu'>
            <Filters array={menuHeaderDb}/>
            <CurrentDate />
          </div>
  
          <div className='news'>
            <News array={newsHeaderDb}/>
          </div>
        
          <div className='currency'>
            <Filters array={currencyDb}/>
          </div>
        </div>
        
        <Adv img='https://loremflickr.com/150/150'/>
  
      </div>
      
      <div className='main'>
        <Input array={searchFiltersDb}/>
        <Adv img='https://loremflickr.com/800/100'/>
      </div>
  
      <div className='footer'>
        <Widget array={widgetsDb}/>
      </div>
    </>
  )
}

export default App
