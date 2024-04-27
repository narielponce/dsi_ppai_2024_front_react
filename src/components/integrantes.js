import IntegranteCard from './IntegranteCard'

const Integrantes = ({ integrantes }) => {
  return (
    <div className="integrantes-list">
      {integrantes.map(integrante => (
        <IntegranteCard
          key={integrante.legajo}
          nombre={integrante.nombre}
          imagen={integrante.imagen}
          legajo={integrante.legajo}
          email={integrante.email}
          linkedin={integrante.linkedin}
        />
      ))}
    </div>
  );
};

export default Integrantes;
