const PhraseCard = ({ data }) => {
    return (
        <article className="box">
            <section className="center">
                <p>{data.phrase}</p>
                <h3>{data.author}</h3>
            </section>
        </article>
    );
};

export default PhraseCard;