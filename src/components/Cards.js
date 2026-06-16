import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export function Entry({ link, name, content }) {
    return (<div className="project">
        <div className="flex">
            <b><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></b>
            <p>{content}</p>
        </div>
    </div>);
}