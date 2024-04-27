import './IntegranteCard.css';

const IntegranteCard = ({ nombre, imagen, legajo, email, linkedin }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card" style={{ width: "13rem" }}>
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{nombre}</h4>
                    <p className="card-text">Legajo: {legajo} {email}</p>
                </div>
                <div className="card-footer text-muted">
                    <a href={linkedin} target="_blank" rel="noreferrer" className="btn btn-primary">LinkedIn</a>
                </div>
            </div>
        </div>
    );
};

export default IntegranteCard;