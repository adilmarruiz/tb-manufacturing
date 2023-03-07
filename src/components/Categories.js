import { useState } from "react";
import { information } from "./global";

function Categories()
{

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
    if (item === selectedItem) {
        setSelectedItem(null);
    } else {
        setSelectedItem(item);
    }
    };  

    return(
        <div className="py-5">
            <h1 className="text-3xl text-center text-slate-50">Our Categories</h1>
            <div className="bg-zinc-500 text-zinc-50 rounded-lg shadow-md my-4 mx-28 divide-y">
            {information.map((item, index) => (
                <div key={index} className="">
                <div
                    className="flex justify-between items-center py-2 px-4 cursor-pointer"
                    onClick={() => handleItemClick(item)}
                >
                    <span className="text-lg font-medium">{item.nombre}</span>
                    <span>
                        <svg className={`w-6 h-6 fill-current text-gray-600 ${selectedItem === item ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg"viewBox="0 0 20 20">
                            <path d="M10 12.585l4.95-4.95 1.415 1.415-6.365 6.364-6.364-6.364 1.414-1.415 4.95 4.95z" />
                        </svg>
                    </span>
                </div>
                {selectedItem === item && (
                    <div className="w-full px-4 py-2 border-t-2 bg-gradient-to-r from-neutral-300 to-stone-400 text-gray-900 text-justify">
                        <div className="flex flex-row justify-center items-center my-4">
                        {item.img.map((image, index)=>(
                            <div key={index} className='border-2 w-1/5 h- rounded-lg m-1 border-gray-900 bg-white'>
                                <img src={`${process.env.PUBLIC_URL}${image.url}`} alt={image.nombre} className='rounded-lg'/>
                                <h1 className="text-lg text-center text-gray-50 font-bold bg-gray-900">{image.nombre}</h1>
                            </div>

                        ))}
                        </div>
                        <p className="px-24 font-mono text-lg">
                            {item.descripcion}
                        </p>
                    </div>
                )}
                </div>
            ))}
            </div>
            <h1 className="text-center text-2xl text-yellow-500 px-16 my-20">
                TB Manufacturing offers a wide range of sizes and colors. Percentage discounts can also applied to your order, based on the size/quantity of your orders. 
            </h1>
        </div>
    );
}

export default Categories;