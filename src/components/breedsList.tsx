"use client"

import BreedCard from "@/components/breedCard";
import {useBreeds} from "@/hooks/useBreeds";

export default function BreedsList() {
    const {breeds, loading} = useBreeds();

    if(loading || breeds.length === 0) {
        return <div className={'mx-auto h-[calc(100vh-200px)] xl:h-[calc(100vh-160px)] w-full'}>
            <p className={'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'}>
                Please wait...
            </p>
        </div>;
    }

    return (
        <ul className={'px-5 lg:px-0 flex flex-wrap gap-2 xl:gap-2.5 lg:max-w-5xl xl:max-w-7xl mx-auto'}>
            {
                breeds.map((breed) => (
                    <BreedCard
                        key={breed.id}
                        id={breed.id}
                        name={breed.name}
                        image={breed.image}
                        species={breed.species}
                    />
                ))
            }
        </ul>
    );
}