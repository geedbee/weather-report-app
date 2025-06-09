function SearchForm({onDataSubmit}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedData = event.target.elements.search.value;
    onDataSubmit(submittedData);
  }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="Search..." />
            <button type="submit">Search</button>
        </form>
    </>
  );
}

export default SearchForm;
