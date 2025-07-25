import { useDebounce } from "@/lib/hooks/useDebounce/useDebounce";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  onChange: (val: string) => void;
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange, placeholder }) => {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 500);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  return (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 shadow-md w-full mx-auto transition-colors duration-300">
      <FaSearch className="text-[#ff7701] dark:text-gray-300" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full outline-none text-[10px] sm:text-sm text-gray-700 dark:text-white bg-transparent placeholder-gray-400 dark:placeholder-gray-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
