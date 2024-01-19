import React from "react";

import Button from "./Button";

import NoProjectImage from "../assets/no-projects.png";

function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={NoProjectImage}
        alt="an empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        Nenhum Projeto Selecionado
      </h2>
      <p className="text-stone-400 mb-4">
        Selecione um projeto ou então inicie um
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Adicionar novo projeto</Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
