

function Card({ props }) {
    return (
        <div>
            <div className="card">
                <img src={props.thumb} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <p className="card-text">{props.series}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
