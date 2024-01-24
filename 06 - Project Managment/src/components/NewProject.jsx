import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption={"Fechar"}>
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Campo inválido
        </h2>
        <p className="text-stone-600 mb-4">
          Opa opa meu patrão parece que você esqueceu de preencher o campo
        </p>
        <p className="text-stone-600 mb-4">
          Por favor insira um valor válido para todos os campos
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancelar
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Salvar
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label={"Nome do Projeto"} ref={titleRef} />
          <Input label={"Descrição do Projeto"} textArea ref={descriptionRef} />
          <Input type="date" label={"Data Limite"} ref={dueDateRef} />
        </div>
      </div>
    </>
  );
}

export default NewProject;
