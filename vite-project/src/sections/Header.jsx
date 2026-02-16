import TextButton from "../components/common/Buttons/TextButton";
import { Menu } from "lucide-react";

function Header({ filter, filterBy, setFilterBy }) {
  return (
    <header className="mt-25 text-center p-8">
      <h1 className="text-2xl font-semibold mb-4">Discover Our Collections</h1>
      <p className="text-slate-500">
        Shop the latest products from top brands. Quality guaranteed, fast
        shipping.
      </p>
      <div className=" flex overflow-x-auto whitespace-nowrap no-scrollbar gap-4 mt-8">
        {filter.map((option) => (
          <TextButton
            key={option}
            onClick={() => setFilterBy(option)}
            text={option}
            optionalClassName={`flex-shrink-0 ${filterBy === option ? "bg-blue-500 text-white" : "bg-gray-100 text-slate-600"}`}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;
