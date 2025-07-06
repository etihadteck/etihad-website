import LocalPackages from '../_components/LocalPackages';
import Search from '../_components/Search';

export default function Page() {
  return (
    <main>
      <Search />

      <div className="mt-24 flex flex-col gap-8">
        <h2 className="text-accent-100 text-center text-3xl font-bold">
          شحناتك السابقة
        </h2>
        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
          <LocalPackages />
        </div>
      </div>
    </main>
  );
}
