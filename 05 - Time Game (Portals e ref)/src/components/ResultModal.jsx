import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { remaingTime, targetTime, onReset },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const userLost = remaingTime <= 0;
  const score = Math.round((1 - remaingTime / (targetTime * 1000)) * 100);

  const formattedRemainingTime = (remaingTime / 1000).toFixed(2);

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2> Você Perdeu!!! </h2>}
      {!userLost && <h2> Sua pontuação: {score} </h2>}
      <p>
        O tempo limite era{" "}
        <strong>
          {targetTime} segundo{targetTime > 1 ? "s" : ""}
        </strong>
      </p>
      <p>
        Você parou o cronômetro com {formattedRemainingTime} segundos sobrando
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Fechar</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
