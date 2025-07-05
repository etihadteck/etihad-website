import SearchForm from './SearchForm';

function Search() {
  return (
    <div className="mt-16 flex flex-col gap-16">
      <p className="text-accent-400 text-center text-6xl font-bold">
        ابحث عن شحنتك
      </p>

      <SearchForm />
    </div>
  );
}

export default Search;
