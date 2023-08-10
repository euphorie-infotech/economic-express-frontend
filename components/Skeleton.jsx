import React from "react";

const Skeleton = (props) => {
  return (
    <section>
      <div className="px-24">{props.children}</div>
    </section>
  );
};

export default Skeleton;
