import './styles.css'

export const TextInput = ({inputValue, actionFn}) =>{
  return(
    <input
      className='textInput'
      onChange={actionFn}
      value={inputValue} 
      type="search" 
      placeholder='Type your search'/>
  ) 
}