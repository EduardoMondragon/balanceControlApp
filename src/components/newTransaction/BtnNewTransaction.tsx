import Button from "react-bootstrap/Button";

const BtnNewTransaction = (props: any) => {
  const { setShow } = props;
  const openModal = () => {
    setShow(true);
  };

  return (
    <Button
      className="btnTransaction"
      onClick={() => {
        openModal();
      }}
    >
      Agregar Movimiento
    </Button>
  );
};

export default BtnNewTransaction;
