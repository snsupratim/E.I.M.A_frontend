import React from "react";

const ChatBase = async ({ params }) => {
  const id = await params.id;
  return <div>ChatBase : {id}</div>;
};

export default ChatBase;
