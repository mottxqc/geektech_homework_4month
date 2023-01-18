function Mouse(props) {
    const Mouse = props.props
    return (
        <li className="Mouse" id={"Mouse-" + Mouse.id}>
            <img className="Mouse-image" src={"./src/assets/" + Mouse.image} alt={Mouse.title}/>
            <div className="Mouse-text">
                <h3 className="Mouse-title">{Mouse.title}</h3>
                <p className="Mouse-description">{Mouse.description}</p>
                <div className="Mouse-info">
                    <p className="Mouse-price">${Mouse.price}</p>
                    <a className="Mouse-button button" href={"path-to-image/" + Mouse.id}>Show more</a>
                </div>
            </div>
        </li>
    )
}

export default Mouse