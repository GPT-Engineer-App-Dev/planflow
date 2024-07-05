import React, { useState } from "react";
import Modal from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProjectModal = ({ isOpen, onOpenChange }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const handleSave = () => {
    // Handle save logic here
    onOpenChange(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      trigger={<Button className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Add Project</Button>}
    >
      <h2 className="text-xl font-bold mb-4">Add Project</h2>
      <div className="space-y-4">
        <Input
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="color"
          placeholder="Project Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <Button variant="outline" onClick={() => onOpenChange(false)}>
          Cancel
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </Modal>
  );
};

export default ProjectModal;