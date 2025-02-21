import TagsInput from "../common/TagsInput";
import { useState } from "react";
import Button from "../common/Button";
import { Cog } from "lucide-react";

const TagsPopupModal = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [responseText, setResponseText] = useState<string>("");

  return (
    <div
      className="z-20 fixed inset-0 flex justify-center items-center bg-black/50 overflow-auto"
      onClick={handleCloseModal}
    >
      <div
        className={`rounded-lg space-y-6 w-96 p-6 fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 shadow bg-white z-20 overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="flex items-center justify-center space-x-4 text-gray-500">
          <Cog size={24} />
          <p className="text-xl font-bold"> Automated Response</p>
        </h3>
        <TagsInput tags={tags} setTags={setTags} />
        <textarea
          value={responseText}
          onChange={(e) => setResponseText(e.target.value)}
          placeholder="write your response here..."
          className="border-solid h-40 border-gray-200 w-full rounded-lg border-2 focus:outline-none focus:ring-0 px-4 py-2 resize-none"
        />
        <div className="flex items-center justify-between">
          <button
            onClick={handleCloseModal}
            className="bg-transparent border-2 border-gray-400 text-lg rounded-lg px-4 py-2 cursor-pointer"
          >
            Cancel
          </button>
          <Button
            text="Save"
            className="rounded-lg py-2 px-4 border-2 border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default TagsPopupModal;
