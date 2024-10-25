import "./userCard.css"

export function FirstComponent() {
    let user = {
        name: 'Murat',
        lastName: 'Akkus',
        age: 22,
        hobbies: 'ProgrammingProg, Reading'
    }

    return (
        <>
            <div className="card__container">
                <div className="user__img-container">
                    <img className="user__img" src="../public/vite.svg" alt="user image" />
                </div>
                <div className="user__info-container">
                    <div className="user__name bold-text">{user.name} {user.lastName}, {user.age}</div>
                    <div className="user__hobbies">
                        <div className="user__hobbies-title bold-text">
                            Hobbies:
                        </div>
                        <div className="user__hobbies-content">
                            {user.hobbies}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}