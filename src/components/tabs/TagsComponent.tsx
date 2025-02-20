import TagsInput from "../common/TagsInput";
import { useState } from "react";
import { FaTags } from "react-icons/fa";
// import { TagAutomation } from "../../utils/interfaces";
import TagsPopupModal from "../ui/TagsPopupModal";
import { CiSquarePlus } from "react-icons/ci";
import Button from "../common/Button";

const TagsComponent = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="w-full">
      {openModal && (
        <TagsPopupModal handleCloseModal={() => setOpenModal(false)} />
      )}
      <h2 className="flex justify-center items-center space-x-4">
        <FaTags size={30} color="gray" />
        <p className="text-xl font-bold text-gray-500">Tags Automation</p>
      </h2>
      <div className="flex justify-end mt-2">
        <Button
          icon={<CiSquarePlus className="" size={30} color="white" />}
          text="Add Automated Response"
          type="button"
          className="px-4 py-1 rounded-lg"
          onClick={() => setOpenModal(true)}
        />
      </div>
    </div>
  );
};

export default TagsComponent;
