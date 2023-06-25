import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface IProps {
  setShow: (val?: any) => void;
  handleInputs: (val?: any) => void;
  saveNewItem: () => void;
  inputEntries: any;
}

const Entry = (props: IProps) => {
  const { setShow, handleInputs, saveNewItem, inputEntries } = props;

  return (
    <div className="myEntryModal">
      <div className="closeArea">
        <p onClick={() => setShow(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </p>
      </div>
      <div>
        <Form.Label htmlFor="inputTitle">Nombre</Form.Label>
        <Form.Control
          type="text"
          id="inputTitle"
          aria-describedby="title"
          name="title"
          onChange={(e) => {
            handleInputs(e.target);
          }}
          value={inputEntries?.title}
        />
        <br />
        <Form.Label htmlFor="inputAmount">Cantidad</Form.Label>
        <Form.Control
          type="number"
          id="inputAmount"
          aria-describedby="amountHelper"
          name="amount"
          onChange={(e) => {
            handleInputs(e.target);
          }}
          value={inputEntries?.amount}
        />
        <Form.Text id="amountHelper" muted>
          cantidad con - será registrada como gasto, cantidad positiva sera
          registrada como entrada
        </Form.Text>

        <Button
          className="btnTransaction"
          onClick={() => {
            saveNewItem();
          }}
          disabled={!inputEntries?.title || !inputEntries?.amount}
        >
          Guardar Movimiento
        </Button>
      </div>
    </div>
  );
};

export default Entry;
