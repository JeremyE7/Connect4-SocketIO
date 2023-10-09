const SearchGame = ({ handleSubmit }) => {
  return (
    <form action="submit" onSubmit={handleSubmit}>
    <label htmlFor="">
        Nombre:
        <input name='name' type="text" placeholder='Juan, Vegeta77, etc.' />
    </label>
    <button type='submit'>
        Buscar partida
    </button>
</form>
  )
}

export default SearchGame
