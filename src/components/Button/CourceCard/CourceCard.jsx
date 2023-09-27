import './CourceCard.css';

const CourceCard = (props) => {
    return (
        <div class="card">
            <div class="image__container">
                <img src={props.cource.img} alt="" />
                <div class="level">{props.cource.level}</div>
            </div>
            <h3 class="card__title">{props.cource.title}</h3>

            <div class="card__info">
                <div class="user">
                    <img src={props.cource.user.avatar} alt={props.cource.user.name} />
                    <p>{props.cource.user.name}</p>
                </div>
                <div class="rating">
                    <p>{props.cource.rating} rating</p>
                </div>
            </div>
            {props.isMyCource ? (<p> {props.cource.finishedClasses} / {props.cource.classes} Classes </p>) :
                (
                    <div class="card__info">
                        <div>{props.cource.students} Students</div>
                        <div>{props.cource.classes} Classes</div>
                        <div>{props.cource.schedule}</div>
                        <div>{props.cource.duration} sec</div>
                    </div>
                )}
        </div>

    )
}
export default CourceCard