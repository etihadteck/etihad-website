import SearchForm from './SearchForm';

function Search() {
  return (
    <div className="mt-10 flex flex-col gap-8 sm:mt-16 sm:gap-16">
      <p className="text-accent-400 text-center text-2xl font-bold sm:text-4xl lg:text-6xl">
        ابحث عن شحنتك
      </p>

      <SearchForm />
    </div>
  );
}

export default Search;
