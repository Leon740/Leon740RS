import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="px-4 py-4 bg-slate-800 rounded-lg"
      onClick={() => navigate(-1)}
    >
      Back
    </button>
  );
}
export default BackButton;
