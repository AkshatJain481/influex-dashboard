import { useState } from "react";
import { Tags, SquarePlus } from "lucide-react";
// import { TagAutomation } from "../../utils/interfaces";
import TagsPopupModal from "../ui/TagsPopupModal";
import Button from "../common/Button";

const TagsComponent = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="w-full">
      {openModal && (
        <TagsPopupModal handleCloseModal={() => setOpenModal(false)} />
      )}
      <h2 className="flex justify-center items-center space-x-4">
        <Tags size={30} color="gray" />
        <p className="text-xl font-bold text-gray-500">Tags Automation</p>
      </h2>
      <div className="mt-6 flex justify-end">
        <Button
          icon={<SquarePlus className="" size={30} color="white" />}
          text="Add"
          type="button"
          className="px-4 py-1 rounded-lg"
          onClick={() => setOpenModal(true)}
        />
      </div>
    </div>
  );
};

export default TagsComponent;
