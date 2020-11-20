import React from "react";

const CardsInicio2 = (props) => {
  const { Data4 } = props;
  return (
    <div>
      <div className="row">
        <div className="col">
          <br />
          {Data4.map((dato, index) => (
            <div className="border rounded media card_inicio" key={index}>
              <img className="img_2 rounded mr-3" src={dato.imagen} alt="..." />
              <table>
                <tbody>
                  <tr>
                    <td className="font-weight-bold align-middle">
                      <a className="texto_4 " href={dato.href}>
                        {dato.título}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
          <br />
        </div>
      </div>
    </div>
  );
};
export default CardsInicio2;
