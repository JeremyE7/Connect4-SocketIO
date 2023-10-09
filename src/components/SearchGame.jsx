const SearchGame = ({ handleSubmit }) => {
  return (
    <form action="submit" onSubmit={handleSubmit}>
    <label htmlFor="">
        Nombre:
        <input name='name' type="text" placeholder='Juan, Vegeta77, etc.' required/>
    </label>
    <button type='submit' className="btn-search-game">
        Buscar partida
    </button>
</form>
  )
}

export default SearchGame
