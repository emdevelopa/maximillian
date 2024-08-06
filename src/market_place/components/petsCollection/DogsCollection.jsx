import { useState } from "react";
import { dogData } from "./data";

const DogsCollection = () => {

    return (
        <section className="mt-[4em] mb-[10em] text-white">
            <div className="grid grid-cols-3 gap-[3em]">
                {
                    dogData.map((dog) => (
                        <div key={dog.id} className=" hover:shadow-white">
                            <img className="rounded-2xl" src={dog.image} alt="image" />
                            <div className="py-2 hover:">
                                <span className="flex gap-9 py-4">
                                    <h3 className="text-[18px] font-bold">{dog.breed}</h3>
                                    <p className="text-grey text-[16px] font-light">{dog.gender}</p>
                                </span>
                                <p className="py-3">Price : # {dog.price}</p>
                                <button className="py-3 px-4 rounded text-[18px] font-semibold bg-gradient-to-r from-btnleft to-btnright">Purchase</button>
                            </div>
                        </div>

                    ))
                }
            </div>
        </section>
    );
}

export default DogsCollection