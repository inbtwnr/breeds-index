import {useEffect, useState} from "react";
import {fetchClient} from "@/lib/utils";

const LIMIT = 10;

export function useBreeds() {
    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(false);

    function fetchBreeds(url, animal) {
        setLoading(true);
        fetchClient(`${url}/breeds?limit=${LIMIT}`)
            .then((data) => {
                const images = data.map(async (breed) => {
                    return await fetchClient(`${url}/images/${breed.reference_image_id}`);
                });
                return Promise.all(images).then((images) => {
                    return data.map((breed, index) => {
                        return {
                            ...breed,
                            species: animal,
                            image: images[index]
                        }
                    });
                });
            })
            .then((data) => {
                console.log(data);
                setBreeds((breeds) => breeds.concat(data));
            })
            .finally(() => {setLoading(false)});
    }

    useEffect(() => {
        fetchBreeds(`https://api.thecatapi.com/v1`, 'cat');
        fetchBreeds(`https://api.thedogapi.com/v1`, 'dog');
    }, []);

    return {breeds, loading};
}