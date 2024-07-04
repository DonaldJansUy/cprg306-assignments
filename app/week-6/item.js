


export default function Item({name, quantity, category}) {
    return(
        <div className="border shadow p-2 bg-black text-white max-w-sm mx-auto rounded">
            <ul>
                <li>{name}</li>
                <li>{quantity}</li>
                <li>{category}</li>
            </ul>
        </div>
    );
}