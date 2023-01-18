import mouses from 'assets/mouses'
import text from '/Text'
import Mouse from './Mouse'

function App() {
  return (
    <>
      <ul className='mouses-list'>
      {mouses.map(mouse => (
        <Mouse props={mouse}/>
        ))}
      </ul>
      <Text title='Mouse e-sport' description='ns'/>
    </>
  )
}

export default App