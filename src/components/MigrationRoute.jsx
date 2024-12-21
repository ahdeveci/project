import React from 'react';

const MigrationRoute = ({ href, title, body }) => {
  return (
    <div className="bg-white/10 rounded-2xl p-6 hover:translate-y-[-5px] transition-transform hover:bg-white/15">
      <a href={href} className="text-white no-underline">
        <h3 className="text-2xl mb-2 bg-gradient-to-r from-emerald-500 via-lime-300 to-white bg-clip-text text-transparent">{title}</h3>
        <p>{body}</p>
      </a>
    </div>
  );
};

export default MigrationRoute;