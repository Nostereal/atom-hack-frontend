import React from "react";
import { Spin } from "antd";
import CardsList from "../CardsList/CardsList";
import CardModel from "../../models/card";
import block from "bem-cn";
import './MainPage.scss'

const b = block('MainPage')

const MainPage: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        setLoading(true);
        // todo: make http req
        setTimeout(() => setLoading(false), 300)
    }, [])

    let cardID = 0
    const generateCard: (title: string, link: string, fav: boolean) => CardModel = (title, link, fav) => ({
        id: cardID++,
        title: title,
        image: {
            small_url: 'https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png',
            normal_url: '',
            large_url: link
        },
        is_favorite: fav
    })

    const events = []
    events.push(generateCard('Алексей Щербаков', 'https://avatars.mds.yandex.net/get-zen_doc/1590365/pub_5dac9fd33639e600af7a5331_5de4163f5d636200b075be92/scale_1200', false))
    events.push(generateCard('Группа кис–кис', 'https://zhizn-zvezd.ru/wp-content/uploads/2019/11/%D0%BA%D0%B8%D1%81-%D0%BA%D0%B8%D1%81-%D1%82%D0%B8%D0%BD%D0%B4%D0%B5%D1%80-768x490.png', false))
    events.push(generateCard('Дора', 'https://avatars.yandex.net/get-music-content/149669/1172d689.p.6826935/m1000x1000', false))
    events.push(generateCard('Лев Лещенко', 'https://sputnik.az/images/40355/90/403559049.jpg', false))
    events.push(generateCard('Спекакль "Женитьба"', 'https://afisha-go.ru/sites/default/files/gallery/covers/spektakl-zhenitba1333524609.jpg', false))

    const chill = []
    chill.push(generateCard('Триум Отель', 'https://media-cdn.tripadvisor.com/media/photo-m/1280/17/4b/63/9b/business-center.jpg', false))
    chill.push(generateCard('Гринвей Парк Отель', 'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/2e/0d/17/greenway-park-hotel.jpg', false))
    chill.push(generateCard('Империал', 'https://media-cdn.tripadvisor.com/media/photo-o/04/c7/c3/e4/caption.jpg', false))
    chill.push(generateCard('Гостиница Орбиталь', 'https://media-cdn.tripadvisor.com/media/photo-o/11/04/24/fb/caption.jpg', false))
    chill.push(generateCard('Гостиница Юбилейная', 'https://media-cdn.tripadvisor.com/media/photo-o/11/cd/d2/2d/caption.jpg', false))

    const food = []
    food.push(generateCard('Форест Гамп', 'https://media-cdn.tripadvisor.com/media/photo-s/09/b5/b6/82/forrest-gump-family-cafe.jpg', false))
    food.push(generateCard('Ресторан Caspary Brau', 'https://media-cdn.tripadvisor.com/media/photo-s/15/5b/88/bb/caption.jpg', false))
    food.push(generateCard('Папа Гриль & Мама Салат', 'https://media-cdn.tripadvisor.com/media/photo-s/0e/76/08/3f/caption.jpg', false))
    food.push(generateCard('Кафе Фазенда', 'https://media-cdn.tripadvisor.com/media/photo-s/0b/10/58/00/fb-img-1461993961110.jpg', false))
    food.push(generateCard('Бьянко Россо', 'https://media-cdn.tripadvisor.com/media/photo-s/16/6d/5c/58/8-484-392-2111-6-12-00.jpg', false))

    return (
        <div className={b()}>
            <Spin size='large' spinning={loading} className='spinner'/>
            {!loading &&
                <>
                    <CardsList title='Мероприятия' cards={events}/>
                    <CardsList title='Отдохнуть' cards={chill}/>
                    <CardsList title='Поесть' cards={food}/>
                </>
            }
        </div>
    )
}

export default MainPage