const introduction = () => {
  return (
    <div>
      <nav className="datos">
        <h1>NUESTRO EQUIPO</h1>
        <ul className="name">
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>NOMBRE</strong>
                </td>
                <td>Kevin Alexander Checa Díaz</td>
              </tr>
              <tr>
                <td>
                  <strong>OCUPACION</strong>
                </td>
                <td>Estudiante</td>
              </tr>
              <tr>
                <td>
                  <strong>EDAD</strong>
                </td>
                <td>23 años</td>
              </tr>
              <tr>
                <td>
                  <strong>ESTADO CIVIL</strong>
                </td>
                <td>Soltero</td>
              </tr>
            </tbody>
          </table>
        </ul>
        <br></br>
        <img
          className="persona"
          src="https://www.nicepng.com/png/detail/608-6080578_png-file-svg-icono-de-persona-png.png"
          alt="imgPers"
        />
      </nav>
    </div>
  );
};
export default introduction;
