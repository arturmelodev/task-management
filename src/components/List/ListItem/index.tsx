import style from '../List.module.scss'

export default function ListItem({ description, time }: {description: string, time: string}) {
    return (
        <li className={style.item}>
            <h3>{description}</h3>
            <span>{time}</span>
        </li>
    )
}