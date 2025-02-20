import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const TagsInput = ({ tags, setTags }: { tags: string[]; setTags: any }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Prevent spaces in the input
    const newValue = e.target.value.replace(/\s/g, "");
    setInputValue(newValue);
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-start w-full">
      <div className="max-h-32 overflow-y-auto border border-gray-300 rounded-t-lg w-full">
        <div className="flex items-center flex-wrap gap-2 p-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-600 text-white px-3 py-1 rounded-full"
            >
              <span>{tag}</span>
              <button
                type="button"
                className="ml-2 text-sm text-white hover:text-gray-200 cursor-pointer"
                onClick={() => handleRemoveTag(index)}
              >
                <RxCross2 size={14} color="white" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-gray-300"></div>

      <div className="flex items-center w-full border-x border-b border-gray-300 rounded-b-lg p-2">
        <input
          type="text"
          className="flex-grow focus:outline-none focus:ring-0 bg-transparent"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter a tag..."
        />
        <button
          type="button"
          onClick={handleAddTag}
          className="ml-2 px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TagsInput;
