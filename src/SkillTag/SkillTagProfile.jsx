import React from 'react';

function SkillTagProfile({text , colour}) {
  return (
    <div className={`p-1 text-sm rounded-md ${colour ? colour : "bg-gray-300"}`}>
      {text}
    </div>
  );
}

export default SkillTagProfile;
