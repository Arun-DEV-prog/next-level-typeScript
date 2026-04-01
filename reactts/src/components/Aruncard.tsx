interface ArunCard{
     name:string;
     price:number;
     isSpecial?:boolean
}

export function Aruncard({name,price, isSpecial=false}
    :ArunCard)
    {
     return (
         <article>
            <h2>
                {name} {isSpecial && <span>Noting</span>}
            </h2>
            <p>{price}</p>
         </article>
     )
}