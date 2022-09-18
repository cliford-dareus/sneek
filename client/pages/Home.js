import view from "../UTILS/view.js";

export default async function Home (path) {

    view.innerHTML = `
    <div class="container">
    <div class="main__content">
        <div class="showcase__content flex">
            <div class="showcase__left flex center">
                <div class="showcase__left__content flex">
                    <div class="showcase__left__content__text">
                        <p class="showcase__header__title"># Featured</p>
                        <h1 class="showcase__text">Showcase a collection of new, upcoming and popular Game you are interested in.</h1>
                    </div>
                    <a href="" class="btn showcase__btn"> Add to collection</a>
                </div>
            </div>

            <div class="showcase__rigth">
                <p class="showcase__header__title">Popular Games</p>
                <div class="showcase__rigth__content">
                    <div class="content__item">
                        <p>God of war</p>
                        <p>action, advendture</p>
                        <p>rating: 4 out 5</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="upcoming__content flex">
            <div class="content__card card__one">
                <p class="upcoming__card__title">Upcoming Games</p>
            </div>
            <div class="content__card">
                <p class="content__card__title">PlayStatipn</p>
                <div class="card__container">
                    <div class="card">
                        <p>God of wars</p>
                        <p>action</p>
                        <p>2023</p>
                    </div>
                </div>

                <div class="card__container">
                    <div class="card">
                        <p>God of wars</p>
                        <p>action</p>
                        <p>2023</p>
                    </div>
                </div>

                <div class="card__container">
                    <div class="card">
                        <p>God of wars</p>
                        <p>action</p>
                        <p>2023</p>
                    </div>
                </div>
            </div>
            <div class="content__card">
                <p class="content__card__title">X-box</p>
                <div class="card__container">
                    <div class="card">
                        <p>God of wars</p>
                        <p>action</p>
                        <p>2023</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
    `
};