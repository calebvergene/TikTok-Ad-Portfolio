import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
      <PropagateLoader color="#ffffff" />
    </div>
  );
}

export default Loading;
