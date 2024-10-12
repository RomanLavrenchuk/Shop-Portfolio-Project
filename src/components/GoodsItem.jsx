function GoodsItem(props) {
    const { id, name, description, price, image } = props;

    return (
        <div className='card' id={id}>
            <div className='card-image'>
                <img src={image} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button className='btn'>Buy</button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    {price} $
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
