const Filter = ({filter, changeFilter}) => {
    return (<>
        <p>Find contacts by name</p>
          <input value={filter} type="tel" onChange={changeFilter}
            name="filter" placeholder="filter contact" />
        </>
    )
}

export default Filter;