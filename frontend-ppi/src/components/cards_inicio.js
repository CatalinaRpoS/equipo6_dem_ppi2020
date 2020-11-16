import React from "react";

const CardsInicio = (props) => {
  const { Data2 } = props;
  return (
    <div>
      <div className="row">
        <div className="col">
          <br />
          {Data2.map((dato) => (
            <div className="border rounded media card_inicio">
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
export default CardsInicio;
