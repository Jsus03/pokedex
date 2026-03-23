const Card = (
    {
        cardHeader = null,
        cardBody = null,
        cardFooter = null,
    }
) => {
    return (
        <div className="card">
            {cardHeader}
            {cardBody}
            {cardFooter}
        </div>
    )
}

export default Card;