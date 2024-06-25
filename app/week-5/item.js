


export default function Item({name, quantity, category}) {
    return(
        <div className="border shadow max-w-xs p-2 bg-black text-white ">
            <ul>
                <li>{name}</li>
                <li>{quantity}</li>
                <li>{category}</li>
            </ul>
        </div>
    );
}