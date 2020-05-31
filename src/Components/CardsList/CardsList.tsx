import React from "react";
import { useHistory } from 'react-router';
import { Card, notification } from 'antd';
import CardModel from "../../models/card";
import { HeartFilled, HeartOutlined } from "@ant-design/icons/lib";
import { addToFavorites } from "../../api/routes";
import block from "bem-cn";
import './CardsList.scss';
import Title from "antd/es/typography/Title";

const b = block('CardsList')

interface CardsListProps {
    title?: string,
    cards: CardModel[]
}

const CardsList: React.FC<CardsListProps> = ({ title, cards }) => {

    return (
        <div className={b()}>
            <span className={b('title')}>
                <Title level={2}>{title}</Title>
            </span>
            <section className={b('items')}>
                {cards.map((card, ind) =>
                    <div key={ind} className={b('item')}>
                        <PoweredCard
                            id={ind}
                            title={card.title}
                            description={card.description}
                            image={
                                {
                                    normal_url: card.image.normal_url,
                                    small_url: card.image.small_url,
                                    large_url: card.image.large_url,
                                }
                            }
                            is_favorite={card.is_favorite}
                        />
                    </div>
                )}
            </section>
        </div>
    )
}

interface PoweredCardProps extends CardModel {
}

const PoweredCard: React.FC<PoweredCardProps> = ({ id, image, title, description, is_favorite }) => {
    const history = useHistory()
    const [isFavorite, setFavorite] = React.useState(is_favorite)

    const tryAddToFavorites = async (id: number) => {
        try {
            // const status = await addToFavorites(id)
            // if (status !== 200) throw new Error('failed to add to favorite')
        } catch (e) {
            console.log(`error while adding to favorites: ${e}`)
            setFavorite(!isFavorite)
            notification.error({
                message: 'Упс...', // title
                description: 'Не удалось добавить в избранное. Может попробуете ещё раз?',
                closeIcon: null,
            })
        }
    }

    const { Meta } = Card;
    const favIconStyle = {
        fontSize: 22
    }
    return (
        <Card
            headStyle={{ display: "none" }}
            hoverable
            style={{ borderRadius: 10 }}
            cover={
                <>
                    <div
                        className={b('item', 'favIcon')}
                        onClick={(e) => {
                            e.stopPropagation()
                            setFavorite(!isFavorite)
                            tryAddToFavorites(id)
                        }}
                    >
                        {isFavorite ? <HeartFilled style={{ ...favIconStyle, color: 'red' }}/> :
                            <HeartOutlined style={favIconStyle}/>}
                    </div>
                    <img alt="Oops :(" src={image.large_url} style={{maxHeight: 300}}/>
                </>
            }
            onClick={() => alert('Съебал отсуда')/*history.push(`/smth/${id}`)*/}
        >
            <Meta title={title} description={description}/>
        </Card>
    )
}

export default CardsList