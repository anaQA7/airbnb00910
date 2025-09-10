import React from "react";
import { Textarea } from "./ui/textarea";

interface AboutcomponentProps {
  bio?: string;
  isEditing?: boolean;
  onBioChange?: (bio: string) => void;
  className?: string;
}

const Aboutcomponent = ({
  bio = "Travel enthusiast and photographer. Love exploring new cultures and meeting people from around the world. Host since 2019.",
  isEditing = false,
  onBioChange,
  className = "",
}: AboutcomponentProps) => {
  return (
    <div className={className}>
      <h3 className="font-semibold mb-2">About</h3>
      {isEditing ? (
        <Textarea
          value={bio}
          onChange={(e) => onBioChange?.(e.target.value)}
          rows={4}
        />
      ) : (
        <p className="text-gray-600 text-sm">{bio}</p>
      )}
    </div>
  );
};

export default Aboutcomponent;