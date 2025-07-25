import { useDebounce } from "@/lib/hooks/useDebounce/useDebounce";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  onChange: (val: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 500);
  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md w-full  mx-auto">
      <FaSearch className="text-gray-400" />
      <input
        type="text"
        placeholder="Search users..."
        className="flex-1 outline-none text-gray-700"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
